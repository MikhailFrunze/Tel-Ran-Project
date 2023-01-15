import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import { useSelector } from 'react-redux';
import { load_products } from '../../requests/products';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { useParams } from 'react-router-dom';
import s from './index.module.css';


export default function ProductsPage() {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);

  const products = useSelector(state => state.products);

  const { category } = useParams();

  useEffect(() => {
    dispatch(load_products(category))
  }, []);


  let category_title = categories[category - 1].title;

  return (

    <div className={s.products_page}>
      {
        products.length === 0
          ? <p>'Products are loading...'</p>
          : <div>
            <h1 className={s.category_title}>{category_title}</h1>
            <div className={s.products}>{products.map(el => <ProductCard key={el.id} {...el} category={el.id} />)}</div>
          </div>
      }

      <Footer />
    </div>
  )
}
