import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoriesCard({ id, img, title }) {

  const redirect = `../categories_page/${id}`;

  return (
    <Link className={s.categories} to={redirect}>
      <div className={s.categories_card}>
        <img src={img} alt="category" />
        <p>{title}</p>
      </div>
    </Link>
  )
}
