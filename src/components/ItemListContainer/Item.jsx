import { NavLink } from "react-router-dom";

export default function Item({id, image, title}) {

    return (
        <article className="Item d-flex justify-content-between flex-column border rounded">
            <img src={image} alt={title}/>
            <div className="border-5 rounded">
                <h6 className="text-black p-1 m-0">{title}</h6>
                <button className="bg-dark btn w-100 rounded-0">
                    <NavLink to={`/item/${id}`} className="text-white text-decoration-none">Mas info</NavLink>
                </button>
            </div>
        </article>
    )
}