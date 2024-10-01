import { useContext } from "react";
import { Contexto } from "../../Context/Context";
import CartItemList from "./CartItemList";

export default function CartItemListContainer() {

    const cart = useContext(Contexto).count;
    console.log(cart)

    return (
        <section className="Cart">
            <h1>Cart</h1>
            <CartItemList items={cart}/>
        </section>
    )
}