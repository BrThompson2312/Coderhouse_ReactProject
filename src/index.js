import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route} from "react-router-dom";

// Components
import Layout               from "./pages/Layout";
import ItemListContainer    from "./components/ItemListContainer";
import ItemDetailContainer  from "./components/ItemDetailContainer";

// Pages
import {Favorites} from "./pages/Favorites";
import {Login, Register} from "./pages/Login";
import {Cart} from "./pages/Cart";
import Error  from "./pages/Error";

import "./App.css";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index path=""                    element={<ItemListContainer/>}/>
                    <Route path="favorites"                 element={<Favorites/>}/>
                    <Route path="cart"                      element={<Cart/>}/>
                    <Route path="login"                     element={<Login/>}/>
                    <Route path="register"                  element={<Register/>}/>
                    <Route path="item/:itemId"              element={<ItemDetailContainer/>}/>
                    <Route path="category/"                 element={<ItemListContainer/>}/>
                    <Route path="category/:categoryId"      element={<ItemListContainer/>}/>
                    <Route path="*"                         element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

root.render(<App/>)