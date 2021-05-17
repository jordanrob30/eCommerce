import {
	Accordion,
	Typography,
	AccordionSummary,
	Container,
	Divider,
	Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { AdminTaskBar, EditDialog, User } from "..";
import { CreateProductForm } from "..";
import ProductsDisplay from "../Products/ProductsDisplay";
import UserDisplay from "../Users/UserDisplay";

/**
 * Admin Page component
 */
const AdminPage = () => {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [userList, setUserList] = useState([]);
	const [editDialog, setEditDialog] = useState(false);
	const [values, setValues] = useState({});

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
		axios
			.get("/api/users/read/all/")
			.then((res) => setUserList(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteUser = (id) => {
		axios
			.delete("/api/users/delete/" + id)
			.then((res) => setUserList(res.data))
			.catch((err) => console.error(err));
	};

	const editUser = async (id) => {
		const res = await axios.get("/api/users/read/all/id/" + id);
		if (res.data.error) {
			console.error(res.data);
		} else {
			setValues(res.data[0]);
			setEditDialog(true);
		}
	};

	const users = {
		users: userList,
		del: deleteUser,
		edit: editUser,
	};

	return (
		<>
			{editDialog && (
				<EditDialog
					open={editDialog}
					close={setEditDialog}
					values={values}
					setValues={setValues}
					setUserList={setUserList}
				/>
			)}
			<AdminTaskBar />
			<Container maxWidth={false}>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={12} />

					<Grid item xs={12} md={6} lg={4}>
						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="Create New Product"
							>
								<Typography variant="h5">Create Product</Typography>
							</AccordionSummary>
							<CreateProductForm categories={categories} />
						</Accordion>
					</Grid>

					<Grid item xs={12} md={6} lg={4}>
						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography variant="h5">All Products</Typography>
							</AccordionSummary>
							<ProductsDisplay products={products} size={0} />
						</Accordion>
					</Grid>

					<Grid item xs={12} md={12} lg={4}>
						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography variant="h5">Users</Typography>
							</AccordionSummary>
							<UserDisplay users={users} />
						</Accordion>
					</Grid>

					<Grid item xs={12} />
				</Grid>
				<Divider variant="middle" />
			</Container>
		</>
	);
};

export default AdminPage;
