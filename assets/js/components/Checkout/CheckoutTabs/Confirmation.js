import { Box, Button, Typography } from "@material-ui/core";
import React from "react";

const Confirmation = ({ close }) => {
	return (
		<>
			<Box align="center">
				<Typography variant="h4" align="center">
					Confrimation
				</Typography>
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
