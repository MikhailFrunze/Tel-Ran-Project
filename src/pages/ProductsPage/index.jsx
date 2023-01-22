import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import { useSelector } from 'react-redux';
import { load_products } from '../../requests/products';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { useParams } from 'react-router-dom';
import s from './index.module.css';
import { sortProducts } from '../../store/reducer/products';
import { searchPrice } from '../../store/reducer/products';

export default function ProductsPage() {

  const { category } = useParams();

  useEffect(() => {
    dispatch(load_products(category))
  }, []);

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);

  const products = useSelector(state => state.products);

  let category_title = categories.length >= 1 ? categories[category - 1].title : '';

  const order = event => dispatch(sortProducts(event.target.value));

  const search_price = event => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchPrice({ min_value, max_value }));
  }

  return (

    <div className={s.products_page}>
      {
        products.length === 0
          ? <p>'Products are loading...'</p>
          : <div>
            <h1 className={s.category_title}>{category_title}</h1>

            <div className={s.sort_section}>

              <div className={s.search}>
                <span>Price</span>
                <form onSubmit={search_price} className={s.search_form}>
                  <input type='number' name='min' placeholder='from' min='0' />
                  <input type='number' name='max' placeholder='to' />
                  <button>search</button>
                </form>
              </div>

              <div className={s.sort}>
                <span>Sort:</span>
                <select onInput={order} className={s.sort_select}>
                  <option className={s.option} value='default'>default</option>
                  <option className={s.option} value='title'>name</option>
                  <option className={s.option} value='price'>price</option>
                </select>
              </div>
            </div>

            <div className={s.products}>
              {
                products
                  .filter(el => !el.hide_mark)
                  .map(el => <ProductCard key={el.id} {...el} category={el.id} />)
              }
            </div>
          </div>
      }

      <Footer />
    </div>
  )
}
