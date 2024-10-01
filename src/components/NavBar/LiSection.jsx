import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";

export default function LiSection() {
    return (
        <>
            <li>
                <NavLink to="">Home</NavLink>
            </li>
            <CartWidget/>
        </>
    )
}