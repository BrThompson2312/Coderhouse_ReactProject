import { useContext } from "react";
import { Contexto } from "../../Context/Context";
import CartItemList from "./CartItemList";

export default function CartItemListContainer() {

    const items = useContext(Contexto).count;
    console.log(items)

    let newList = [];
    for (let i = 0; i < items.length; i++) {
        let itemActual = {amount: 0, ...items[i]};
        for (let k = 0; k < items.length; k++) {
            if (itemActual.id == items[k].id)
            {
                itemActual.amount++;
            }
        }
        newList.push(itemActual);
    }

    let defList = [...newList]
    for (let i = 0; i < defList.length; i++) {
        let actualItem = defList[i].id;
        for (let k = 0; k < newList.length; k++) {
            let tempItem = newList[k].id
            if (actualItem == tempItem) {
                defList.splice(i, 1);
                break;
            }
        }
    }

    let totalPrice = 0;
    for (let i = 0; i < defList.length; i++) {
        totalPrice += defList[i].price * defList[i].amount;
    }

    return (
        <section className="Cart">
            <h1>Cart</h1>
            <CartItemList totalPrice={totalPrice} items={defList}/>
        </section>
    )
}