import React, { useEffect, useState } from "react";
import { ProductPage, TaskBar, LoginDialog, RegisterDialog } from "../";
import axios from "axios";

/**
 * @prop  {function} {toggleTheme} toggle theme function
 */
const MainPage = ({ toggleTheme }) => {
	const [products, setProducts] = useState([]);
	const [user, setUser] = useState(null);
	const [categories, setCategories] = useState([]);
	const [title, setTitle] = useState("All Products");
	const [loginDialog, setLoginDialog] = useState(false);
	const [registerDialog, setRegisterDialog] = useState(false);

	/**
	 * on instantiation of the component current product and category
	 * arrays are fetched from database and corresponding states are
	 * updated
	 */
	useEffect(() => {
		axios
			.get("/api/products/read/all/")
			.then((res) => setProducts(res.data))
			.catch((err) => console.error(err));
		axios
			.get("/api/category/read/all/")
			.then((res) => setCategories(res.data))
			.catch((err) => console.error(err));
	}, []);

	/**
	 * @param  {{email: string, password: string}} _user user credential object
	 * @return {boolean} authentication success
	 */
	const loginUser = async (_user) => {
		await axios
			.put("/api/users/auth/init", _user)
			.then((res) =>
				res.data.auth_token === "successful" ? setUser(_user) : null
			)
			.catch((error) => console.error(error));

		return user ? true : false;
	};

	const login = {
		user: user,
		setUser: loginUser,
		dialog: loginDialog,
		setDialog: setLoginDialog,
		register: registerDialog,
		setRegister: setRegisterDialog,
	};

	/**
	 * @param  {string} category="*" name of category to update products to, if default updates products to all products
	 */
	const changeCategories = (category = "*") => {
		if (category === "*") {
			axios
				.get("/api/products/read/all/")
				.then((res) => setProducts(res.data))
				.catch((err) => console.error(err));
			setTitle("All Products");
		} else {
			axios
				.get("/api/products/read/all/category/" + category)
				.then((res) => setProducts(res.data))
				.catch((err) => console.error(err));
			setTitle(category);
		}
	};

	return (
		<>
			<LoginDialog login={login} />
			<RegisterDialog login={login} />
			<TaskBar
				login={login}
				toggleTheme={toggleTheme}
				categories={categories}
				changeCategories={changeCategories}
			/>
			<ProductPage products={products} title={title} />
		</>
	);
};

export default MainPage;
