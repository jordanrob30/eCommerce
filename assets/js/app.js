import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/app.css';
import {ProductPage, TaskBar} from './components'

import themes from '../styles/themes';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('All Products')

    useEffect(() => {
        axios.get('/api/products/read/all/')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
        axios.get('/api/category/read/all/')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));  
    }, [])

    return (
        <ThemeProvider theme={themes}>
                <CssBaseline/>
                <Router>
                    <TaskBar categories={categories}/>
                    <ProductPage products={products} title={title}/>
                </Router>
        </ThemeProvider>
    )
}

export default App



ReactDOM.render(<App/>, document.getElementById('root'));