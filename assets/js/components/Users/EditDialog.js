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
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const initialErrors = {
	error: false,
	errorType: "",
	errorMsg: "",
};

const EditDialog = ({ open, close, values, setValues, setUserList }) => {
	const [errors, setErrors] = useState(initialErrors);

	const handleClose = () => close(false);

	const handleError = (error) => {
		console.log(error);
		setErrors(error);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.put("/api/users/update/" + values.id, values, {
			headers: {
				Authorization: Cookies.getJSON("User").token,
				"Content-Type": "application/json",
			}
		}).then((res) => {
			if (res.data.error) {
				handleError(res.data);
			} else {
				setUserList(res.data);
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
			open={open}
			onClose={handleClose}
			aria-labelledby="edit user form dialog"
			TransitionComponent={Transition}
		>
			<DialogTitle>Edit User</DialogTitle>
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
						type="readOnly"
						label="Email"
						value={values.email}
						onChange={handleChange}
						fullWidth
						disabled
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
						Edit
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default EditDialog;
