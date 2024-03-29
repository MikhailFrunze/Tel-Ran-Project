import React from 'react';
import logo from '../../media/logo.png';
import s from './index.module.css';
import vector from '../../media/add_to_cart.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
  return (
    <nav className={s.nav_bar}>
      <div className={s.logo_block}>
        <Link to='/'><img src={logo} alt="logo" className={s.logo} /></Link>
        <Link className={s.categories} to='/categories_page'> <button><p>Catalog</p></button></Link>
      </div>

      <li className={s.nav_block}>
        <Link className={s.categories} to='/categories_page'><ul>Categories</ul></Link>
        <ul><HashLink to='/#sales' className={s.contact}>Discount</HashLink></ul>
        <ul><HashLink to='/#promos' className={s.contact}>Promos</HashLink></ul>
        <ul><a className={s.contact} href='#footer'>Contact</a></ul>
        <Link to='cart'><ul><img src={vector} alt="add to cart" /></ul></Link>
      </li>
    </nav>
  )
}
