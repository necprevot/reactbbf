import React, { useState } from 'react'

const ItemCounter = ({stock, onAdd}) => {
    const [count, setCount]= useState(1)

    const anadir = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const sustraer = ()=> {
        if( count > 0){
            setCount(count - 1)
        }
    }

    const addCarrito = () => {
        onAdd(count)
    }
  return (
    <div>
        <div className='cantidad'>
            <button className='botonMenos' onClick={sustraer}>-</button>
            <span className='cuenta'>{count}</span>
            <button className='botonMas' onClick={anadir}>+</button>
        </div>
    <button className='botonAnadir' disabled={stock === 0 || count === 0} onClick={addCarrito}> Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter