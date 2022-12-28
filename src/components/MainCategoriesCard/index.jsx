import React from 'react';
import s from './index.module.css';
import { main_categories_group } from '../../data/main_categories_group';
import { Link } from 'react-router-dom';

export default function MainCategoriesCard({ title, category }) {

    const { id, img } = main_categories_group
    let img_src = main_categories_group.map((el) => {
        return (el.img) 
    })
    

    const redirect = `../categories_page/${category}`
    return (
        <div className={s.category_card}>
            <Link className={s.category_link} to={redirect}>
            <img src={img_src[category]} alt="category" />
                {title}
            </Link>
        </div>
    )
}
