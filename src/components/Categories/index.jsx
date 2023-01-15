import React from 'react';
import s from './index.module.css';
import { categories_group } from '../../data/categories_group';
import CategoriesCard from '../CategoriesCard';
import { Link } from 'react-router-dom';

export default function Categories() {
    return (
        <div className={s.categories}>
            <div className={s.categories_header}>
                <h1>Categories</h1>
                <Link to='/categories_page'><button>All categories</button></Link>
            </div>

            <div className={s.categories_group}>
                {
                    categories_group.map(el => <CategoriesCard key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}
