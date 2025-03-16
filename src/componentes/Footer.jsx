import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <Link>
            <img src="./facebook.png" alt="Acceso a perfil de Facebook" />
            </Link>
            <Link>
            <img src="./instagram.png" alt="Acceso a perfil de Instagram"/>
            </Link>
            <p className="pFooter">Beardy Boy's Fermentos©<br/>Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer