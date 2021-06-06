import React, { useEffect, useState } from "react";
import { ProductPage, TaskBar } from "../";
import axios from "axios";
import CartDialog from "../Cart/CartDialog";

const _cart = [
	{
		name: "Paperclips (Box)",
		qty: 100,
		unit: 1.15,
	},
	{
		name: "Paper (Case)",
		qty: 10,
		unit: 45.99,
	},
	{
		name: "Waste Basket",
		qty: 1,
		unit: 17.99,
	},
];

/**
 * @prop  {function} {toggleTheme} toggle theme function
 */
const MainPage = ({ toggleTheme, login }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [title, setTitle] = useState("All Products");
	const [cart, setCart] = useState(_cart);
	const [cartDialog, setCartDialog] = useState(false);

	function closeCart() {
		setCartDialog(false);
	}

	function openCart() {
		setCartDialog(true);
	}

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
			/>
			<ProductPage products={products} title={title} />
			<CartDialog open={cartDialog} setCartDialog={closeCart} cart={cart} />
		</>
	);
};

export default MainPage;
