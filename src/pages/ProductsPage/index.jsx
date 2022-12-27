import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux';
import { load_products } from '../../store/requests/products';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { useParams, Link } from 'react-router-dom';
import s from './index.module.css'


export default function ProductsPage() {

    const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    load_products(category, setProducts);
  }, [])

    return (
    
        <div>
        {
          products.length === 0
            ? <p>'Products are loading...'</p>
            : <div className={s.products}>
              {products.map(el => <ProductCard key={el.id} {...el} />)}
            </div>
        }

        <Footer/>
      </div>
    )
}
