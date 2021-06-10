<?php

namespace App\Repository;

use App\Entity\OrderProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method OrderProduct|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderProduct|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderProduct[]    findAll()
 * @method OrderProduct[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderProductRepository extends ServiceEntityRepository
{

    private $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, OrderProduct::class);
        $this->entityManager = $entityManager;
    }

    public function saveOrderProduct(OrderProduct $orderProduct)
    {
        $this->entityManager->persist($orderProduct);
        $this->entityManager->flush();
        return $orderProduct->getId();
    }

    public function updateOrderProduct(OrderProduct $orderProduct): OrderProduct
    {
        $this->entityManager->persist($orderProduct);
        $this->entityManager->flush();

        return $orderProduct;
    }

    public function deleteOrderProduct(OrderProduct $orderProduct)
    {
        $this->entityManager->remove($orderProduct);
        $this->entityManager->flush();
    }
}
