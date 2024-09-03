import Navbar from "../components/NavBar";

import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <main>
            <Navbar/>
            <Outlet/>
            <footer>Footer</footer>
        </main>
    )
}