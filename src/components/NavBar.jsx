import CartWidget from "./CartWidget";
import listaProductos from "../data.js";
import { Link } from "react-router-dom";

const categories = listaProductos.map((producto) => producto.category);

const filteredCategories = categories.filter((item, index) => categories.indexOf(item) === index);

export default function Navbar() {
    return (
        <>
            <header className="menuCommerce bg-success d-flex align-items-center justify-content-between p-3">
                <h1 className="m-0 brand">
                    <Link to="" className="text-white">ThompsonCommerce</Link>
                </h1>
                <nav>
                    <ul className="d-flex align-items-center justify-content-between gap-3 m-0">
                        <li>
                            <Link to="">Inicio</Link>
                        </li>
                        <li className="cartNotification">
                            <Link to="cart"><CartWidget/></Link>
                        </li>
                        <li>
                            <Link to="favorites">Favoritos</Link>
                        </li>
                        <li>
                            <Link to="login">Iniciar sesión</Link>
                        </li>
                        <li>
                            <Link to="register">Registrarse</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <nav className="itemCategories">
                <ul>
                    {
                        listaProductos.map((producto => {
                            return (
                                <li><Link to={`category/${producto.idCategory}`}>{producto.category}</Link></li>
                            )
                        }))
                    }
                </ul>
            </nav>
        </>
    )
}