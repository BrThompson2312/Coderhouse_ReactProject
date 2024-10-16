import { useContext, useState } from "react";
import { Contexto } from "../../Context/Context";

export default function AddItemButton({item}) {

    const { id, title, price, category, description } = item;
    const { AddItemToCart } = useContext(Contexto);

    return (
        <div className="d-flex gap-1">
            <button onClick={() => {
                AddItemToCart(
                    {
                        id: id,
                        title: title,
                        price: price,
                        category: category,
                        description: description
                    }
                )
            }} className="btn bg-white text-black rounded-0">
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
            </button>
        </div>
    )
}