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
import {
	Brightness2Rounded,
	Brightness7Rounded,
	ChevronLeft,
	ChevronRight,
	Person,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	text: {
		marginLeft: 24,
	},
	div: {
		display: "flex",
		justifyContent: "flex-end",
		height: 64,
	},
});

const MenuDrawer = ({
	open,
	setOpen,
	toggleTheme,
	login,
	categories,
	changeCategories,
}) => {
	const classes = useStyles();
	const theme = useTheme();
	const themeIcon =
		theme.palette.type === "dark" ? (
			<Brightness2Rounded />
		) : (
			<Brightness7Rounded />
		);
	const loginTitle = login.user ? "Account" : "Login";
	const loginAction = login.user
		? () => console.log()
		: () => login.setDialog(true);

	const actions = [
		{
			title: "Toggle Theme",
			action: toggleTheme,
			icon: themeIcon,
		},
		{
			title: loginTitle,
			action: loginAction,
			icon: <Person />,
		},
	];

	return (
		<SwipeableDrawer
			anchor="left"
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			swipeAreaWidth={40}
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
				{actions.map((action) => (
					<ListItem button key={action.title} onClick={action.action}>
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
