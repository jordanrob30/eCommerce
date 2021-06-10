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
    Button, Card, CardActions, CardContent, Box, TextField,
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";

const initialValues = {
    line1: "",
    city: "",
    postcode: "",
    country: ""
};

const initialErrors = {
    error: false,
    errorType: "",
    errorMsg: "",
};

const AccountDialog = ({ open, closeAccount = [], values, setValues}) => {

    console.log(values);
    const [errors, setErrors] = useState(initialErrors);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClose = () => closeAccount();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        const key = event.target.id;
        const data = event.target.value;
        setValues({
            ...values,
            [key]: data,
        });
    };

    return (
        <Dialog open={open} onClose={handleClose} >
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        id="firstname"
                        type="text"
                        label="First Name"
                        value={values.firstname}
                        onChange={handleChange}
                        fullWidth
                        aria-readonly={true}
                        disabled
                    />
                    <TextField
                        id="lastname"
                        type="text"
                        label="Last Name"
                        value={values.lastname}
                        onChange={handleChange}
                        fullWidth
                        aria-readonly={true}
                        disabled
                    />
                    <TextField
                        id="line1"
                        type="text"
                        label="Line 1"
                        value={values.line1}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        id="city"
                        type="text"
                        label="City"
                        value={values.city}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        id="postcode"
                        type="text"
                        label="Postcode"
                        value={values.postcode}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        id="country"
                        type="text"
                        label="Country"
                        value={values.country}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
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
                        Register
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default AccountDialog;
