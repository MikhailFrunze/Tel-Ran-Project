import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux';
import { load_products } from '../../store/requests/products';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { useParams, Link } from 'react-router-dom';
import s from './index.module.css';
import { load_categories } from '../../store/requests/categories';


export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    load_products(category, setProducts);
  }, [])


  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(load_categories)
  }, [])


  let category_title = categories.map((el) => {
    return el.id === products[category].categoryId &&
      el.title
  })

  return (

    <div>
      {
        products.length === 0
          ? <p>'Products are loading...'</p>
          : <div className={s.products}>
            {category_title}
            {products.map(el => <ProductCard key={el.id} {...el} category={el.id} />)}
          </div>
      }

      <Footer />
    </div>
  )
}
