import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import ButtonBuy from "./ButtonBuy";
import "./style.css"

export default function CartItemList({items, totalprice}) {
    console.log(items)
    return (
        <div className="CartList">
            {
                items.map((el) => {
                    return (
                        <CartItem key={el.id} props={el}/>
                    )
                })
            }
            {
                items.length == 0 
                ? <CartEmpty />
                : <ButtonBuy totalprice={totalprice}/>
            }
        </div>
    )
}