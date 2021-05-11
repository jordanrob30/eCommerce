<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/category")
 */
class CategoryController extends AbstractController
{
    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @Route("/create", name="api_categorys_create", methods={"POST"})
     */
    public function createCategory(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        try {
            $category = new Category;
            $category
                ->setName($data['name'])//@string
                ->setCreatedtime(new \DateTime())
                ->setModifiedtime(new \DateTime());
            $this->categoryRepository->saveCategory($category);
            return $this->readCategorys();
        }catch (\Throwable $th) {
            return new JsonResponse($th);
        }

        
    }

    /**
     * @Route("/read/all/", name="api_categorys_read_all", methods={"GET"})
     */
    public function readCategorys(): JsonResponse
    {
        $categorys = $this->categoryRepository->findAll();
        $data  = [];

        foreach($categorys as $category){
            $data[] = [
                'id' => $category->getId(),
                'name' => $category->getName(),
            ];
        }

        return new JsonResponse($data);
    }

    /**
     * @Route("/read/all/id/{id}", name="api_categorys_read", methods={"GET"} )
     */
    public function readCategory($id): JsonResponse
    {
        $category = $this->categoryRepository->findOneBy(['id' => $id]);

        $data[] = [
            'id' => $category->getId(),
            'name' => $category->getName(),
        ];

        return new JsonResponse($data);
    }


    /**
     * @Route("/update/all/{id}", name="api_categorys_update_field", methods={"PUT"})
     *
     */
    public function updateCategory($id, Request $request): JsonResponse
    {
        $category = $this->categoryRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true)['data'];
        
        try {
            !empty($data['name']) ? 
                $category
                    ->setName($data['name'])
                    ->setModifiedtime(new \DateTime()) 
            : null;
            $this->categoryRepository->updateCategory($category);
            return $this->readCategorys();
        } catch (\Throwable $th){
            return new JsonResponse($th);
        }

        
    }

    /**
     * @Route("/delete/{id}", name="api_categorys_delete", methods={"DELETE"})
     */
    public function deleteCategory($id): JsonResponse
    {
        $category = $this->categoryRepository->findOneBy(['id' => $id]);
        $this->categoryRepository->deleteCategory($category);

        return $this->readCategorys();
    }
}
