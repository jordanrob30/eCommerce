import {
	AppBar,
	Toolbar,
	Button,
	IconButton,
	Link,
	makeStyles,
	useTheme,
	Box,
	Badge,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MenuDrawer from "./MenuDrawer";
import { Person, ShoppingCart } from "@material-ui/icons";

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
const TaskBar = ({
	login,
	toggleTheme,
	categories,
	changeCategories,
	openCart,
	cartSize,
}) => {
	const theme = useTheme();
	const [openMenu, setOpenMenu] = useState(false);
	const classes = useStyles(theme);

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
					<Link href="/" variant="h6" color="inherit" underline="none">
						Ecommerce
					</Link>
					<Box flexGrow={1} />
					{login.user ? (
						<IconButton onClick={openCart}>
							<Badge color="secondary" badgeContent={cartSize}>
								<ShoppingCart />
							</Badge>
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
