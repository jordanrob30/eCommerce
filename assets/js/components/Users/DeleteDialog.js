import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from "@material-ui/core";
import axios from "axios";
import React from "react";

const DeleteDialog = ({ open, close, id, setUserList }) => {
	const handleSubmit = () => {
		axios
			.delete("/api/users/delete/" + id)
			.then((res) => {
				setUserList(res.data);
				handleClose();
			})
			.catch((err) => console.error(err));
	};

	const handleClose = () => {
		close();
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Are You Sure About That?</DialogTitle>
			<DialogContent>
				<Typography variant="body" color="textSecondary">
					Are you sure you want to delete this user?
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleSubmit}>Delete</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteDialog;
