// Context
import ContextoProvider from "./Context/Context";
// Components
import Component from "./components/BrowserRouter/Component";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx"
// Styles
import "./App.css";

export default function App() {
    return (
        <ContextoProvider>
            <Navbar/>
            <Component />
            <Footer />
        </ContextoProvider>
    )
}