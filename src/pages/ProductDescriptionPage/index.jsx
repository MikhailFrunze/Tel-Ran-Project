import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { load_product } from '../../store/requests/product';
import s from './index.module.css';
import img from '../../media/basket.png'


export default function ProductDescriptionPage() {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        load_product(id, setProduct);
    }, [])

    console.log(product);

    let get_sales_percentage = product.map((el) => {

        return (((el.price - el.discont_price) / el.price) * 100) / 100;
    })

    return (
        <div className={s.product_description}>
            <div>
                {product.map((el) => (<div key={el.id}>{el.title}</div>))}
                <img src={img} alt="product" />
            </div>

            <div>
                <p>{product.map((el) => (<div key={el.id}>{el.discont_price}</div>))}</p>
                <p>{product.map((el) => (<div key={el.id}>{el.price}</div>))}</p>
                <p>{get_sales_percentage} %</p>
            </div>
        </div>
    )
}
