import axios from "axios";
import Cookies from "js-cookie";

const buildOrder = () => {
	let order = { userId: -1, products: [], totalItems: 0, totalCost: 0.0 };
	let user = Cookies.getJSON("User");
	let cart = user.cart;

	order.userId = user.id;
	order.products = cart;

	cart.map((item) => {
		order.totalItems += item.qty;
		order.totalCost += item.qty * item.unit;
	});

	order.totalCost = order.totalCost.toFixed(2);

	return order;
};

const addAddress = async (shippingData) => {
	return await axios.post("/api/address/create", shippingData, {
		headers: {
			Authorization: Cookies.getJSON("User").token,
			"Content-Type": "application/json",
		},
	});
};

const createOrder = async (shippingData) => {
	return await axios.post("/api/orders/create", shippingData, {
		headers: {
			Authorization: Cookies.getJSON("User").token,
			"Content-Type": "application/json",
		},
	});
};

const addProducts = async (orderData) => {
	orderData.products.map((product) => {
		axios.post(
			"/api/orderProduct/create",
			{
				orderId: orderData.id,
				productId: product.id,
				qty: product.qty,
			},
			{
				headers: {
					Authorization: Cookies.getJSON("User").token,
					"Content-Type": "application/json",
				},
			}
		);
	});
};

const sendOrder = async (orderData) => {
	let addressId = await addAddress(orderData.shippingData);
	console.log(addressId);
	orderData.shippingData.id = addressId.data;

	let OrderId = await createOrder(orderData.shippingData);
	console.log(OrderId);
	orderData.id = OrderId.data;

	addProducts(orderData);
};

export { buildOrder, sendOrder };
