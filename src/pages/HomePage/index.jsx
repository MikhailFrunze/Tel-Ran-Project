import React from 'react'
import NavBar from '../../components/NavBar'
import Banner from '../../components/Banner'
import Categories from '../../components/Categories'
import SalesForm from '../../components/SalesForm'

export default function HomePage() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <Categories/>
        <SalesForm/>
    </div>
  )
}
