import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	TextField,
	Typography,
} from "@material-ui/core";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	roles: [],
};

const initialErrors = {
	error: false,
	errorType: "",
	errorMsg: "",
};

const RegisterDialog = ({ login }) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);

	const handleClose = () => login.setRegister(false);

	const handleError = (error) => {
		console.log(error);
		setErrors(error);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post("/api/users/register", values).then((res) => {
			if (res.data.error) {
				handleError(res.data);
			} else {
				handleClose();
			}
		});
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
					{errors.error && (
						<Typography variant="subtitle1" color="error">
							{errors.errorMsg}
						</Typography>
					)}
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
