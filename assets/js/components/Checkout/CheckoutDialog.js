import {
	Backdrop,
	Dialog,
	DialogContent,
	DialogTitle,
	makeStyles,
	Step,
	StepLabel,
	Stepper,
	useTheme,
} from "@material-ui/core";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import {
	Confirmation,
	Details,
	PaymentForm,
	ShippingForm,
} from "./CheckoutTabs";

const steps = ["details", "shipping", "payment"];

const useStyles = makeStyles((theme) => ({
	dialog: {
		width: "100%",
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
}));

const CheckoutDialog = ({ open, closeDialog }) => {
	const theme = useTheme();
	const classes = useStyles(theme);

	const [activeStep, setActiveStep] = useState(0);
	const [cart, setCart] = useState([]);

	const onOpen = () => {
		setCart(Cookies.getJSON("User").cart);
	};

	const handleClose = () => {
		setActiveStep(0);
		closeDialog();
	};

	const next = (step) => {
		setActiveStep(step + 1);
	};

	const back = (step) => {
		setActiveStep(step - 1);
	};

	const tab = () => {
		switch (activeStep) {
			case 0:
				return <Details cart={cart} next={next} cancel={handleClose} />;
			case 1:
				return <ShippingForm next={next} back={back} />;
			case 2:
				return <PaymentForm next={next} back={back} />;
			default:
				return <Confirmation close={handleClose} />;
		}
	};
	return (
		<Dialog
			open={open}
			onRendered={onOpen}
			onClose={handleClose}
			className={classes.dialog}
			fullWidth
		>
			<DialogTitle align="center">Checkout</DialogTitle>
			<DialogContent>
				<Stepper activeStep={activeStep} className={classes.stepper}>
					{steps.map((step) => (
						<Step key={step}>
							<StepLabel>{step}</StepLabel>
						</Step>
					))}
				</Stepper>
				{tab()}
			</DialogContent>
		</Dialog>
	);
};

export default CheckoutDialog;
