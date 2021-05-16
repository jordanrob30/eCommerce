import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	TextField,
} from "@material-ui/core";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	roles: [],
};

const RegisterDialog = ({ login }) => {
	const [values, setValues] = useState(initialState);

	const handleClose = () => login.setRegister(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post("/api/users/register", values).catch((error) => {});
		handleClose();
	};

	const handleChange = (event) => {
		const key = event.target.id;
		const data = event.target.value;
		setValues({
			...values,
			[key]: data,
		});
	};

	return (
		<Dialog
			open={login.register}
			onClose={handleClose}
			aria-labelledby="register form dialog"
			TransitionComponent={Transition}
		>
			<DialogTitle>Register User</DialogTitle>
			<form onSubmit={handleSubmit}>
				<DialogContent>
					<TextField
						id="firstname"
						type="text"
						label="First Name"
						value={values.firstname}
						onChange={handleChange}
						fullWidth
						required
					/>
					<TextField
						id="lastname"
						type="text"
						label="Last Name"
						value={values.lastname}
						onChange={handleChange}
						fullWidth
						required
					/>
					<TextField
						id="email"
						type="email"
						label="Email"
						value={values.email}
						onChange={handleChange}
						fullWidth
						required
					/>
					<TextField
						id="password"
						type="password"
						label="Password"
						value={values.password}
						onChange={handleChange}
						fullWidth
						required
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="secondary">
						Cancel
					</Button>
					<Button type="submit" color="primary">
						Register
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default RegisterDialog;
