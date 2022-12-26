import React from 'react'
import s from './index.module.css'
import { main_categories_group } from '../../data/main_categories_group';

export default function MainCategoriesCard({ title }) {

    const { id, img } = main_categories_group
    return (
        <div className={s.category_card}>
            <img src={main_categories_group[1].img} alt="category" />
            {title}
        </div>
    )
}
