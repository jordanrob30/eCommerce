import React from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";

import ProductsDisplay from "./ProductsDisplay";

/**
 * @prop  {object[]} {products} array of product objects
 * @prop  {string} {title} title of product page based on category name
 */
const ProductPage = ({ products, title, login, updateCart }) => {
	return (
		<Container>
			<Grid container justify="center" spacing={2}>
				<Grid item xs={12} />

				<Grid item xs={12}>
					<Typography variant="h4" align="center">
						{title}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<ProductsDisplay
						products={products}
						login={login}
						updateCart={() => updateCart()}
					/>
				</Grid>
				<Grid item xs={12} />
			</Grid>
			<Divider variant="middle" />
		</Container>
	);
};

export default ProductPage;
