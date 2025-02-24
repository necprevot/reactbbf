import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <nav className="navContainer">
            <img src='./iconWhite.png' alt='logo'></img>
            <a href="">Home</a>
            <a href="">Nuevos</a>
            <a href="">Mas vendidos</a>
            <a href="">Oferta</a>
            <CartWidget className="carrito"/>
        </nav>
    )
}

export default Navbar