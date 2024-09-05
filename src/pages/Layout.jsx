import Navbar from "../components/NavBar";
import {Footer} from "../components/Footer.jsx"

import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar/>
            
            <main className="container">
                <Outlet/>
            </main>

            <Footer/>
        </>
    )
}