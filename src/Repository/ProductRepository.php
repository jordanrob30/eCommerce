<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{

    private $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Product::class);
        $this->entityManager = $entityManager;

    }

    public function saveProduct(Product $product)
    {
        $this->entityManager->persist($product);
        $this->entityManager->flush();
    }

    public function updateProduct(Product $product) : Product
    {
        $this->entityManager->persist($product);
        $this->entityManager->flush();

        return $product;
    }

    public function deleteProduct(Product $product)
    {
        $this->entityManager->remove($product);
        $this->entityManager->flush();
    }


}