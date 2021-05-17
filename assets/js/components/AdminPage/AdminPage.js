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

import { AdminTaskBar, EditDialog, DeleteDialog } from "..";
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
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [values, setValues] = useState({});
	const [id, setId] = useState(null);

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
		setId(id);
		setDeleteDialog(true);
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

	const tabs = [
		{
			title: "All Products",
			contents: <ProductsDisplay products={products} size={0} />,
		},
		{
			title: "Create New Product",
			contents: <CreateProductForm categories={categories} />,
		},
		{
			title: "All Users",
			contents: <UserDisplay users={users} />,
		},
	];

	return (
		<>
			<AdminTaskBar />
			<Container maxWidth={false}>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={12} />

					{tabs.map((tab, index) => (
						<Grid item xs={12} md={6} lg={4} key={tab.title}>
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Typography variant="h5">{tab.title}</Typography>
								</AccordionSummary>
								{tab.contents}
							</Accordion>
						</Grid>
					))}

					<Grid item xs={12} />
				</Grid>
				<Divider variant="middle" />
			</Container>

			<EditDialog
				open={editDialog}
				close={setEditDialog}
				values={values}
				setValues={setValues}
				setUserList={setUserList}
			/>

			<DeleteDialog
				open={deleteDialog}
				close={() => setDeleteDialog(false)}
				id={id}
				setUserList={setUserList}
			/>
		</>
	);
};

export default AdminPage;
