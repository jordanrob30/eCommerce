import {
	AppBar,
	Toolbar,
	Button,
	IconButton,
	makeStyles,
	useTheme,
	Box,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MenuDrawer from "./MenuDrawer";
import { Person } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: "8px",
	},
}));

/**
 * @param  {object} login
 * @param  {function} toggleTheme
 * @param  {string[]} categories
 * @param  {function} changeCategories
 */
const TaskBar = ({ login, toggleTheme, categories, changeCategories }) => {
	const theme = useTheme();
	const [openMenu, setOpenMenu] = useState(false);
	const classes = useStyles(theme);
	const history = useHistory();

	return (
		<>
			<MenuDrawer
				open={openMenu}
				setOpen={setOpenMenu}
				toggleTheme={toggleTheme}
				login={login}
				categories={categories}
				changeCategories={changeCategories}
			/>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						onClick={() => setOpenMenu(true)}
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography
						onClick={() => history.push("/")}
						variant="h6"
						color="inherit"
						underline="none"
					>
						Ecommerce
					</Typography>
					<Box flexGrow={1} />
					{login.user ? (
						<IconButton>
							<Person />
						</IconButton>
					) : (
						<Button
							size="large"
							color="inherit"
							onClick={() => login.setDialog(true)}
						>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default TaskBar;
