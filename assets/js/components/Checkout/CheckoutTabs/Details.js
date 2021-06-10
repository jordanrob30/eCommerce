import {
	Box,
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
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

const Details = ({ cart, next, cancel }) => {
	return (
		<>
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
			<Box align="right" marginTop={2}>
				<Button color="secondary" onClick={cancel}>
					Cancel
				</Button>
				<Button color="primary" onClick={() => next(0)}>
					Continue
				</Button>
			</Box>
		</>
	);
};

export default Details;
