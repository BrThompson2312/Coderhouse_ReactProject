import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout               from "./pages/Layout";
import ItemListContainer    from "./components/ItemListContainer";
import ItemDetailContainer  from "./components/ItemDetailContainer";
import Error  from "./pages/Error";

// Temporal
import Generico  from "./pages/Generico";

import "./App.css";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index path=""                    element={<ItemListContainer msg="Catalogo"/>}/>
                    <Route path="favoritos"                 element={<Generico msg="Favoritos"/>}/>
                    <Route path="carrito"                   element={<Generico msg="Carrito"/>}/>
                    <Route path="login"                     element={<Generico msg="Login"/>}/>
                    <Route path="register"                  element={<Generico msg="Register"/>}/>
                    <Route path="item"                      element={<ItemDetailContainer/>}/>
                    <Route path="*"                         element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

root.render(<App/>)