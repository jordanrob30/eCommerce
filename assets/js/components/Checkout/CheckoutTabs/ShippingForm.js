import { Box, Button, TextField } from "@material-ui/core";
import Cookies from "js-cookie";

import React, { useState } from "react";

const ShippingForm = ({ next, back, setFormData }) => {
	const [shippingData, setShippingData] = useState({
		userId: Cookies.getJSON("User").id,
		Firstname: "",
		Lastname: "",
		Address1: "",
		Address2: "",
		City: "",
		Country: "",
		PostalCode: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData(shippingData);
		next(1);
	};

	const handleChange = (key, value) => {
		let data = shippingData;
		data[key] = value;
		setShippingData(data);
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Box align="center">
					<TextField
						required
						type="text"
						label="First Name"
						onChange={(e) => handleChange("Firstname", e.target.value)}
						fullWidth
					/>
					<TextField
						required
						type="text"
						label="Last name"
						onChange={(e) => handleChange("Lastname", e.target.value)}
						fullWidth
					/>
					<TextField
						required
						type="text"
						label="Address Line 1"
						onChange={(e) => handleChange("Address1", e.target.value)}
						fullWidth
					/>
					<TextField
						type="text"
						label="Address Line 2"
						onChange={(e) => handleChange("Address2", e.target.value)}
						fullWidth
					/>
					<TextField
						required
						type="text"
						label="City"
						onChange={(e) => handleChange("City", e.target.value)}
						fullWidth
					/>
					<TextField
						required
						type="text"
						label="Country"
						onChange={(e) => handleChange("Country", e.target.value)}
						fullWidth
					/>
					<TextField
						required
						type="text"
						label="Postal code"
						onChange={(e) => handleChange("PostalCode", e.target.value)}
						fullWidth
					/>
				</Box>
				<Box align="right" marginTop={2}>
					<Button color="secondary" onClick={() => back(1)}>
						Back
					</Button>
					<Button type="submit" color="primary">
						Continue
					</Button>
				</Box>
			</form>
		</div>
	);
};

export default ShippingForm;
