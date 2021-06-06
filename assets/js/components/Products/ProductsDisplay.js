import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

import { Product } from "..";

const useStyles = makeStyles(() => ({
	grid: {
		padding: 16,
	},
}));

/**
 * @param  {object[]} products array of product objects
 * @param  {int=} size optional size value for sizing grid
 */
const ProductsDisplay = ({ products, size = 1, cart }) => {
	const classes = useStyles();

	const sizing =
		size > 0
			? {
					xs: 12,
					sm: 6,
					md: 4,
					lg: 3,
					xl: 3,
			  }
			: {
					xs: 12,
					sm: 4,
					md: 6,
					lg: 12,
					xl: 6,
			  };

	return (
		<div>
			<Grid container justify="center" spacing={2} className={classes.grid}>
				{products.map((product) => (
					<Grid
						key={product.id}
						item
						xs={sizing.xs}
						sm={sizing.sm}
						md={sizing.md}
						lg={sizing.lg}
					>
						<Product product={product} cart={cart} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default ProductsDisplay;
