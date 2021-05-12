import { Card, CardContent, CardMedia, CardActions, Typography, IconButton, makeStyles } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import React from 'react'
import Chips from './Chips';

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
                <CardMedia className={classes.media} image={product.imageSource} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="h5" component="h2" >
                            £{parseFloat(product.sellPrice).toFixed(2)}
                        </Typography>
                    </div>
                    <Typography gutterBottom dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
                    

                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <Chips tags={product.tags}/>
                    {product.stock > 0 ? 
                        <IconButton aria-label="Add to Cart">
                            <AddShoppingCartIcon />
                        </IconButton> :
                        <IconButton disabled aria-label="Out of Stock">
                            <RemoveShoppingCartIcon />
                        </IconButton>
                    }
                </CardActions>
            </Card> 
        </>
    )
}

export default Product;
