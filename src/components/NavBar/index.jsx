import React from 'react'
import logo from '../../media/logo.png'
import s from './index.module.css'
import vector from '../../media/add_to_cart.png'

export default function NavBar() {
  return (
    <nav className={s.nav_bar}>
      <div className={s.logo_block}>
        <img src={logo} alt="logo" className={s.logo} />
        <button> <p> Каталог</p></button>
      </div>
      
      <li className={s.nav_block}>
        <ul className={s.categories}>Категории</ul>
        <ul>Купон</ul>
        <ul>Акции</ul>
        <ul>Контакты</ul>
        <ul><img src={vector} alt="add to cart image" /></ul>
      </li>
    </nav>
  )
}
