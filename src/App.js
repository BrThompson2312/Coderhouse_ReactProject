import Component from "./components/BrowserRouter/Component";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx"
import "./App.css";

export default function App() {
    return (
        <>
            <Navbar/>
            <Component />
            <Footer />
        </>
    )
}