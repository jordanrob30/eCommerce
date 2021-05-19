import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import { render } from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { NotFound, AdminPage, MainPage } from "./components";

import themes from "../styles/themes";

const App = () => {
	const [theme, setTheme] = useState(themes.dark);

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

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Redirect exact from="/" to="/home" />

					<Route path="/home">
						<MainPage toggleTheme={toggleTheme} />
					</Route>

					<Route path="/admin">
						<AdminPage />
					</Route>

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
