import CartItem from "./CartItem";
import "./style.css"

export default function CartItemList({items}) {

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

    console.log(defList);

    let totalPrice = 0;
    for (let i = 0; i < defList.length; i++) {
        totalPrice += defList[i].price;
    }
    console.log("Precio total: " + totalPrice)

    return (
        <div className="CartList">
            {
                defList.map((el) => {
                    return (
                        <CartItem id={el.id} category={el.category} description={el.description} price={el.price} title={el.title} amount={el.amount} totalPrice={totalPrice}/>
                    )
                })
            }
            <div className="purchaseControl d-flex flex-column align-items-center gap-2">
                <p className="totalPrice">Total price: {totalPrice}</p>
                <button className="btn bg-success p-2 text-white">Comprar</button>
            </div>
        </div>
    )
}