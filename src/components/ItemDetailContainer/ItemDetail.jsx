import Description from "./Description";
import { useContext, useState } from "react";
import { Contexto } from "../../Context/Context";

export default function ItemDetail({item}) {

    const { id, title, image, price, category, description } = item;
    const { AddItemToCart } = useContext(Contexto);
    const [ amount, setAmount ] = useState(1);

    function AddItem() {
        setAmount(() => amount + 1)
    }
    function RemoveItem() {
        if (amount != 1) {
            setAmount(() => amount - 1)
        }
    }

    return (
        <article className="detailProduct">
            <Description item={item}/>
            <div className="AddToCart bg-primary text-white p-3">
                <h1>Add to Cart?</h1>
                <div className="d-flex gap-2">

                    <div className="ItemQuantitySelector d-flex">
                        <button onClick={() => RemoveItem()} className="btn bg-danger text-white rounded-0"> - </button>
                        <p className="p-2 m-0 d-flex align-items-center bg-warning text-dark">Added to cart: {amount}</p>
                        <button onClick={() => AddItem()} className="btn bg-danger text-white rounded-0"> + </button>
                    </div>

                    <div className="d-flex gap-1">
                        <button onClick={() => {
                            AddItemToCart(
                                {
                                    id: id,
                                    title: title,
                                    image: image,
                                    price: price,
                                    category: category,
                                    description: description,
                                    amount: amount
                                }
                            )
                        }} className="btn bg-white text-black rounded-0">
                            <i className="fa-solid fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}