import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, price, discont_price, description, category }) {

    const redirect = `../products/${category}`
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
