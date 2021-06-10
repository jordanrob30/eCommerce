import React, { useEffect, useState } from "react";
import { CheckoutDialog, ProductPage, TaskBar } from "../";
import axios from "axios";
import CartDialog from "../Cart/CartDialog";
import Cookies from "js-cookie";
import CardDialog from "../Card/CardDialog";
import AccountDialog from "../Account/AccountDialog";

/**
 * @prop  {function} {toggleTheme} toggle theme function
 */
const MainPage = ({ toggleTheme, login }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [title, setTitle] = useState("All Products");
	const [cart, setCart] = useState([]);
	const [cartDialog, setCartDialog] = useState(false);
	const [cartSize, setcartSize] = useState(0);
	const [checkoutDialog, setCheckoutDialog] = useState(false);
	const [accountDialog, setAccountDialog] = useState(false);
	const [accountValues, setAccountValues] = useState(false);

	const closeCart = () => {
		setCartDialog(false);
	};

	const openCart = () => {
		setCart(Cookies.getJSON("User").cart);
		setCartDialog(true);
	};

	const updateCart = () => {
		let cookie = Cookies.getJSON("User");
		cookie && setcartSize(cookie.cartSize);
	};

	const closeCard = () => {
		setCardDialog(false);
	};

	const openCard = () => {
		setCardDialog(true);
	};

	const closeCheckout = () => {
		setCheckoutDialog(false);
	};

	const openCheckout = () => {
		setCheckoutDialog(true);
	};

	const closeAccount = () => {
		setAccountDialog(false);
	};

	const openAccount = () => {
		setAccountDialog(true);
	};

	/**
	 * on instantiation of the component current product and category
	 * arrays are fetched from database and corresponding states are
	 * updated
	 */
	useEffect(() => {
		updateCart();
		axios
			.get("/api/products/read/all/")
			.then((res) => setProducts(res.data))
			.catch((err) => console.error(err));
		axios
			.get("/api/category/read/all/")
			.then((res) => setCategories(res.data))
			.catch((err) => console.error(err));

		Cookies.getJSON("User") &&
			axios
				.get("/api/users/read/all/me", {
					headers: {
						Authorization: Cookies.getJSON("User").token,
						"Content-Type": "application/json",
					},
				})
				.then((res) => setAccountValues(res.data))
				.catch((err) => console.log(err));
	}, []);

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
			<TaskBar
				login={login}
				toggleTheme={toggleTheme}
				categories={categories}
				changeCategories={changeCategories}
				openCart={openCart}
				cartSize={cartSize}
				openAccount={openAccount}
			/>
			<ProductPage
				products={products}
				title={title}
				login={login}
				updateCart={updateCart}
			/>
			<CartDialog
				open={cartDialog}
				closeCart={closeCart}
				cart={cart}
				openCheckout={openCheckout}
			/>
			<CheckoutDialog open={checkoutDialog} closeDialog={closeCheckout} />
			<AccountDialog
				open={accountDialog}
				closeAccount={closeAccount}
				values={accountValues}
				setValues={setAccountValues}
			/>
		</>
	);
};

export default MainPage;
