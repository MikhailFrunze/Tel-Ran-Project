import React from 'react';
import s from './index.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MainCategoriesCard({ title, category }) {

    const categories = useSelector(state => state.categories);

    let src_img = `http://localhost:3333/category_img/${category}.jpeg`;

    const redirect = `../categories_page/${category}`;

    return (
        <div className={s.category_card}>
            <Link className={s.category_link} to={redirect}>
                <img className={s.image} src={src_img} alt="category" />
                {title}
            </Link>
        </div>
    )
}
