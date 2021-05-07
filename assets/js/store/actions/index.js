import axios from 'axios';
import { READ_PRODUCTS_ALL, ERROR_PRODUCTS } from '../types';

export const readProducts = () => async dispatch => {

    try {
        const res = await axios.get('/api/products/read/all/');
        dispatch({
            type: READ_PRODUCTS_ALL,
            payload: res.data
        })
    } catch(e) {
        dispatch({
            type: ERROR_PRODUCTS,
            payload: console.log(e)
        })
    }
}