import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	SwipeableDrawer,
	Typography,
	useTheme,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React from "react";
import actions from "./actions";

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	text: {
		marginLeft: 24,
	},
	div: {
		display: "flex",
		justifyContent: "flex-end",
		height: theme.mixins.toolbar,
	},
}));

/**
 * @param  {boolean} open
 * @param  {function} setOpen
 * @param  {function} toggleTheme
 * @param  {object} login
 * @param  {string[]} categories
 * @param  {function} changeCategories
 */
const MenuDrawer = ({
	open,
	setOpen,
	toggleTheme,
	login,
	categories,
	changeCategories,
}) => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<SwipeableDrawer
			anchor="left"
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			swipeAreaWidth={20}
		>
			<div className={classes.div}>
				<IconButton onClick={() => setOpen(false)}>
					<ChevronLeft style={{ fontSize: 32 }} />
				</IconButton>
			</div>

			<Divider />

			<Typography variant="h5" className={classes.text}>
				Actions
			</Typography>
			<List className={classes.list}>
				{actions(login.user ? login.user : null).map((action, index) => (
					<ListItem button key={index} onClick={action.action}>
						<ListItemIcon>{action.icon}</ListItemIcon>
						<ListItemText primary={action.title} />
					</ListItem>
				))}
			</List>

			<Divider />

			<Typography variant="h5" className={classes.text}>
				Categories
			</Typography>
			<List className={classes.list}>
				<ListItem
					button
					key={"All Products"}
					onClick={() => changeCategories()}
				>
					<ListItemIcon>
						<ChevronRight />
					</ListItemIcon>
					<ListItemText primary="All Products" />
				</ListItem>
				{categories.map((category) => (
					<ListItem
						button
						key={category.name}
						onClick={() => changeCategories(category.name)}
					>
						<ListItemIcon>
							<ChevronRight />
						</ListItemIcon>
						<ListItemText primary={category.name} />
					</ListItem>
				))}
			</List>
			<Divider />
		</SwipeableDrawer>
	);
};

export default MenuDrawer;
