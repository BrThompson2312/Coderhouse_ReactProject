import { NavLink } from "react-router-dom";

export default function Item({items}) {

    const { id, image, title, price, description, category } = items;

    return (
        <article className="Item d-flex align-items-center">
            <img src={image} alt={title}/>
            <div className="border-5 rounded d-flex align-items-center gap-2">
                <h6>{title}</h6>
                <h6 className="price">${price}</h6>
                <button className="bg-primary btn rounded">
                    <NavLink to={`/item/${id}`} className="text-white text-decoration-none">See details</NavLink>
                </button>
            </div>
        </article>
    )
}