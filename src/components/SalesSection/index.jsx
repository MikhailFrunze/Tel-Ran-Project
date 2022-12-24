import React from 'react'
import s from './index.module.css'
import { sales_group } from '../../data/sales_group'
import SalesCard from '../SalesCard'

export default function SalesSection() {
  return (
    
        <div className={s.sales}>
            <div className={s.sales_header}>
                <h1>Акции</h1>
            </div>

            <div className={s.sales_group}>
                {
                    sales_group.map(el => <SalesCard key={el.id} {...el} />)
                }
            </div>
        </div>

  )
}
