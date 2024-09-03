import cart from '../imgs/carrito.svg';

import { Link } from "react-router-dom";

export default function CartWidget() {
    return (
        <a>
            <img src={cart}/>
            <p className="m-0">Carrito</p>
            <span className="cartNotification">1</span>
        </a>
    )
}