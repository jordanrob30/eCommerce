import React, { useEffect, useState } from 'react';
import {Container, Divider, Grid, Typography} from '@material-ui/core';
import axios from 'axios'

import Product from './Product';



const ProductPage = ({products, title}) => {
    
    return (
        <Container>
            <Grid container justify="center" spacing={2} >
                <Grid item xs={12}/>
                
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">{title}</Typography>
                </Grid>
                {products.map(product => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
                <Grid item xs={12}/>
            </Grid>
            <Divider variant="middle"/>
        </Container>
    )
}

export default ProductPage
