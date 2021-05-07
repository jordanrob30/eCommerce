import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import {Provider} from 'react-redux'

import themes from '../styles/themes'

import { StoreHome, TaskBar } from "./components"
import store from './store/store'


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={themes.dark}>
                <CssBaseline/>
                <TaskBar />
                <StoreHome/>
            </ThemeProvider>
        </Provider>
    </Router>, 
    document.getElementById('root'));