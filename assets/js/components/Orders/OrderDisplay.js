import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

import { User } from "..";
import Order from "./Order";

const useStyles = makeStyles(() => ({
    grid: {
        padding: 16,
    },
}));

const OrderDisplay = ({ orders }) => {
    const classes = useStyles();

    return (
        <div>
            <Grid container justify="center" spacing={2} className={classes.grid}>
                {orders.orders.map((order) => (
                    <Grid key={order.id} item xs={12} sm={6} md={4}>
                        <Order order={order} orders={orders}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default OrderDisplay;
