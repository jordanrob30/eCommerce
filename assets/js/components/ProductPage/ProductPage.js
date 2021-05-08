import React, { useEffect, useState } from 'react';
import {Container, Divider, Grid} from '@material-ui/core';
import axios from 'axios'

import Product from './Product';



const ProductPage = () => {
    


    const [products, setProducts] = useState([])

    const  getProducts = () =>{
        axios.get('/api/products/read/all/')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
        
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <Container>
            <Grid container justify="center" spacing={2} >
                <Grid item xs={12}/>
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
