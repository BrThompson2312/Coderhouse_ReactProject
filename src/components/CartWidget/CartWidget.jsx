import { useContext } from "react";
import { Contexto } from "../../Context/Context";
import imagenCarrito from '../../imgs/carrito.svg';
import { NavLink } from "react-router-dom";
import "./style.css"

export default function CartWidget() {

    const count = useContext(Contexto).count
    console.log(count)

    return (
        <li className="cartNotification">
            <NavLink to="cart">
                <img src={imagenCarrito} alt="imgCarrito"/>
                <p className="m-0">Cart</p>
                <span>{count.length}</span>
            </NavLink>
        </li>
    )
}