import { Box, Button, TextField } from "@material-ui/core";

import React, { useState } from "react";

const ShippingForm = ({ next, back, setFormData }) => {
	const [shippingData, setShippingData] = useState({
		Firstname: "",
		Lastname: "",
		Address: "",
		Email: "",
		City: "",
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
						type="email"
						label="Email"
						onChange={(e) => handleChange("Email", e.target.value)}
						fullWidth
					/>
					<TextField
						required
						type="text"
						label="Address"
						onChange={(e) => handleChange("Address", e.target.value)}
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
