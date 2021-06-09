import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    makeStyles,
    Typography,
    useTheme,
} from "@material-ui/core";
import React from "react";
import Chips from "../Products/Chips";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: "100%",
        backgroundColor: theme.palette.primary.main,
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

const Order = ({ order, orders }) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const handleDelete = () => {
        orders.del(order.id);
    };

    const handleEdit = () => {
        orders.edit(order.id);
    };

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" component="h2">
                            Order# {order.id}
                        </Typography>
                        {order.products ? (
                            <Typography variant="h5" component="h2" align={"right"}>
                                Products ({order.products.length})
                            </Typography>
                        ) : ""}
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <Chips tags={[order.status]} />
                    <IconButton onClick={handleEdit} aria-label="Delete User">
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={handleDelete} aria-label="Delete User">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default Order;
