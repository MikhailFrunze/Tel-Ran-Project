export const load_products = (category, callback) => {
    fetch(`http://localhost:3333/categories/${category}`)
        .then(resp => resp.json())
        .then(json => callback(json))
}