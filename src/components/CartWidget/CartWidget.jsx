// Context
import { useContext } from "react";
import { Contexto } from "../../Context/Context";
// Images
import cart from '../../imgs/carrito.svg';

export default function CartWidget() {

    const cartLength = useContext(Contexto).Cart.length

    return (
        <>
            <img src={cart} alt="imgCarrito"/>
            <p className="m-0">Cart</p>
            <span>{cartLength}</span>
        </>
    )
}