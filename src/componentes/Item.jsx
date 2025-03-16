import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
 
  return (
    <div className='card'>
        <img src={producto.img} alt={producto.name}/>
        <div className='cardBody'>
            <h5 className='cardTitle'>{producto.name}</h5>
            <p className='cardText'>${producto.price}</p>
            <Link className='botonVer' to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item