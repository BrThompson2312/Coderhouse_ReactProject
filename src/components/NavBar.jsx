import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="menuCommerce bg-success d-flex align-items-center justify-content-between p-3">
            <h1 className="m-0 brand">
                <Link to="" className="text-white">ThompsonCommerce</Link>
            </h1>
            <nav>
                <ul className="d-flex align-items-center justify-content-between gap-3 m-0">
                    <li><Link to="">Inicio</Link></li>
                    <li><Link to="carrito"><CartWidget/></Link></li>
                    <li><Link to="favoritos">Favoritos</Link></li>
                    <li><Link to="login">Iniciar sesión</Link></li>
                    <li><Link to="register">Registrarse</Link></li>
                </ul>
            </nav>
        </header>
    )
}