import React from 'react';
import Footer from '../../components/Footer';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import CartCard from '../../components/CartCard';
import { order_products } from '../../requests/products';
import { clearCart } from '../../store/reducer/cartReducer';


export default function CartPage() {

  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const submit = ({data}) => {
    dispatch(order_products({data}))
  };

  console.log(state);

  const numberRegex = /^\d+$/;

  const phoneRegister = register('phone', {
    required: '* The field "phone" is required',
    pattern: {
      value: numberRegex,
      message: '* Not valid number format'
    }
  });

  return (
    <div className={s.cart_page}>

      <div className={s.cart}>
        <p>Cart</p>
      </div>

      <div className={s.cart_section}>
        <div>
          <div className={s.cart_header}>
            <p>Main / Cart</p>
            <Link to='/'>Back to shop <RightOutlined className={s.arrow} /> </Link>
          </div>

          <button className={s.clear_cart} onClick={() => dispatch(clearCart())}>Clear cart</button>
          
          <div className={s.cart_card}>
            {
              state.map(el => <CartCard key={el.id} {...el} />)
            }
          </div>
        </div>

        <div className={s.cart_summary}>
          <h1>Order details</h1>

          <div className={s.sum}>
            <h2>Sum</h2>
            <p>{
              state.reduce((prev, { count, price }) => prev + price * count, 0)
            }</p>
          </div>

          <form onSubmit={handleSubmit(submit)} className={s.form}>
            <input className={s.form_input} type="tel" name='phone' placeholder='Your telephone number' {...phoneRegister} />
            <button>Order</button>
          </form>
        </div>

        <div className={s.error}>
          {errors.phone && <p>{errors.phone?.message}</p>}
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}