import React from "react";
import { useTheme } from "@material-ui/core";
import {
	Brightness2Rounded,
	Brightness7Rounded,
	Lock,
	Person,
} from "@material-ui/icons";
import { useHistory } from "react-router";

const actions = (user, toggleTheme) => {
	const history = useHistory();
	const theme = useTheme();

	const themeIcon =
		theme.palette.type === "dark" ? (
			<Brightness2Rounded />
		) : (
			<Brightness7Rounded />
		);

	const adminLink = () => history.push("/admin");

	const themes = {
		title: "Toggle Theme",
		action: toggleTheme,
		icon: themeIcon,
	};

	const admin = {
		title: "Admin",
		action: adminLink,
		icon: <Lock />,
	};

	let actions = [themes];

	if (user) {
		user.roles.includes("ROLE_AMIN") && actions.push(admin);
	}

	return actions;
};

export default actions;
