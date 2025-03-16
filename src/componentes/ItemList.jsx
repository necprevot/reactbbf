import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div className='itemList'>
        {data.map((producto)=> <Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList