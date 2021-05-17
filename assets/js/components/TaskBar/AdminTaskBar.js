import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	IconButton,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

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
					<IconButton
						edge="start"
						component={Link}
						to={"/"}
						className={classes.menuButton}
					>
						<Home />
					</IconButton>
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
