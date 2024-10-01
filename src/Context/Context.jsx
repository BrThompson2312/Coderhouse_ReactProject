import React, { useState, createContext } from "react";

export const Contexto = createContext();

let cat = [];
export default function Context({children}) {

    const [ count, setCount ] = useState([]);

    const AddItemToCart = (obj) => {
        cat.push(obj);
        setCount([...cat]);
    }

    return (
        <Contexto.Provider value={{count, setCount, AddItemToCart}}>
            {children}
        </Contexto.Provider>
    )
}