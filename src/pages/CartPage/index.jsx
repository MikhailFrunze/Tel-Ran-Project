import React from 'react';
import Footer from '../../components/Footer';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/reducer/cartReducer'
import CartCard from '../../components/CartCard';


export default function CartPage() {

  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();

  console.log(state);
  return (
    <div className={s.cart_page}>

      <div className={s.cart}>
        <p>Корзина</p>
      </div>
      <div>
        <div className={s.cart_header}>
          <p>Главная / Корзина</p>
          <Link to='/'>Вернуться в магазин <RightOutlined className={s.arrow} /> </Link>
        </div>

        <div>
          {
            state.map(el => <CartCard key={el.id} {...el} />)
          }
        </div>
        <div><h1>Детали заказа</h1></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
