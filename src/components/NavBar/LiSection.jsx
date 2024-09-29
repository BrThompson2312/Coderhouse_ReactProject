import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";

export default function LiSection() {
    return (
        <>
            <li>
                <NavLink to="">Home</NavLink>
            </li>
            <li className="cartNotification">
                <NavLink to="cart"><CartWidget/></NavLink>
            </li>
            {/* <li>
                <NavLink to="favorites">Favorites</NavLink>
            </li> */}
        </>
    )
}