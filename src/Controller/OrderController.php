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

    public function __construct(OrderRepository $orderRepository, UserRepository $userRepository, UserAddressRepository $userAddressRepository, OrderProductRepository $orderProductRepository, ProductRepository $productRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->userRepository = $userRepository;
        $this->userAddressRepository = $userAddressRepository;
    }

    /**
     * @Route("/create", name="api_orders_create", methods={"POST"})
     */
    public function createOrder(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        try {
            $user = $this->userRepository->find($data['userId']);
            $userAddress = $this->userAddressRepository->find($data['id']);

            // Create new order
            $order = new Order();
            $order
                ->setUserid($user)
                ->setOrderType("Normal")
                ->setStatus("Open")
                ->setExternalOrderId("placeholder")
                ->setCreatedtime(new \DateTime())
                ->setUserAddressId($userAddress)
                ->setModifiedtime(new \DateTime());

            return new JsonResponse($this->orderRepository->saveOrder($order));
        } catch (\Throwable $th) {
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

        foreach ($orders as $order) {

            //build the products output
            $prod_arr = [];
            foreach ($order->getOrderProducts() as $orderProduct) {
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

        try {
            $orders = $this->orderRepository->findBy([$field => $search]);
            $data  = [];

            foreach ($orders as $order) {
                $data[] = [
                    'id' => $order->getId(),
                    'notes' => $order->getNotes(),
                    'type' => $order->getOrderType(),
                    'status' => $order->getStatus(),
                    'user' => $order->getUserid()
                ];
            }

            return new JsonResponse($data);
        } catch (\Throwable $th) {
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
        } catch (\Throwable $th) {
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
