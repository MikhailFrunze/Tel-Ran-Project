import React from 'react';
import s from './index.module.css';
import { main_categories_group } from '../../data/main_categories_group';
import { Link } from 'react-router-dom';

export default function MainCategoriesCard({ title, category }) {

    const { id, img } = main_categories_group

    const redirect = `../categories_page/${category}`
    return (
        <div className={s.category_card}>
            <Link className={s.category_link} to={redirect}>
                <img src={main_categories_group[1].img} alt="category" />
                {title}
            </Link>
        </div>
    )
}
