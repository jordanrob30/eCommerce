import React from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";

import Product from "./Product";
import ProductsDisplay from "./ProductsDisplay";

const ProductPage = ({ products, title }) => {
	return (
		<Container>
			<Grid container justify="center" spacing={2}>
				<Grid item xs={12} />

				<Grid item xs={12}>
					<Typography variant="h4" align="center">
						{title}
					</Typography>
				</Grid>
				<ProductsDisplay products={products} />
				<Grid item xs={12} />
			</Grid>
			<Divider variant="middle" />
		</Container>
	);
};

export default ProductPage;
