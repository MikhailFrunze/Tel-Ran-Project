import { loadProducts } from "../store/reducer/products";

export const load_products = (category) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${category}`)
            .then(resp => resp.json())
            .then(json => {
                const payload = json.map(el => ({
                    ...el,
                    hide_mark: false
                }))
                dispatch(loadProducts(payload))
            })
    }
}