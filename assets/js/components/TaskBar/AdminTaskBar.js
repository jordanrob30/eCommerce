import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: "8px",
	},
	title: {
		flexGrow: 1,
	},
}));

/**
 * Task bar component for admin page
 */
const AdminTaskBar = () => {
	const classes = useStyles();

	return (
		<>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Ecommerce Admin
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default AdminTaskBar;
