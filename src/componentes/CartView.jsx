import React from 'react'
import { useCart } from '../context/CartContext'

const CartView = () => {
    const {cart, removeItem, clear} = useCart()
  return (
    <div>
        <h2>Tu carrito</h2>

      <div className='carrito'>
        <ul className='titulosCarrito'>
          <li>Producto</li>
          <li>Cantidad</li>
          <li>Precio</li>
          <li>Eliminar</li>
        </ul>
        <div>
            {cart.map((compra)=> <div className={'itemCarrito'} key={compra.id}>
                <p>{compra.name}</p>
                <p>{compra.quantity}</p>
                <p>{compra.price}</p>
                <button className='borrarItem' onClick={()=>removeItem(compra.id)}>X</button>
            </div>)}
        <button onClick={clear}>Borrar carrito</button>
        </div>
        </div>
        <button>Seguir comprando</button>
        <button>Terminar compra</button>
    </div>
  )
}

export default CartView