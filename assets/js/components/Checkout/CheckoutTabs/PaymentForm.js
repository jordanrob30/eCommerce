import { Box, Button } from "@material-ui/core";
import React from "react";

const PaymentForm = ({ next, back }) => {
	return (
		<div>
			<form>
				<Box align="right">
					<Button color="secondary" onClick={() => back(2)}>
						Back
					</Button>
					<Button type="submit" color="primary" onClick={() => next(2)}>
						Continue
					</Button>
				</Box>
			</form>
		</div>
	);
};

export default PaymentForm;
