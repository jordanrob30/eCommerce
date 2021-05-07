import {combineReducers} from 'redux'
import productsReducer from './products';

const allReducers = combineReducers({
    products: productsReducer,
})

export default allReducers;