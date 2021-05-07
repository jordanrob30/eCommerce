import {READ_PRODUCTS_ALL, ERROR_PRODUCTS} from '../types'

const initialState = {
    products:[],
    loading:true
}

export default function(state = initialState, action){

    switch (action.type) {
        case READ_PRODUCTS_ALL:
            return {
                ...state,
                todos:action.payload,
                loading:false
            }

        case ERROR_PRODUCTS:
            console.error(action.payload);
            return state;
            
        default:
            break;
    }
}