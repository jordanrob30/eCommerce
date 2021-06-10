<?php

namespace App\Controller;

use App\Entity\UserAddress;
use App\Repository\UserAddressRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/address", name="api_user_address")
 */
class UserAddressController extends AbstractController
{

    private $userAddressRepository;
    private $userRepository;

    public function __construct(UserAddressRepository $userAddressRepository, UserRepository $userRepository)
    {
        $this->userAddressRepository = $userAddressRepository;
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/create", name="api_user_address_create", methods={"POST"})
     */
    public function createUserAddress(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (is_numeric($data['userId'])) {
            $user = $this->userRepository->find($data["userId"]);
        } else {
            $user = $data["user"];
        }

        try {
            $userAddress = new UserAddress();
            $userAddress
                ->setUserid($user)
                ->setLine1($data['Address1'])
                ->setLine2($data['Address2'])
                ->setCity($data['City'])
                ->setPostcode($data['PostalCode'])
                ->setCountry($data['Country']);

            return new JsonResponse($this->userAddressRepository->saveUserAddress($userAddress));
        } catch (\Throwable $th) {
            return new JsonResponse($th);
        }
    }

    /**
     * @Route("/read/all/", name="api_user_address_read_all", methods={"GET"})
     */
    public function readUserAddresses(): JsonResponse
    {
        $userAddresses = $this->userAddressRepository->findAll();
        $data = [];

        foreach ($userAddresses as $userAddress) {
            $data[] = [
                'id' => $userAddress->getId(),
                'line_1' => $userAddress->getLine1(),
                'line_2' => $userAddress->getLine2(),
                'city' => $userAddress->getCity(),
                'postcode' => $userAddress->getPostcode(),
                'country' => $userAddress->getCountry()
            ];
        }

        return new JsonResponse($data);
    }

    /**
     * @Route("/read/all/{field}/{search}", name="api_user_address_read_all_by_feild", methods={"GET"})
     */
    public function readUserAddressesByField($field, $search): JsonResponse
    {

        try {
            $userAddresses = $this->userAddressRepository->findBy([$field => $search]);
            $data = [];

            foreach ($userAddresses as $userAddress) {
                $data[] = [
                    'id' => $userAddress->getId(),
                    'line_1' => $userAddress->getLine1(),
                    'line_2' => $userAddress->getLine2(),
                    'city' => $userAddress->getCity(),
                    'postcode' => $userAddress->getPostcode(),
                    'country' => $userAddress->getCountry()
                ];
            }
            return new JsonResponse($data);
        } catch (\Throwable $th) {
            return new JsonResponse([]);
        }
    }

    /**
     * @Route("/read/all/id/{id}", name="api_user_address_read", methods={"GET"} )
     */
    public function readUserAddress($id): JsonResponse
    {
        $userAddress = $this->userAddressRepository->findOneBy(['id' => $id]);

        $data[] = [
            'id' => $userAddress->getId(),
            'line_1' => $userAddress->getLine1(),
            'line_2' => $userAddress->getLine2(),
            'city' => $userAddress->getCity(),
            'postcode' => $userAddress->getPostcode(),
            'country' => $userAddress->getCountry()
        ];

        return new JsonResponse($data);
    }

    /**
     * @Route("/update/all/{id}", name="api_user_address_update_field", methods={"PUT"})
     *
     */
    public function updateUserAddress($id, Request $request): JsonResponse
    {
        $userAddress = $this->userAddressRepository->findOneBy(['id' => $id]);

        $data = json_decode($request->getContent(), true)['data'];

        try {
            !empty($data['line_1']) ? $userAddress->setLine1($data['line_1']) : null;
            !empty($data['line_2']) ? $userAddress->setLine2($data['line_2']) : null;
            !empty($data['city']) ? $userAddress->setCity($data['city']) : null;
            !empty($data['postcode']) ? $userAddress->setPostcode($data['postcode']) : null;
            !empty($data['country']) ? $userAddress->setCountry($data['country']) : null;

            $this->userAddressRepository->updateUserAddress($userAddress);
            return $this->readUserAddresses();
        } catch (\Throwable $th) {
            return new JsonResponse($th);
        }
    }

    /**
     * @Route("/update/{field}/{id}", name="api_user_address_update_field", methods={"PUT"})
     *
     */
    public function updateUserAddressField($field, $id, Request $request): JsonResponse
    {
        $userAddress = $this->userAddressRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true)['data'];

        switch ($field) {
            case 'line_1':
                $userAddress->setLine1($data);
                break;
            case 'line_2':
                $userAddress->setLine2($data);
                break;
            case 'city':
                $userAddress->setCity($data);
                break;
            case 'postcode':
                $userAddress->setPostcode($data);
                break;
            case 'country':
                $userAddress->setCountry($data);
                break;
            default:
                break;
        }

        $this->userAddressRepository->updateUserAddress($userAddress);

        return $this->readUserAddresses();
    }

    /**
     * @Route("/delete/{id}", name="api_user_address_delete", methods={"DELETE"})
     */
    public function deleteUserAddress($id): JsonResponse
    {
        $userAddress = $this->userAddressRepository->findOneBy(['id' => $id]);
        $this->userAddressRepository->deleteUserAddress($userAddress);

        return $this->readUserAddresses();
    }
}
