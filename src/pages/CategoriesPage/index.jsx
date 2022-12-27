import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { load_categories } from '../../store/requests/categories';
import { useDispatch } from 'react-redux';
import MainCategoriesCard from '../../components/MainCategoriesCard';
import s from './index.module.css';
import Footer from '../../components/Footer';



export default function CategoriesPage() {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(load_categories)
    }, [])



    return (

        categories.length === 0 ? 'Categories are loading' :
            <div className={s.categories_section} id={s.categories_section}>
                <h1>Категории</h1>

                <div className={s.categories}>
                    {categories.map(el => <MainCategoriesCard key={el.id} {...el} category={el.id}/>)}
                </div>

                <Footer />
            </div>
    )
}
