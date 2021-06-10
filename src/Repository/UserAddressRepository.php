<?php

namespace App\Repository;

use App\Entity\UserAddress;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserAddress|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserAddress|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserAddress[]    findAll()
 * @method UserAddress[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserAddressRepository extends ServiceEntityRepository
{

    private $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, UserAddress::class);
        $this->entityManager = $entityManager;
    }

    public function saveUserAddress(UserAddress $userAddress)
    {
        $this->entityManager->persist($userAddress);
        $this->entityManager->flush();
        return $userAddress->getId();
    }

    public function updateUserAddress(UserAddress $userAddress): UserAddress
    {
        $this->entityManager->persist($userAddress);
        $this->entityManager->flush();
        return $userAddress;
    }

    public function deleteUserAddress(UserAddress $userAddress)
    {
        $this->entityManager->remove($userAddress);
        $this->entityManager->flush();
    }
}
