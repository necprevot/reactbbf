import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div>
        <h1>Tu carrito esta vacio 😱</h1>
        <h3>Te invitamos  a home para ver mas productos</h3>
        <Link to ='/'>Ir a home</Link>
    </div>
  )
}

export default EmptyCart