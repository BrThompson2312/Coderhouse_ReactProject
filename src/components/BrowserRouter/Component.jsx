// Pages
import Error  from "../../pages/Error404";
import Layout from "../../pages/Layout";
// Components
import ItemListContainer    from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer  from "../ItemDetailContainer/ItemDetailContainer";
import CartItemListContainer from "../CartItemListContainer/CartItemListContainer";
// Methods
import {Routes, Route} from "react-router-dom";

export default function Component() {
    return (
        <Routes>
            <Route path="" element={<Layout/>}>
                <Route index path=""                    element={<ItemListContainer/>}/>
                <Route path="cart"                      element={<CartItemListContainer/>}/>
                <Route path="item/:itemId"              element={<ItemDetailContainer/>}/>
                <Route path="category/"                 element={<ItemListContainer/>}/>
                <Route path="category/:itemId"          element={<ItemListContainer/>}/>
                <Route path="*"                         element={<Error/>}/>
            </Route>
        </Routes>
    )
}