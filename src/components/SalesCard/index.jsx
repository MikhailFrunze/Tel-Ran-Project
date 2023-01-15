import React from 'react';
import s from './index.module.css';

export default function SalesCard({ img, id, discounted_price, price, discount, title }) {
    return (
        <div className={s.sales_card}>
            <img src={img} alt="sales product" />
            <div className={s.sales_card_prices}>
                <h1>{discounted_price}</h1>
                <h2>{price}</h2>
                <p>{discount}</p>
            </div>
            <p>{title}</p>
        </div>
    )
}
