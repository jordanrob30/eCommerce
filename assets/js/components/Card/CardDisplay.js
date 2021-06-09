import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@material-ui/core";
import React from "react";

const CardDisplay = ({ card }) => {
	return (
		<>
			<Card>
				<CardContent>
					<Typography color="textSecondary">{card.name}</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">{card.number.public}</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default CardDisplay;
