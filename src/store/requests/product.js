export const load_product = (id, callback) => {
    fetch(`http://localhost:3333/products/${id}`)
        .then(resp => resp.json())
        .then(json => callback(json))
}