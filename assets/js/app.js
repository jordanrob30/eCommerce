import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/app.css';
import {NotFound, ProductPage, StoreHome, TaskBar} from './components'

import themes from '../styles/themes';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('All Products');
    const [theme, setTheme] = useState(themes.dark);

    useEffect(() => {
        axios.get('/api/products/read/all/')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
        axios.get('/api/category/read/all/')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));  
    }, [])


    const toggleTheme = () => {
        switch (theme.palette.type) {
            case 'dark':
                setTheme(themes.light);
                break;
            case 'light':
                setTheme(themes.dark);
                break;
            default:
                break;
        }
    }


    const changeCategories = (category = "*") => {
        if (category === "*") {
            axios.get('/api/products/read/all/')
                .then(res => setProducts(res.data))
                .catch(err => console.error(err));
            setTitle('All Products');
        } else {
            axios.get('/api/products/read/all/category/'+category)
                .then(res => setProducts(res.data))
                .catch(err => console.error(err));
            setTitle(category);
        }
    };

    return (
        <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <TaskBar theme={theme} toggleTheme={toggleTheme} categories={categories} changeCategories={changeCategories}/>
                            <ProductPage products={products} title={title}/>
                        </Route>
                        
                        <Route path="/admin">
                            <StoreHome/>
                        </Route>


                        <Route>
                            <NotFound/>
                        </Route>
                    </Switch>
                </Router>
        </ThemeProvider>
    )
}

export default App



ReactDOM.render(<App/>, document.getElementById('root'));