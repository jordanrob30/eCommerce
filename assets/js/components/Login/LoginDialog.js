import React, { useState } from "react";
import {
	Slide,
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from "@material-ui/core";

/**
 * creates sliding transition to be used by the dialog box
 */
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

/**
 * @prop {{user: object, setUser: function, dialog: boolean, setDialog: function}} {login}
 */
const LoginDialog = ({ login }) => {
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const [error, setError] = useState(false);

	const handleClose = () => login.setDialog(false);

	/**
	 * @param  {event} event onSubmit event
	 *
	 * authenticates the credentials of current user
	 * on submit of login form
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		login.setUser(credentials) ? handleClose() : setError(true);
	};

	/**
	 * @param  {event} event onChange event
	 *
	 * sets state of credentials based on the value
	 * of the email and password text fields on
	 * change of value event
	 */
	const handleChange = (event) => {
		const key = event.target.id;
		const data = event.target.value;
		setCredentials({ ...credentials, [key]: data });
	};

	return (
		<Dialog
			open={login.dialog}
			onClose={handleClose}
			aria-labelledby="Login form dialog"
			TransitionComponent={Transition}
		>
			<form onSubmit={handleSubmit}>
				<DialogTitle id="login form">Login</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="email"
						label="Email Address"
						type="email"
						onChange={handleChange}
						fullWidth
						required
					/>
					<TextField
						margin="dense"
						id="password"
						label="Password"
						type="password"
						onChange={handleChange}
						fullWidth
						required
					/>
					<DialogContentText>{error && "Login Failed"}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => login.setRegister(true)} variant="text">
						register
					</Button>
					<Button onClick={handleClose} color="secondary">
						Cancel
					</Button>
					<Button type="submit" color="primary">
						Login
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default LoginDialog;
