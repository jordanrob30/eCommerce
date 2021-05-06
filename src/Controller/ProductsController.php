<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Console\Output\ConsoleOutput;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
     * @Route("/api/products", name="api_products")
     */
class ProductsController extends AbstractController
{
    private $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
    * @Route("/create", name="api_products_create", methods={"POST"})
    */
    public function createProduct(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        try {
            $product = new Product;
            $product
                ->setName($data['name'])                //@string 
                ->setDescription($data['description'])  //@string
                ->setBuyprice($data['buyPrice'])        //@float
                ->setSellprice($data['sellPrice'])      //@float
                ->setCategory($data['category'])        //@string
                ->setTags($data['tags'])                //@Array[string]
                ->setStock($data['stock'])              //@int
                ->setCreatedtime(new \DateTime())
                ->setModifiedtime(new \DateTime());
            

            $this->productRepository->saveProduct($product);
        }catch (\Throwable $th) {

        }

        return $this->readProducts();
    }

    /**
    * @Route("/read/all/", name="api_products_read_all", methods={"GET"})
    */
    public function readProducts(): JsonResponse
    {
        $products = $this->productRepository->findAll();
        $data  = [];

        foreach($products as $product){
            $data[] = [
                'id' => $product->getId(),
                'name' => $product->getName(),
                'description' => $product->getDescription(),
                'buyPrice' => $product->getBuyprice(),
                'sellPrice' => $product->getSellprice(),
                'category' => $product->getCategory(),
                'tags' => $product->getTags(),
                'stock' => $product->getStock(),
            ];
        }

        return new JsonResponse($data);
    }

    /**
    * @Route("/read/all/id/{id}", name="api_products_read", methods={"GET"} )
    */
    public function readProduct($id): JsonResponse
    {
        $product = $this->productRepository->findOneBy(['id' => $id]);

        $data[] = [
            'id' => $product->getId(),
            'name' => $product->getName(),
            'description' => $product->getDescription(),
            'buyPrice' => $product->getBuyprice(),
            'sellPrice' => $product->getSellprice(),
            'category' => $product->getCategory(),
            'tags' => $product->getTags(),
            'stock' => $product->getStock(),
        ];
        
        return new JsonResponse($data);
    }

    /**
    * @Route("/update/{field}/{id}", name="api_products_update", methods={"PUT"})
    * 
    */
    public function updateProduct($feild, $id, Request $request): JsonResponse
    {
        $product = $this->productRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true)['data'];

        /**
        switch ($feild) {
            case 'name':
                $product->setName($data);
                break;
            case 'description':
                $product->setLastname($data);
                break;
            case 'buyPrice':
                $product->setBuyprice($data);
                break;
            case 'sellPrice':
                $product->setSellprice($data);
                break;
            case 'category':
                $product->setCategory($data);
                break;
            case 'tags':
                $product->setTags($data);
                break;
            case 'stock':
                $product->setStock($data);
            default:
                break;
        }
        */

        $product->setModifiedtime(new \DateTime());
        $this->productRepository->updateProduct($product);

        return $this->readProducts();
    }

    /**
    * @Route("/delete/{id}", name="api_products_delete", methods={"DELETE"})
    */
    public function deleteProduct($id): JsonResponse
    {
        $product = $this->productRepository->findOneBy(['id' => $id]);
        $this->productRepository->deleteProduct($product);

        return $this->readProducts();
    }
}
