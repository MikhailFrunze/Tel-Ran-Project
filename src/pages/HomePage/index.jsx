import React from 'react'
import Banner from '../../components/Banner'
import Categories from '../../components/Categories'
import SalesForm from '../../components/SalesForm'
import SalesSection from '../../components/SalesSection'
import s from './index.module.css'


export default function HomePage() {
  return (
    <div className={s.home_page}>
        <Banner/>
        <Categories/>
        <SalesForm/>
        <SalesSection/>
    </div>
  )
}
