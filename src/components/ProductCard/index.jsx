import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, price, discont_price, description, categoryId }) {

    const redirect = `../categories_page/${categoryId}`
    return (
        <div>
            <p>{price}</p>
            <p>{discont_price}</p>
            <Link to={redirect}>
                <div>
                    {title}
                </div>
            </Link>
        </div>
    )
}
