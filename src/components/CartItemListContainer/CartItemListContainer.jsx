import { useContext } from "react";
import { Contexto } from "../../Context/Context";
import CartItemList from "./CartItemList";

export default function CartItemListContainer() {

    const { cart } = useContext(Contexto);

    let totalprice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalprice += cart[i].price * cart[i].amount;
    }
    console.log(totalprice)

    return (
        <section className="Cart">
            <h1>Cart</h1>
            <CartItemList totalprice={totalprice} items={cart}/>
        </section>
    )
}