import {
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Typography,
	IconButton,
	makeStyles,
	useTheme,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Cookies from "js-cookie";
import React from "react";
import Chips from "./Chips";

const useStyles = makeStyles((theme) => ({
	root: {
		// maxWidth: 345, original width style
		maxWidth: "100%",
		backgroundColor: theme.palette.primary.main,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

const addToCart = (product, login) => {
	if (login.user) {
		let User = Cookies.getJSON("User");
		//{id, name, unit, qty}
		let itemIndex = User.cart.findIndex((_item) => _item.id === product.id);
		let item;
		itemIndex > -1
			? (item = User.cart.splice(itemIndex)[0])
			: (item = {
					id: product.id,
					name: product.name,
					unit: product.sellPrice,
					qty: 0,
			  });
		item.qty++;
		User.cart.push(item);
		Cookies.set("User", User);
	} else {
		login.setDialog(true);
	}
};

const Cart = {
	add: addToCart,
};

/**
 * @param  {object} {product} product object
 *
 * product card component
 */
const Product = ({ product, login }) => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<>
			<Card className={classes.root}>
				<CardMedia
					className={classes.media}
					image={
						product.imageSource === ""
							? "https://www.kaindl.com/fileadmin/_processed_/d/8/csm_2162_PE_Dekorbild_0ec3e17e00.jpg"
							: product.imageSource
					}
					title={product.name}
				/>
				<CardContent>
					<div className={classes.cardContent}>
						<Typography variant="h5" component="h2" color="inherit">
							{product.name}
						</Typography>
						<Typography variant="h5" component="h2" color="inherit">
							£{parseFloat(product.sellPrice).toFixed(2)}
						</Typography>
					</div>
					<Typography
						gutterBottom
						dangerouslySetInnerHTML={{ __html: product.description }}
						variant="body2"
						color="textSecondary"
						component="p"
					/>
				</CardContent>
				<CardActions disableSpacing className={classes.cardActions}>
					<Chips tags={product.tags} />
					{product.stock > 0 ? (
						<IconButton
							aria-label="Add to Cart"
							color="inherit"
							onClick={() => Cart.add(product, login)}
						>
							<AddShoppingCartIcon />
						</IconButton>
					) : (
						<IconButton disabled aria-label="Out of Stock" color="inherit">
							<RemoveShoppingCartIcon />
						</IconButton>
					)}
				</CardActions>
			</Card>
		</>
	);
};

export default Product;
