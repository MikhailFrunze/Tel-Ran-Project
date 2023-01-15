import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { load_product } from '../../requests/product';
import s from './index.module.css';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/reducer/cartReducer';


export default function ProductDescriptionPage() {

    const dispatch = useDispatch();
    const product = useSelector(state => state.products);

    const { id } = useParams();

    useEffect(() => {
        dispatch(load_product(id))
    }, []);

    let get_sales_percentage = product.map((el) => {
        return Math.round(((el.price - el.discont_price) / el.price) * 100);
    });

    let title = product.map((el) => { return el.title });
    let price = product.map((el) => { return el.price });
    let discont_price = product.map((el) => { return el.discont_price });
    let description = product.map((el) => { return el.description });

    const add_to_cart = () => dispatch(addToCart({ id, title, price, discont_price, image }));

    let image = product.map((el) => { return el.image });

    let src_img = `http://localhost:3333${image}`;


    return (
        <div>
            <div className={s.product_description}>
                <div>
                    <div className={s.title}>{title}</div>
                    <img className={s.image} src={src_img} alt="product" />
                </div>

                <div className={s.product_details}>
                    <div className={s.prices}>
                        <h1>{discont_price}</h1>
                        <h2>{price}</h2>
                        <p>{get_sales_percentage} %</p>
                    </div>

                    <button onClick={add_to_cart}>Add to cart</button>

                    <div className={s.border}></div>

                    <div className={s.description}>
                        <h1>Description</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className={s.footer}>
                <Footer />
            </div>
        </div>
    )
}
