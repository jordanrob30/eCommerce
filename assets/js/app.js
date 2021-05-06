import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import themes from '../styles/themes'

import { StoreHome, TaskBar } from "./components";

ReactDOM.render(
    <Router>
        <ThemeProvider theme={themes.dark}>
            <CssBaseline/>
            <TaskBar />
            <StoreHome/>
        </ThemeProvider>
    </Router>, 
    document.getElementById('root'));