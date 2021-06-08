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
    Button, Card, CardActions, CardContent, Box,
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

const CardDialog = ({ open, closeCard = [] }) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClose = () => closeCard();

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Box display="inline-block">
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">
                                EXAMPLE CARD
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">**** **** **** 4242</Button>
                        </CardActions>
                    </Card>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CardDialog;
