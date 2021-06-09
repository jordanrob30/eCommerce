import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, InputLabel, MenuItem, Select,
    Slide,
    TextField,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const initialErrors = {
    error: false,
    errorType: "",
    errorMsg: "",
};

const EditOrderDialog = ({ open, close, orderValues, setOrderValues, setOrderList }) => {
    const [errors, setErrors] = useState(initialErrors);
    const [status, setStatus] = useState("");

    const handleClose = () => close(false);

    const handleError = (error) => {
        console.log(error);
        setErrors(error);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let data = {
            status: status
        };

        axios.put("/api/orders/update/all/" + orderValues.id, data, {
            headers: {
                Authorization: Cookies.getJSON("User").token,
                "Content-Type": "application/json",
            }
        }).then((res) => {
            if (res.data.error) {
                handleError(res.data);
            } else {
                setOrderList(res.data);
                handleClose();
            }
        });
    };

    const handleChange = (event) => {
        const data = event.target.value;
        setStatus(data);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="edit order form dialog"
            TransitionComponent={Transition}
        >
            <DialogTitle>Edit Order</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        name={"status"}
                        labelId="status"
                        id="status"
                        value={orderValues.status}
                        onChange={handleChange}
                    >
                        <MenuItem value={"Open"}>Open</MenuItem>
                        <MenuItem value={"Paid"}>Paid</MenuItem>
                        <MenuItem value={"Delivered"}>Delivered</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    {errors.error && (
                        <Typography variant="subtitle1" color="error">
                            {errors.errorMsg}
                        </Typography>
                    )}
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary">
                        Edit
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default EditOrderDialog;
