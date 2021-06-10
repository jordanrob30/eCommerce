import { Box, Button } from "@material-ui/core";
import {
	Elements,
	ElementsConsumer,
	CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { buildOrder, sendOrder } from "./Order";

const PaymentForm = ({ next, back, shippingData, setOrderData, setError }) => {
	const stripePromise = loadStripe(
		"pk_test_51IikwiLNjhQ7s6Ra7wGuKzcaNgRvXIBGTXX3NRaYv4Cv8AspnKMR5q2VEv2Kv0PCv6S5fvlclvnWLLxE4dO8PnV100Bi2nXJ5s"
	);

	const order = buildOrder();

	const handleSubmit = async (event, elements, stripe) => {
		event.preventDefault();

		if (!stripe || !elements) return;

		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			setError(error);
		} else {
			const orderData = {
				...order,
				paymentMethod: paymentMethod,
				shippingData: shippingData,
			};
			setOrderData(orderData);
			await sendOrder(orderData);

			next(2);
		}
	};

	return (
		<div>
			<Elements stripe={stripePromise}>
				<ElementsConsumer>
					{({ elements, stripe }) => (
						<form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
							<CardElement
								options={{
									style: {
										base: {
											iconColor: "#c4f0ff",
											color: "#fff",
											fontWeight: "500",
											fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
											fontSize: "16px",
											fontSmoothing: "antialiased",
											":-webkit-autofill": {
												color: "#fce883",
											},
											"::placeholder": {
												color: "#87BBFD",
											},
										},
										invalid: {
											iconColor: "#FFC7EE",
											color: "#FFC7EE",
										},
									},
								}}
							/>
							<br /> <br />
							<Box align="right" marginTop={2}>
								<Button onClick={() => back(2)}>Back</Button>
								<Button type="submit" disabled={!stripe} color="primary">
									Pay £{order.totalCost}
								</Button>
							</Box>
						</form>
					)}
				</ElementsConsumer>
			</Elements>
		</div>
	);
};

export default PaymentForm;
