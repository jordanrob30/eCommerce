import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
import Cookies from "js-cookie";

const App = () => {
	const [theme, setTheme] = useState(themes.dark);
	const [user, setUser] = useState(null);
	const [loginDialog, setLoginDialog] = useState(false);
	const [registerDialog, setRegisterDialog] = useState(false);
	const [token, setToken] = useState(null);
	const [accountDialog, setAccountDialog] = useState(false);

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

	const getUserInit = async (email, token_) => {
		await axios
			.get("/api/users/read/all/email/" + email, {
				headers: {
					Authorization: token_,
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				//console.table(res.data[0]);
				setUser(res.data[0]);

				Cookies.set(
					"User",
					{
						id: res.data[0]["id"],
						email: res.data[0]["email"],
						roles: res.data[0]["roles"],
						token: token_,
						cart: [],
						cartSize: 0,
					},
					{ expires: 7 }
				);
			});
	};

	const getUser = async (email, token_) => {
		await axios
			.get("/api/users/read/all/email/" + email, {
				headers: {
					Authorization: token_,
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				//console.table(res.data[0]);
				setUser(res.data[0]);
			});
	};

	/**
	 * @param  {{email: string, password: string}} credentials user credential object
	 * @return {boolean} authentication success
	 */
	const authUser = async (credentials) => {
		let success = false;
		let tkn;

		await axios
			.put("/api/users/auth/init", credentials)
			.then((res) => {
				tkn = "BEARER " + res.data.token;
				if (tkn) {
					setToken(tkn);
					success = true;
				}
			})
			.catch((error) => console.error(error));

		if (success) {
			return tkn;
		}

		return false;
	};

	const loginUser = async (credentials) => {
		let success = false;

		await authUser(credentials).then((token_) => {
			token_ && getUserInit(credentials.email, token_);
			success = true;
		});

		return success;
	};

	const logoutUser = () => {
		setUser(null);
		Cookies.remove("User");
	};

	const authToken = async (User) => {
		try {
			await axios
				.get("/api/users/auth", {
					headers: {
						Authorization: User.token,
						"Content-Type": "application/json",
					},
				})
				.then(() => {
					getUser(User.email, User.token);
				});
		} catch (err) {
			return null;
		}
	};

	const login = {
		user: user,
		token: token,
		login: loginUser,
		logout: logoutUser,
		dialog: loginDialog,
		setDialog: setLoginDialog,
		register: registerDialog,
		setRegister: setRegisterDialog,
		setAccountDialog: setAccountDialog,
		accountDialog: accountDialog
	};

	useEffect(() => {
		authToken(Cookies.getJSON("User"));
	}, []);

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
