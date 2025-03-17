import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
 
  return (
    <div className='card'>
        <img src={producto.img} alt={producto.name}/>
        <div className='cardBody'>
            <h4 className='cardTitle'>{producto.name}</h4>
            <p className='cardText'>${producto.price.toLocaleString('es-CL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}</p>
            <Link className='botonVer' to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item