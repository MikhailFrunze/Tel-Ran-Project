import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import { addToCart } from '../../store/reducer/cartReducer';
import { useDispatch } from 'react-redux';

export default function ProductCard({ title, price, discont_price, image, category, categoryId }) {

    const redirect = `../products/${category}`;

    let get_sales_percentage = Math.round(((price - discont_price) / price) * 100);

    let src_img = `http://localhost:3333${image}`;

    const dispatch = useDispatch();

    const add_to_cart = () => dispatch(addToCart({ categoryId, title, price, discont_price, image }));


    return (
        <div className={s.product_card}>
            <div className={s.image}>
                <button className={s.button} onClick={add_to_cart}>Add to cart</button>
                <Link to={redirect}><img className={s.img} src={src_img} alt="product" /></Link>
            </div>
            <div className={s.prices}>
                <h1>{discont_price}</h1>
                <h2>{price}</h2>
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
