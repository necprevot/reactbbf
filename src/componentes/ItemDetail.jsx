import React from 'react'
import ItemCounter from './ItemCounter'

const ItemDetail = ({ product }) => {
  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} unidades`)
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
        <ItemCounter stock={product.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail