<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Entity\User;
use phpDocumentor\Reflection\Types\Boolean;
use Stripe\Customer;
use Stripe\Stripe;
use Stripe\StripeClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api/users", name="api_users")
 */

class UserController extends AbstractController
{
    private $userRepository;
    private $stripe;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
        $this->stripe = new StripeClient($_ENV["STRIPE_API_KEY"]);
    }

    /**
     * @Route("/register", name="api_users_create", methods={"POST"})
     */
    public function createUser(Request $request, UserPasswordEncoderInterface $passwordEncoder) //: JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!$this->doesUserExist($data['email'])) {
            try {

                // Create stripe customer
                $customer = $this->stripe->customers->create([
                    "email" => $data["email"],
                    "name" => $data["firstname"] . " " . $data["lastname"]
                ]);

                $user = new User;
                $user
                    ->setEmail($data['email'])
                    ->setRoles(["ROLE_USER"])
                    ->setFirstname($data['firstname'])
                    ->setLastname($data['lastname'])
                    ->setExternalStripeId($customer->id)
                    ->setCreatedtime(new \DateTime())
                    ->setModifiedtime(new \DateTime());

                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $data["password"]
                    )
                );

                $this->userRepository->saveUser($user);
                return $this->readUsers();
            } catch (\Throwable $th) {
                return new JsonResponse([
                    'error' => true,
                    'errorType' => 'SeverError',
                    'errorMsg' => 'Issue on Server end'
                ]);
            }
        }

        return new JsonResponse([
            'error' => true,
            'errorType' => 'nonUniqueEmail',
            'errorMsg' => 'Email is already in use'
        ]);
    }

    /**
     * @Route("/read/all/", name="api_users_read_all", methods={"GET"})
     */
    public function readUsers(): JsonResponse
    {
        $users = $this->userRepository->findAll();
        $data  = [];

        foreach ($users as $user) {
            $data[] = [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'roles' => $user->getRoles(),
                'firstname' => $user->getFirstname(),
                'lastname' => $user->getLastname(),
                'external_stripe_id' => $user->getExternalStripeId()
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
            'lastname' => $user->getLastname(),
            'external_stripe_id' => $user->getExternalStripeId()
        ];

        return new JsonResponse($data);
    }

    /**
     * @Route("/read/all/email/{email}", name="api_users_read_email", methods={"GET"} )
     */
    public function readUserByEmail($email): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['email' => $email]);

        $data[] = [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'roles' => $user->getRoles(),
            'firstname' => $user->getFirstname(),
            'lastname' => $user->getLastname(),
            'external_stripe_id' => $user->getExternalStripeId()
        ];

        return new JsonResponse($data);
    }

    /**
     * @Route("/update/{field}/{id}", name="api_users_field_update", methods={"PUT"})
     *
     */
    public function updateUserField($field, $id, Request $request): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true)['data'];

        switch ($field) {
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
        $this->userRepository->updateUser($user);
        return $this->readUsers();
    }


    /**
     * @Route("/update/{id}", name="api_users_update", methods={"PUT"})
     */
    public function updateUser($id, Request $request): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true);

        try {
            $user->setFirstname($data['firstname']);
            $user->setLastname($data['lastname']);
            $user->setModifiedtime(new \DateTime());
            $this->userRepository->updateUser($user);
        } catch (\Throwable $th) {
            return new JsonResponse([
                'error' => true,
                'errorType' => 'SeverError',
                'errorMsg' => 'Issue on Server end'
            ]);
        }

        return $this->readUsers();
    }

    /**
     * @Route("/delete/{id}", name="api_users_delete", methods={"DELETE"})
     */
    public function deleteUser($id): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['id' => $id]);
        $this->userRepository->deleteUser($user);

        return $this->readUsers();
    }

    /**
     * @Route("/auth/init"), name="api_user_auth_init", methods={"PUT"}
     */
    public function initAuthUser(Request $request, UserPasswordEncoderInterface $passwordEncoder): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $user = $this->userRepository->findOneBy(['email' => $data['email']]);
        try {
            if ($passwordEncoder->isPasswordValid($user, $data['password'])) {
                return $this->readUser($user->getId());
            } else {
                throw new Throwable("Authentication failed");
            }
        } catch (\Throwable $th) {
            return new JsonResponse($$th->getMessage());
        }
    }

    /**
     * @Route("/auth"), name="api_user_auth", methods={"PUT"}
     */
    public function authUser(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        try {
            if ($data['auth_token'] === "successful") {
                return new JsonResponse(true);
            } else {
                return new JsonResponse(false);
            }
        } catch (\Throwable $th) {
            return new JsonResponse($th->getMessage());
        }
    }



    private function doesUserExist(String $email): bool
    {
        $user = $this->userRepository->findOneBy(['email' => $email]);
        if (!empty($user)) {
            return true;
        }

        return false;
    }
}
