import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h1>Tu carrito esta vacio 😱</h1>
        <h3>Te invitamos al home para ver mas productos</h3>
        <Link className='irHome' to ='/'>Ir al home</Link>
    </div>
  )
}

export default EmptyCart