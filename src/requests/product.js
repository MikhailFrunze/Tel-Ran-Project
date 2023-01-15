import { loadProducts } from "../store/reducer/products";

export const load_product = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
            .then(resp => resp.json())
            .then(json => dispatch(loadProducts(json)))
    }
}