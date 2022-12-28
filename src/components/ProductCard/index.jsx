import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css'

export default function ProductCard({ id, title, price, discont_price, description, category }) {

    const redirect = `../products/${category}`

    let get_sales_percentage = (((price - discont_price) / price) * 100);


    return (
        <div>
            <div className={s.product_card}>
                <h1>{price}</h1>
                <h2>{discont_price}</h2>
                <p>{get_sales_percentage}%</p>
            </div>
            <Link className={s.product_title} to={redirect}>
                <div>
                    {title}
                </div>
            </Link>

        </div>
    )
}
