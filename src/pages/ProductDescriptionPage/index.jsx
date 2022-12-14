import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { load_product } from '../../store/requests/product';
import s from './index.module.css';
import img from '../../media/basket.png'
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/reducer/cartReducer';


export default function ProductDescriptionPage() {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        load_product(id, setProduct);
    }, [])


    let get_sales_percentage = product.map((el) => {

        return (((el.price - el.discont_price) / el.price) * 100);
    })

    const dispatch = useDispatch();


    let title = product.map((el) => { return el.title});
    let price = product.map((el) => { return el.price});
    let discont_price = product.map((el) => { return el.discont_price});

    const add_to_cart = () => dispatch(addToCart({title, price, discont_price, image}))

    
    let image = product.map((el) => { return el.image});

let src_img = `http://localhost:3333${image}`

    return (
        <div>
            <div className={s.product_description}>
                <div>
                    {product.map((el) => (<div className={s.title} key={el.id}>{el.title}</div>))}
                    <img className={s.image} src={src_img} alt="product" />
                </div>

                <div className={s.product_details}>
                    <div className={s.prices}>
                        <h1>{product.map((el) => (<div key={el.id}>{el.discont_price}</div>))}</h1>
                        <h2>{product.map((el) => (<div key={el.id}>{el.price}</div>))}</h2>
                        <p>{get_sales_percentage} %</p>
                    </div>

                    <button onClick={add_to_cart}>В корзину</button>

                    <div className={s.border}></div>

                    <div className={s.description}>
                        <h1>Описание</h1>
                        <p>{product.map((el) => (<div key={el.id}>{el.description}</div>))}</p>
                    </div>
                </div>
            </div>
            <div className={s.footer}>
                <Footer />
            </div>
        </div>
    )
}
