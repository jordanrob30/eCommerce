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

const CartDialog = ({ open, setCartDialog, cart = [] }) => {
	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	const handleClose = () => setCartDialog();

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogContent>
				<Typography variant="h6" align="center" gutterBottom>
					Cart
				</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="left" colSpan={3}>
								Products
							</TableCell>
							<TableCell align="right">Price</TableCell>
						</TableRow>
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
				<Button onClick={() => {}} color="primary" disabled={false}>
					Checkout
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CartDialog;
