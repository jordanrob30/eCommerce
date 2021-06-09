import {
	Dialog,
	Slide,
	DialogActions,
	DialogContent,
	Button,
	Box,
	Grid,
} from "@material-ui/core";
import React from "react";
import CardDisplay from "./CardDisplay";

const cards = [
	{ name: "test card", number: { public: "**** **** **** 4242" } },
];

const CardDialog = ({ open, closeCard }) => {
	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	const handleClose = () => closeCard();

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogContent>
				<Box display="inline-block">
					<Grid container justify="center">
						{cards.map((card) => (
							<Grid item xs={12} key={card.name}>
								<CardDisplay card={card} />
							</Grid>
						))}
					</Grid>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary">
					Close
				</Button>
				<Button onClick={handleClose} color="primary">
					Add Card
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CardDialog;
