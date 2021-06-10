import {
	Dialog,
	Typography,
	DialogActions,
	DialogContent,
	Button,
	DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";

const AccountDialog = ({ open, closeAccount = [], values }) => {
	const handleClose = () => closeAccount();

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle
				style={{
					display: "flex",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				Account Details
			</DialogTitle>
			<DialogContent>
				<Typography variant="subtitle2">
					Name: {values.firstname} {values.lastname}
				</Typography>
				<Typography variant="subtitle2">Email: {values.email}</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary">
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AccountDialog;
