<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/api/users", name="api_users")
 */

class UserController extends AbstractController
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/register", name="api_users_create", methods={"POST"})
     */
    public function createUser(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        try {
            $user = new User;
            $user
                ->setEmail($data['email'])
                ->setRoles($data['roles'])
                ->setPassword($data['password'])
                ->setFirstname($data['firstname'])
                ->setLastname($data['lastname'])
                ->setExternalStripeId('')
                ->setCreatedtime(new \DateTime())
                ->setModifiedtime(new \DateTime());;
            
            $this->userRepository->saveUser($user);
            return $this->readUsers();
        }catch(\Throwable $th){
            return new JsonResponse($th);
        }
    }

    /**
     * @Route("/read/all/", name="api_users_read_all", methods={"GET"})
     */
    public function readUsers(): JsonResponse
    {
        $users = $this->userRepository->findAll();
        $data  = [];

        foreach($users as $user){
            $data[] = [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'roles' => $user->getRoles(),
                'firstname' => $user->getFirstname(),
                'lastname' => $user->getLastname()
            ];
        }

        return new JsonResponse($data);
    }

    /**
     * @Route("/read/all/id/{id}", name="api_users_read", methods={"GET"} )
     */
    public function readUser($id): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['id' => $id]);

        $data[] = [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'roles' => $user->getRoles(),
            'firstname' => $user->getFirstname(),
            'lastname' => $user->getLastname()
        ];

        return new JsonResponse($data);
    }

    /**
     * @Route("/update/{field}/{id}", name="api_users_update", methods={"PUT"})
     *
     */
    public function updateUser($feild, $id, Request $request): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true)['data'];

        switch ($feild) {
            case 'firstname':
                $user->setFirstname($data);
                break;
            case 'lastname':
                $user->setLastname($data);
                break;
            default:
                break;
        }

        $user->setModifiedtime(new \DateTime());
        return $this->readUsers();
    }

    /**
     * @Route("/delete/{id}", name="api_users_delete", methods={"DELETE"})
     */
    public function deleteUser(): JsonResponse
    {
        return $this->readUsers();
    }
}