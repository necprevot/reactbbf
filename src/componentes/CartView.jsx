import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, removeItem, clear, cartTotal} = useCart()
    
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
                <div className='itemsContainer'>
                    {cart.map((compra) => (
                        <div className='itemCarrito' key={compra.id}>
                            <p>{compra.name}</p>
                            <p>{compra.quantity}</p>
                            <p>${compra.price.toLocaleString('es-CL')}</p>
                            <button className='borrarItem' onClick={() => removeItem(compra.id)}>X</button>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='botonesCarrito'>
                <Link to='/' className='botonVer'>Seguir comprando</Link>
                <Link className='borrarCarrito' onClick={clear}>Borrar carrito</Link>
                <Link className='botonVer' to='/checkout'>Terminar compra</Link>
            </div>
            
            <div className='totalCarrito'>
                <h3>Total: ${cartTotal().toLocaleString('es-CL')}</h3>
            </div>
        </div>
    )
}

export default CartView