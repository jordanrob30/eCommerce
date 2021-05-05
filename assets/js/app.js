import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/app.css';
import StoreHome from "./components/StoreHome";

ReactDOM.render(<Router><StoreHome/></Router>, document.getElementById('root'));