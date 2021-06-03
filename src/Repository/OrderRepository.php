<?php

namespace App\Repository;

use App\Entity\Order;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Order|null find($id, $lockMode = null, $lockVersion = null)
 * @method Order|null findOneBy(array $criteria, array $orderBy = null)
 * @method Order[]    findAll()
 * @method Order[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderRepository extends ServiceEntityRepository
{

    private $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Order::class);
        $this->entityManager = $entityManager;

    }

    public function saveOrder(Order $order)
    {
        $this->entityManager->persist($order);
        $this->entityManager->flush();
    }

    public function updateOrder(Order $order) : Order
    {
        $this->entityManager->persist($order);
        $this->entityManager->flush();

        return $order;
    }

    public function deleteOrder(Order $order)
    {
        $this->entityManager->remove($order);
        $this->entityManager->flush();
    }
}