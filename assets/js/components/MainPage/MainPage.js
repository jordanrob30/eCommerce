import React, { useEffect, useState } from 'react';
import { ProductPage, TaskBar, LoginDialog} from '../'
import axios from 'axios';
import { useTheme } from '@material-ui/core';
import { Route, Router, Switch } from 'react-router';

const MainPage = (toggleTheme) => {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('All Products');
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
        <>
            <LoginDialog login={login}/>
            <TaskBar 
                login={login}
                toggleTheme={toggleTheme} 
                categories={categories} 
                changeCategories={changeCategories}
            />
            <ProductPage products={products} title={title}/>
              
        </>
    )
}

export default MainPage