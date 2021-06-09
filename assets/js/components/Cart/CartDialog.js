import {
	Dialog,
	Slide,
	Table,
	TableCell,
	TableHead,
	TableRow,
	TableBody,
	Typography,
	DialogActions,
	DialogContent,
	Button,
} from "@material-ui/core";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

function ccyFormat(num) {
	return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
	return qty * unit;
}

function subtotal(items) {
	return items
		.map(({ qty, unit }) => qty * unit)
		.reduce((sum, i) => sum + i, 0);
}

const CartDialog = ({ open, closeCart, cart = [] }) => {
	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	const handleClose = () => closeCart();


	const handlePayment = () => {
		//build the data

		let data;
		data = {
			user : 3,
			userAddress: 1,
			notes: "Order with " + cart.length + " products",
			products: []
		};

		cart.map((row) => {
			data.products.push({id: row.id, qty: row.qty});
		});

		console.log(data)

		if(Cookies.getJSON("User")) {
			axios.post('/api/orders/create', data, {
				headers: {
					Authorization: Cookies.getJSON("User").token,
					"Content-Type": "application/json",
				}
			}).then((res) => {
				if (res.data.error) {

				} else {
					console.log(res);
				}
			});
		}
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogContent>
				<Typography variant="h6" align="center" gutterBottom>
					Cart
				</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Product Name</TableCell>
							<TableCell align="right">Qty.</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell align="right">SubTotal</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{cart.map((row) => (
							<TableRow key={row.name}>
								<TableCell>{row.name}</TableCell>
								<TableCell align="right">{row.qty}</TableCell>
								<TableCell align="right">£{ccyFormat(row.unit)}</TableCell>
								<TableCell align="right">
									£{ccyFormat(priceRow(row.qty, row.unit))}
								</TableCell>
							</TableRow>
						))}

						<TableRow>
							<TableCell align="right" colSpan={3}>
								Total
							</TableCell>
							<TableCell align="right">£{ccyFormat(subtotal(cart))}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary">
					Close
				</Button>
				<Button onClick={handlePayment} color="primary" disabled={false}>
					Instant Pay
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CartDialog;
