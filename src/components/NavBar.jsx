import CartWidget from "./CartWidget";

export default function Navbar() {
    return (
        <header className="menuCommerce bg-success d-flex align-items-center justify-content-between p-3">
            <h1 className="m-0 text-white">ThompsonCommerce</h1>
            <nav>
                <ul className="d-flex align-items-center justify-content-between gap-3 m-0">
                    <li><a href="#">Inicio</a></li>
                    <CartWidget/>
                    <li><a href="#">Favoritos</a></li>
                    <li><a href="#">Iniciar sesión</a></li>
                    <li><a href="#">Registrarse</a></li>
                </ul>
            </nav>
        </header>
    )
}