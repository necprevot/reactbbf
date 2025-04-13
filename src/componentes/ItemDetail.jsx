import React, { useContext, useState } from 'react'
import ItemCounter from './ItemCounter'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  const [purchase, setPurchase] = useState(false)
  const onAdd = (quantity) => {
    addToCart(product, quantity)
    setPurchase(true)
  }
  return (
    <div className='itemDetail'>
      <div className='tituloDetail'>
        <h1>Detalle del producto : {product.name}</h1>
      </div>
      <div className='primeraCol'>
        <div className='imgDetail'>
          <img src={product.img} alt={product.name} />
        </div>
        <div className='parrafoDetail'>
          <p>{product.description}</p>
        </div>
      </div>
      <div className='resumenDetail'>
        <p>Stock: {product.stock} unidades</p>
        <p>Precio: ${product.price}</p>
        {purchase
          ? <div>
            <Link className='botonAnadir' to='/'>Seguir comprando</Link>
            <Link className='botonAnadir' to='/cart'>Ir al carrito</Link>
            </div>
          : <ItemCounter stock={product.stock} onAdd={onAdd} />}
          
      </div>
    </div>
  )
}

export default ItemDetail