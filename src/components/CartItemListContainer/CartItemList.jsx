import CartItem from "./CartItem";
import Null from "./Null";
import ButtonBuy from "./ButtonBuy";
import "./style.css"

export default function CartItemList({items, totalPrice}) {

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