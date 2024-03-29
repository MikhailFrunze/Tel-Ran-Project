import { loadCategories } from "../store/reducer/categories";

export const load_categories = (dispatch) => {
    fetch('http://localhost:3333/categories/all')
        .then(resp => resp.json())
        .then(json => dispatch(loadCategories(json)))
}