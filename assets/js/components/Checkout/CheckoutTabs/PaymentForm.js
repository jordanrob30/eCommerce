import { Button } from "@material-ui/core";
import {
	Elements,
	ElementsConsumer,
	CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import React from "react";

const PaymentForm = ({ next, back }) => {
	const stripePromise = loadStripe(
		"pk_test_51IikwiLNjhQ7s6Ra7wGuKzcaNgRvXIBGTXX3NRaYv4Cv8AspnKMR5q2VEv2Kv0PCv6S5fvlclvnWLLxE4dO8PnV100Bi2nXJ5s"
	);

	const cart = Cookies.getJSON("User").cart;
	const total = cart;

	const handleSubmit = async (event, elements, stripe) => {
		event.preventDefault();

		if (!stripe || !elements) return;

		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			console.log("[error]", error);
		} else {
			const orderData = cart;

			console.log(orderData);

			next(2);
		}
	};

	return (
		<div>
			<Elements stripe={stripePromise}>
				<ElementsConsumer>
					{({ elements, stripe }) => (
						<form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
							<CardElement />
							<br /> <br />
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<Button variant="outlined" onClick={() => back(2)}>
									Back
								</Button>
								<Button
									type="submit"
									variant="contained"
									disabled={!stripe}
									color="primary"
								>
									Pay
								</Button>
							</div>
						</form>
					)}
				</ElementsConsumer>
			</Elements>
		</div>
	);
};

export default PaymentForm;
