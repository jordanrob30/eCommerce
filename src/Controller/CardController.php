<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Stripe\StripeClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/cards", name="api_cards")
 */
class CardController extends AbstractController
{
    private $stripe;
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->stripe = new StripeClient($_ENV["STRIPE_API_KEY"]);
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/create", name="api_cards_create", methods={"POST"})
     */
    public function createCard(Request $request): JsonResponse {

        $data = json_decode($request->getContent(), true);
        $errors = [];

        // get user if not object
        if(is_numeric($data['user']))
        {
            $user = $this->userRepository->find($data["user"]);
        }
        else{
            $user = $data["user"];
        }

        $token = $this->stripe->tokens->create([
            "card" => [
                "number" => $data["number"],
                "exp_month" => $data["exp_month"],
                "exp_year" => $data["exp_year"],
                "cvc" => $data["cvc"]
            ]
        ]);

        $this->stripe->customers->createSource(
            $user->getExternalStripeId(),
            ["source"=>$token]
        );

        return new JsonResponse(["errors"=>$errors],200);

    }

    /**
     * @Route("/read/all/id/{id}", name="api_cards_read_all_id", methods={"GET"})
     */
    public function readCards($id, Request $request): JsonResponse {

        $data = json_decode($request->getContent(), true);
        $errors = [];

        $user = $this->userRepository->find($id);

        return new JsonResponse($this->stripe->customers->allSources(
            $user->getExternalStripeId(),
            ['object' => 'card']
        ));

    }

    /**
     * @Route("/delete", name="api_cards_delete", methods={"POST"})
     */
    public function deleteCard(Request $request): JsonResponse {

        $data = json_decode($request->getContent(), true);
        $errors = [];

        // get user if not object
        if(is_numeric($data['user']))
        {
            $user = $this->userRepository->find($data["user"]);
        }
        else{
            $user = $data["user"];
        }

        return new JsonResponse($this->stripe->customers->deleteSource(
            $user->getExternalStripeId(),
            $data["card_id"],
            []
        ));

    }

}
