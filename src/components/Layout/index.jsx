import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import s from './index.module.css'

export default function Layout() {
    return (
        <div className={s.layout}>
            <NavBar></NavBar>
            <main className={s.main_content}>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    )
}
