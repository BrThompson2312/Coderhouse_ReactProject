import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";

export default function LiSection() {
    return (
        <ul className="d-flex align-items-center justify-content-end gap-3 p-0 m-0 list-unstyled">
            <li>
                <NavLink to="">Home</NavLink>
            </li>
            <li className="cartNotification">
                <CartWidget/>
            </li>
            {/* <li>
                <NavLink to="/purchasedproducts">Purchased products</NavLink>
            </li> */}
        </ul>
    )
}