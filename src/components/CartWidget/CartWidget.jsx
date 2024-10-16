import { useContext } from "react";
import { Contexto } from "../../Context/Context";
import imagenCarrito from '../../imgs/carrito.svg';
import { NavLink } from "react-router-dom";
import "./style.css"

export default function CartWidget() {

    const count = useContext(Contexto).cart
    
    return (
        <>
            <NavLink to="cart">
                <img src={imagenCarrito} alt="imgCarrito"/>
                <p className="m-0">Cart</p>
                {
                    count.length == 0
                    ? <span></span>
                    : <span>{count.length}</span> 
                }
            </NavLink>
        </>
    )
}