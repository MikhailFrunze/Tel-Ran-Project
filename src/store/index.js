import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducer/categories';
import { productsReducer } from './reducer/products';
import thunk from 'redux-thunk';
import { cartReducer } from './reducer/cartReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer,
    applyMiddleware(thunk));