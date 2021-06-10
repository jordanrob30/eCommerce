import { Box, Button, Typography } from "@material-ui/core";
import Cookies from "js-cookie";
import React from "react";

const Confirmation = ({ close, orderData, error }) => {
	return (
		<>
			<Box align="center">
				<Typography variant="h4" align="center">
					Confrimation
				</Typography>

				{error ? (
					<Typography variant="error">Error</Typography>
				) : (
					<>
						<Typography variant="body1">
							Successs! £{orderData.totalCost} Paid for {orderData.totalItems}{" "}
							items.
						</Typography>
						<Typography variant="body1">
							Confirmation email and reciept sent to{" "}
							{Cookies.getJSON("User").email}
						</Typography>
					</>
				)}
			</Box>
			<Box align="right" marginTop={2}>
				<Button color="primary" onClick={close}>
					Done.
				</Button>
			</Box>
		</>
	);
};

export default Confirmation;
