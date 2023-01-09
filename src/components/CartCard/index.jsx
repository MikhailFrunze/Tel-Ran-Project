import React from 'react'

export default function CartCard({id, title, price, discont_price}) {
  return (
    <div>
       {title}
       {price}
       {discont_price} 
    </div>
  )
}
