import { CssBaseline, ThemeProvider, Divider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/app.css';
import {ProductPage, TaskBar} from './components'

import themes from '../styles/themes';

const App = () => {
    return (
        <ThemeProvider theme={themes}>
                <CssBaseline/>
                <Router>
                    <TaskBar />
                    <ProductPage/>
                    
                </Router>
        </ThemeProvider>
    )
}

export default App



ReactDOM.render(<App/>, document.getElementById('root'));