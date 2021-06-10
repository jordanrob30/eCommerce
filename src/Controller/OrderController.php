<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\OrderProduct;
use App\Entity\Product;
use App\Repository\OrderProductRepository;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\UserAddressRepository;
use App\Repository\UserRepository;
use Stripe\StripeClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Console\Output\ConsoleOutput;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/orders", name="apt_orders")
 */
class OrderController extends AbstractController
{
    private $orderRepository;
    private $userRepository;
    private $userAddressRepository;
    private $orderProductRepository;
    private $productRepository;
    private $stripe;

    public function __construct(OrderRepository $orderRepository, UserRepository $userRepository, UserAddressRepository $userAddressRepository, OrderProductRepository $orderProductRepository, ProductRepository $productRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->userRepository = $userRepository;
        $this->userAddressRepository = $userAddressRepository;
        $this->orderProductRepository = $orderProductRepository;
        $this->productRepository = $productRepository;
        $this->stripe = new StripeClient($_ENV["STRIPE_API_KEY"]);
    }

    /**
     * @Route("/create", name="api_orders_create", methods={"POST"})
     */
    public function createOrder(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $errors = [];

        try {
            $user = $this->userRepository->find($this->getUser()->getId());

            //use the first address found (for now, this can be changed to use multiple)
            $userAddress = null;
            foreach($this->getUser()->getUserAddresses() as $userAddress)
            {
                break;
            }

            if (sizeof($data["products"]) == 0) {
                $errors[] = "Empty cart";
                return new JsonResponse(["errors"=>$errors], 200);
            }

            // Create new order
            $order = new Order();
            $order
                ->setUserid($user)
                ->setNotes($data['notes'])
                ->setOrderType("Normal")
                ->setStatus("Open")
                ->setExternalOrderId("placeholder")
                ->setCreatedtime(new \DateTime())
                ->setUserAddressId($userAddress)
                ->setModifiedtime(new \DateTime());
            $this->orderRepository->saveOrder($order);

            $totalPrice = 0;

            // Create OrderProduct objects from data
            $productsData = $data["products"];
            foreach($productsData as $productData) {
                // get product if not object
                if(is_numeric($productData["id"]))
                {
                    $product = $this->productRepository->find($productData["id"]);
                }
                else{
                    $product = $productData;
                }

                $totalPrice += $product->getSellprice() * intval($productData["qty"]);

                $orderProduct = new OrderProduct();
                $orderProduct
                    ->setOrderid($order)
                    ->setDiscountValue(0)
                    ->setProductid($product)
                    ->setQty($productData["qty"]);
                $this->orderProductRepository->saveOrderProduct($orderProduct);
            }

            $customerID = $user->getExternalStripeId();

            $charge = $this->stripe->charges->create([
                "amount" => $totalPrice*100,
                "currency" => "gbp",
                "customer" => $customerID,
                "shipping" => [
                    "name" => $user->getFirstname()." ".$user->getLastname(),
                    "address" => [
                        "line1" => $userAddress->getLine1(),
                        "line2" => $userAddress->getLine2(),
                        "city" => $userAddress->getCity(),
                        "postal_code" => $userAddress->getPostcode(),
                        "country" => $userAddress->getCountry()
                    ]
                ]
            ]);

            $order->setExternalOrderId($charge->id);
            $order->setStatus("Paid");
            $this->orderRepository->saveOrder($order);

            return $this->readOrders();

        }catch (\Throwable $th) {
            return new JsonResponse($th);
        }
    }

    /**
     * @Route("/read/all/", name="api_orders_read_all", methods={"GET"})
     */
    public function readOrders(): JsonResponse
    {
        $orders = $this->orderRepository->findAll();
        $data = [];

        foreach($orders as $order){

            //build the products output
            $prod_arr = [];
            foreach($order->getOrderProducts() as $orderProduct)
            {
                $orderProduct_Product = $orderProduct->getProductid();
                $prod_arr[] = [
                    'id' => $orderProduct_Product->getId(),
                    'name' => $orderProduct_Product->getName(),
                    'description' => $orderProduct_Product->getDescription(),
                    'buyPrice' => $orderProduct_Product->getBuyprice(),
                    'sellPrice' => $orderProduct_Product->getSellprice(),
                    'category' => $orderProduct_Product->getCategory(),
                    'tags' => $orderProduct_Product->getTags(),
                    'stock' => $orderProduct_Product->getStock(),
                    'imageSource' => $orderProduct_Product->getImagesource()
                ];
            }

            $data[] = [
                'id' => $order->getId(),
                'notes' => $order->getNotes(),
                'type' => $order->getOrderType(),
                'status' => $order->getStatus(),
                'user' => $order->getUserid(),
                'products' => $prod_arr
            ];
        }

        return new JsonResponse($data);
    }

    /**
     * @Route("/read/all/{field}/{search}", name="api_orders_read_all_by_field", methods={"GET"})
     */
    public function readOrdersByField($field, $search): JsonResponse
    {

        try{
            $orders = $this->orderRepository->findBy([$field => $search]);
            $data  = [];

            foreach($orders as $order){
                $data[] = [
                    'id' => $order->getId(),
                    'notes' => $order->getNotes(),
                    'type' => $order->getOrderType(),
                    'status' => $order->getStatus(),
                    'user' => $order->getUserid()
                ];
            }

            return new JsonResponse($data);
        }catch (\Throwable $th){
            return new JsonResponse([]);
        }
    }

    /**
     * @Route("/read/all/id/{id}", name="api_orders_read", methods={"GET"} )
     */
    public function readOrder($id): JsonResponse
    {
        $order = $this->orderRepository->findOneBy(['id' => $id]);

        $data[] = [
            'id' => $order->getId(),
            'notes' => $order->getNotes(),
            'type' => $order->getOrderType(),
            'status' => $order->getStatus(),
            'user' => $order->getUserid()
        ];

        return new JsonResponse($data);
    }


    /**
     * @Route("/update/all/{id}", name="api_orders_update", methods={"PUT"})
     *
     */
    public function updateOrder($id, Request $request): JsonResponse
    {
        $order = $this->orderRepository->findOneBy(['id' => $id]);

        $data = json_decode($request->getContent(), true);

        try {
            !empty($data['notes']) ? $order->setNotes($data['notes']) : null;
            !empty($data['type']) ? $order->setOrderType($data['type']) : null;
            !empty($data['status']) ? $order->setStatus($data['status']) : null;

            $order->setModifiedtime(new \DateTime());
            $this->orderRepository->updateOrder($order);

            return $this->readOrders();
        } catch (\Throwable $th){
            return new JsonResponse($th);
        }
    }

    /**
     * @Route("/update/{field}/{id}", name="api_orders_update_field", methods={"PUT"})
     *
     */
    public function updateOrderField($field, $id, Request $request): JsonResponse
    {
        $order = $this->orderRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true)['data'];


        switch ($field) {
            case 'notes':
                $order->setNotes($data);
                break;
            case 'type':
                $order->setOrderType($data);
                break;
            case 'status':
                $order->setStatus($data);
                break;
            case 'user':
                $order->setUserid($data);
                break;
            default:
                break;
        };

        $order->setModifiedtime(new \DateTime());
        $this->orderRepository->updateOrder($order);

        return $this->readOrders();
    }

    /**
     * @Route("/delete/{id}", name="api_orders_delete", methods={"DELETE"})
     */
    public function deleteOrder($id): JsonResponse
    {
        $order = $this->orderRepository->findOneBy(['id' => $id]);
        $this->orderRepository->deleteOrder($order);

        return $this->readOrders();
    }
}