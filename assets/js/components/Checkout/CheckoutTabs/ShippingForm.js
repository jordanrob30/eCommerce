import { Box, Button } from "@material-ui/core";

import React from "react";

const ShippingForm = ({ next, back, form, setForm }) => {
	return (
		<div>
			<form>
				<Box align="right">
					<Button color="secondary" onClick={() => back(1)}>
						Back
					</Button>
					<Button type="submit" color="primary" onClick={() => next(1)}>
						Continue
					</Button>
				</Box>
			</form>
		</div>
	);
};

export default ShippingForm;
