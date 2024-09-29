import { NavLink } from "react-router-dom";

export default function Category({category}) {
    return (
        <li>
            <NavLink to={`category/${category}`} className="text-decoration-none">{category}</NavLink>
        </li>
    )
}