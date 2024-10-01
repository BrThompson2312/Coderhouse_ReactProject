import { useContext } from "react";
import { Contexto } from "../../Context/Context";

export default function CartItem({id, category, description, price, title, amount}) {

    return (
        <article className="DetailCartItem rounded">
            <div className="TitleDetalCartItem position-relative d-flex align-items-center justify-content-between bg-danger text-white p-3 rounded-top">
                <h3 className="m-0">{title} <span className="bg-white text-dark p-1 rounded">({amount})</span></h3>
                <i className="fa-solid fa-delete-left"></i>
            </div>
            <div className="">
                <p><strong>Category: </strong> {category}</p>
                <p><strong>Description: </strong>{description}</p>
                <p><strong>Price: </strong>${price}</p>
            </div>
        </article>
    )
}