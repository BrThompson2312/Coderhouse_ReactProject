import { NavLink } from "react-router-dom";

export default function Null() {
    return (
        <div className="Null">
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
                <h1 className="text-center p-0 m-0">Your cart is empty...</h1>
            </div>
            <NavLink to="/" className="text-center text-decoration-none"><h4>Go to shop!</h4></NavLink>
        </div>
    )
}