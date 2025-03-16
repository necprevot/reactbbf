import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <NavLink>
            <img src="./facebook.png" alt="Acceso a perfil de Facebook" />
            </NavLink>
            <NavLink>
            <img src="./instagram.png" alt="Acceso a perfil de Instagram"/>
            </NavLink>
            <p className="pFooter">Beardy Boy's Fermentos©<br/>Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer