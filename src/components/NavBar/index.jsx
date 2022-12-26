import React from 'react'
import logo from '../../media/logo.png'
import s from './index.module.css'
import vector from '../../media/add_to_cart.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className={s.nav_bar}>
      <div className={s.logo_block}>
      <Link to='/'><img src={logo} alt="logo" className={s.logo} /></Link>
        <button> <p> Каталог</p></button>
      </div>

      <li className={s.nav_block}>
        <Link className={s.categories} to='/categories_page'><ul>Категории</ul></Link>
        <ul>Купон</ul>
        <ul>Акции</ul>
        <ul>Контакты</ul>
        <ul><img src={vector} alt="add to cart" /></ul>
      </li>
    </nav>
  )
}
