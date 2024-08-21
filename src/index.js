import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/NavBar";
import Container from "./components/ItemListContainer";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function App() {
    return (
        <>
            <Navbar/>
            <Container msg="Bienvenido usuario" color="gray" fontSize="24"/>
        </>
    )
}

root.render(<App/>)