import React, { useEffect, useState } from "react";
import { ProductPage, TaskBar } from "../";
import axios from "axios";

/**
 * @prop  {function} {toggleTheme} toggle theme function
 */
const MainPage = ({ toggleTheme, login }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [title, setTitle] = useState("All Products");

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
			/>
			<ProductPage products={products} title={title} />
		</>
	);
};

export default MainPage;
