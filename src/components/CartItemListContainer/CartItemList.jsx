import CartItem from "./CartItem";
import Null from "./Null";
import ButtonBuy from "./ButtonBuy";
import "./style.css"

export default function CartItemList({items, totalPrice}) {

    console.log(items)

    // let newList = [];
    // for (let i = 0; i < items.length; i++) {
    //     let itemActual = {amount: 0, ...items[i]};
    //     for (let k = 0; k < items.length; k++) {
    //         if (itemActual.id == items[k].id)
    //         {
    //             itemActual.amount++;
    //         }
    //     }
    //     newList.push(itemActual);
    // }

    // let defList = [...newList]
    // for (let i = 0; i < defList.length; i++) {
    //     let actualItem = defList[i].id;
    //     for (let k = 0; k < newList.length; k++) {
    //         let tempItem = newList[k].id
    //         if (actualItem == tempItem) {
    //             defList.splice(i, 1);
    //             break;
    //         }
    //     }
    // }

    // let totalPrice = 0;
    // for (let i = 0; i < defList.length; i++) {
    //     totalPrice += defList[i].price * defList[i].amount;
    // }

    return (
        <div className="CartList">
            {
                items.map((el) => {
                    return (
                        <CartItem key={el.id} id={el.id} category={el.category} description={el.description} price={el.price} title={el.title} amount={el.amount} totalPrice={totalPrice}/>
                    )
                })
            }
            {
                items.length == 0 
                ? <Null />
                : <ButtonBuy totalPrice={totalPrice}/>
            }
            
        </div>
    )
}