import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <header>
        <nav className="navContainer">
            <NavLink className={'navlink'} to='/'>
            <img src='./iconWhite.png' alt='logo'></img>
            </NavLink>
            <NavLink className={'navlink'} to='/'>Home</NavLink>
            <NavLink className={'navlink'} to='/category/nuevos'>Nuevos</NavLink>
            <NavLink className={'navlink'} to='/category/mas vendidos'>Mas vendidos</NavLink>
            <NavLink className={'navlink'} to='/category/ofertas'>Ofertas</NavLink>
            <CartWidget className="carrito"/>
        </nav>
        </header>
    )
}

export default Navbar