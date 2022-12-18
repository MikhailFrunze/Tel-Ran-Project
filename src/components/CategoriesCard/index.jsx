import React from 'react'
import s from './index.module.css'

export default function CategoriesCard({img, title}) {
  return (
    <div className={s.categories_card}>
        <img src={img} alt="" />
        <p>{title}</p>
    </div>
  )
}
