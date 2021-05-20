import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import { render } from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import {
	NotFound,
	AdminPage,
	MainPage,
	LoginDialog,
	RegisterDialog,
} from "./components";
import axios from "axios";

import themes from "../styles/themes";

const App = () => {
	const [theme, setTheme] = useState(themes.dark);
	const [user, setUser] = useState(null);
	const [loginDialog, setLoginDialog] = useState(false);
	const [registerDialog, setRegisterDialog] = useState(false);

	/**
	 * Changes theme state based on current theme
	 */
	function toggleTheme() {
		switch (theme.palette.type) {
			case "dark":
				setTheme(themes.light);
				break;
			case "light":
				setTheme(themes.dark);
				break;
			default:
				break;
		}
	}

	/**
	 * @param  {{email: string, password: string}} credentials user credential object
	 * @return {boolean} authentication success
	 */
	const loginUser = async (credentials) => {
		let success = false;

		await axios
			.put("/api/users/auth/init", credentials)
			.then((res) => {
				if (res.data[0]) {
					setUser(res.data[0]);
					success = true;
				}
			})
			.catch((error) => console.error(error));

		return success;
	};

	const logoutUser = () => {
		setUser(null);
	};

	const login = {
		user: user,
		login: loginUser,
		logout: logoutUser,
		dialog: loginDialog,
		setDialog: setLoginDialog,
		register: registerDialog,
		setRegister: setRegisterDialog,
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<LoginDialog login={login} />
			<RegisterDialog login={login} />
			<Router>
				<Switch>
					<Route path="/home">
						<MainPage toggleTheme={toggleTheme} login={login} />
					</Route>

					<Route path="/admin">
						<AdminPage login={login} />
					</Route>

					<Redirect from="/" to="/home" />

					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;

render(<App />, document.getElementById("root"));
