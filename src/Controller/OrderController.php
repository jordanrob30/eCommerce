<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\Product;
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
    private $stripe;

    public function __construct(OrderRepository $orderRepository, UserRepository $userRepository, UserAddressRepository $userAddressRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->userRepository = $userRepository;
        $this->userAddressRepository = $userAddressRepository;
        $this->stripe = new StripeClient($_ENV["STRIPE_API_KEY"]);
    }

    /**
     * @Route("/create", name="api_orders_create", methods={"POST"})
     */
    public function createOrder(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        try {

            //get user if not object
            if(is_numeric($data['user']))
            {
                $user = $this->userRepository->find($data["user"]);
            }
            else{
                $user = $data["user"];
            }

            if(is_numeric($data['userAddress']))
            {
                $userAddress = $this->userAddressRepository->find($data["userAddress"]);
            }
            else{
                $userAddress = $data["userAddress"];
            }

            $customerID = $user->getExternalStripeId();

            // JUST FOR TESTING STRIPE
            // Will charge a fake card £2 each time an order is created
            $charge = $this->stripe->charges->create([
                "amount" => 200,
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

            $order = new Order();
            $order
                ->setUserid($user)
                ->setNotes($data['notes'])
                ->setOrderType("Normal")
                ->setStatus($data['status'])
                ->setExternalOrderId($charge->id)
                ->setCreatedtime(new \DateTime())
                ->setUserAddressId($userAddress)
                ->setModifiedtime(new \DateTime());

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
            $data[] = [
                'id' => $order->getId(),
                'notes' => $order->getNotes(),
                'type' => $order->getOrderType(),
                'status' => $order->getStatus(),
                'user' => $order->getUserid()
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

        $data = json_decode($request->getContent(), true)['data'];

        try {
            !empty($data['notes']) ? $order->setNotes($data['notes']) : null;
            !empty($data['type']) ? $order->setOrderType($data['type']) : null;
            !empty($data['status']) ? $order->setStatus($data['status']) : null;
            !empty($data['user']) ? $order->setUserid($data['user']): null;

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