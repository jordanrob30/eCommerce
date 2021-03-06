import {
	Typography,
	Grid,
	Paper,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { AdminTaskBar, EditDialog, DeleteDialog } from "..";
import { CreateProductForm } from "..";
import ProductsDisplay from "../Products/ProductsDisplay";
import UserDisplay from "../Users/UserDisplay";
import {Add, People, ShoppingBasket, ShoppingCart} from "@material-ui/icons";
import Cookies from "js-cookie";
import {Redirect} from "react-router-dom";
import OrderDisplay from "../Orders/OrderDisplay";
import EditOrderDialog from "../Orders/EditOrderDialog";

/**
 * Admin Page component
 */
const AdminPage = ({ login }) => {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [userList, setUserList] = useState([]);
	const [editDialog, setEditDialog] = useState(false);
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [values, setValues] = useState({});
	const [id, setId] = useState(null);
	const [orderList, setOrderList] = useState([]);
	const [orderValues, setOrderValues] = useState({});
	const [orderEditDialog, setOrderEditDialog] = useState(false);

	const [tab, setTab] = useState(0);

	const [redirectHome, setRedirectHome] = useState(false);

	/**
	 * on instantiation of the component current product and category
	 * arrays are fetched from database and corresponding states are
	 * updated
	 */
	useEffect(() => {
		if(Cookies.getJSON("User") && Cookies.getJSON("User").roles.indexOf("ROLE_ADMIN") > -1) {
			axios
				.get("/api/products/read/all/")
				.then((res) => setProducts(res.data))
				.catch((err) => console.error(err));
			axios
				.get("/api/category/read/all/")
				.then((res) => setCategories(res.data))
				.catch((err) => console.error(err));
			axios
				.get("/api/users/read/all/", {
					headers: {
						Authorization: Cookies.getJSON("User").token,
						"Content-Type": "application/json",
					},
				})
				.then((res) => setUserList(res.data))
				.catch((err) => console.log(err));
			axios
				.get("/api/orders/read/all/", {
					headers: {
						Authorization: Cookies.getJSON("User").token,
						"Content-Type": "application/json",
					},
				})
				.then((res) => setOrderList(res.data))
				.catch((err) => console.log(err));
		}
		else
		{
			setRedirectHome(true);
		}
	}, []);

	const deleteUser = (id) => {
		setId(id);
		setDeleteDialog(true);
	};

	const editUser = async (id) => {
		const res = await axios.get("/api/users/read/all/id/" + id, {
			headers: {
				Authorization: Cookies.getJSON("User").token,
				"Content-Type": "application/json",
			}
		});
		if (res.data.error) {
			console.error(res.data);
		} else {
			setValues(res.data[0]);
			setEditDialog(true);
		}
	};

	const editOrder = async (id) => {
		const res = await axios.get("/api/orders/read/all/id/" + id, {
			headers: {
				Authorization: Cookies.getJSON("User").token,
				"Content-Type": "application/json",
			}
		});
		if (res.data.error) {
			console.error(res.data);
		} else {
			setOrderValues(res.data[0]);
			setOrderEditDialog(true);
		}
	};

	const users = {
		users: userList,
		del: deleteUser,
		edit: editUser,
	};

	const orders = {
		orders: orderList,
		edit: editOrder,
	};

	const tabs = [
		{
			title: "Products",
			icon: <ShoppingCart />,
			contents: <ProductsDisplay products={products} size={1} />,
		},
		{
			title: "Create Product",
			icon: <Add />,
			contents: <CreateProductForm categories={categories} />,
		},
		{
			title: "Users",
			icon: <People />,
			contents: <UserDisplay users={users} />,
		},
		{
			title: "Orders",
			icon: <ShoppingBasket/>,
			contents: <OrderDisplay orders={orders} />,
		},
	];

	if (redirectHome) {
		return (
			<Redirect to={{pathname : "/home"}}/>
		)
	}

	return (
		<>
			<AdminTaskBar />
			<Grid container justify="center">
				<Grid item xs={4} sm={3} md={2}>
					<Paper square height="100%">
						<List component="nav">
							{tabs.map((option, index) => (
								<ListItem
									key={option.title + index}
									onClick={() => setTab(index)}
									selected={tab === index}
									button
								>
									<ListItemIcon>{option.icon}</ListItemIcon>
									<ListItemText>{option.title}</ListItemText>
								</ListItem>
							))}
						</List>
					</Paper>
				</Grid>
				<Grid item xs={8} sm={9} md={10}>
					<Typography variant="h3" align="center" color="textPrimary">
						{tabs[tab].title}
					</Typography>
					{tabs[tab].contents}
				</Grid>
			</Grid>

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

			<EditOrderDialog
				open={orderEditDialog}
				close={setOrderEditDialog}
				orderValues={orderValues}
				setOrderValues={setOrderValues}
				setOrderList={setOrderList}
			/>
		</>
	);
};

export default AdminPage;
