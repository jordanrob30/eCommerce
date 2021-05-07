import { Card, CardContent, CardMedia, CardActions, Typography, IconButton, makeStyles } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';

import React from 'react'

const useStyles = makeStyles({
    root: {
      // maxWidth: 345, original width style
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  });

const Product = ({product}) => {

    const classes = useStyles()

    return (
        <>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={"https://picsum.photos/seed/"+ product.name +"/200"} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="h5" component="h2" >
                            £{(product.sellPrice).toFixed(2)}
                        </Typography>
                    </div>
                    <Typography gutterBottom dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />

                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card> 
        </>
    )
}

export default Product;
