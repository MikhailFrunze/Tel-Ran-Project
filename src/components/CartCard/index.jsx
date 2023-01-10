import React from 'react'
import s from './index.module.css'

export default function CartCard({ id, title, price, discont_price, image }) {

  let src_img = `http://localhost:3333${image}`
  return (
    <div className={s.rectangle}>
      <div className={s.left}>
        <img className={s.image} src={src_img} alt="product" />
        <div className={s.title}>{title}</div>
      </div>

      <div className={s.right}>
        <div className={s.price}>{price}</div>
        <div className={s.discont_price}>{discont_price}</div>
      </div>
    </div>
  )
}
