import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducer/categories';
import { productsReducer } from './reducer/products';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
});

export const store = createStore(rootReducer,
    applyMiddleware(thunk));