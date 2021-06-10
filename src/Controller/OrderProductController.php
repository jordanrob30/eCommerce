<?php

namespace App\Controller;

use App\Entity\OrderProduct;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\OrderProductRepository;
use App\Repository\OrderRepository;
use App\Repository\Product;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonDecode;

/**
 * @Route("/api/orderProduct", name="order_product")
 */
class OrderProductController extends AbstractController
{

    private $orderRepository;
    private $productRepository;
    private $orderProductRepository;

    public function __construct(OrderRepository $orderRepository, ProductRepository $productRepository, OrderProductRepository $orderProductRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->orderProductRepository = $orderProductRepository;
        $this->productRepository = $productRepository;
    }

    /**
     * @Route("/create", name="order_product")
     */
    public function createProductOrder(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        try {
            $order = $this->orderRepository->find($data['orderId']);
            $product = $this->productRepository->find($data['productId']);

            $orderProduct = new OrderProduct();
            $orderProduct
                ->setProductid($product)
                ->setOrderid($order)
                ->setQty($data['qty']);
            return new JsonResponse($this->orderProductRepository->saveOrderProduct($orderProduct));
        } catch (\Throwable $th) {
            return new JsonResponse($th);
        }
    }
}
