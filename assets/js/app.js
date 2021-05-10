import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/app.css';
import {NotFound, ProductPage, StoreHome, TaskBar, LoginDialog} from './components'

import themes from '../styles/themes';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('All Products');
    const [theme, setTheme] = useState(themes.dark);
    const [loginDialogOpen, setLoginDialogOpen] = useState(false)
    

    useEffect(() => {
        axios.get('/api/products/read/all/')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
        axios.get('/api/category/read/all/')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));  
    }, [])


    const loginUser = async(_user) => {
        await axios.put('/api/users/auth/init', _user)
            .then(res => res.data.auth_token === 'successful' ? setUser(_user) : null)
            .catch(error => (console.error(error)));

        return ((user) ? true : false)
    }

    const login = {
        user: user,
        setUser: loginUser,
        dialog: loginDialogOpen,
        setDialog: setLoginDialogOpen 
    }

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
                            <LoginDialog login={login}/>
                            <TaskBar 
                                login={login}
                                theme={theme} 
                                toggleTheme={toggleTheme} 
                                categories={categories} 
                                changeCategories={changeCategories}
                            />
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