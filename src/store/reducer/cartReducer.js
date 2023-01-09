const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id);
    if (productInState) {
        productInState.count++
        return [...state]
    } else {
        return [...state, { ...payload, count: 1 }]
    }
}

export const cartReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_CART) {
        return checkProduct(state, action.payload)
    } else {
        return state
    }
}