import React from "react";
import { useState, createContext } from "react";

export const Contexto = createContext();

const miInfo = [{
    nombre: "Bruno",
}]
const Cart = [
    {
        nombre: ""
    },
    {
        nombre: ""
    },
    {
        nombre: ""
    },
];

export default function Context({children}) {
    const [ count, setCount ] = useState(0);
    function AddCount() {
        setCount(count => count + 1);
    }
    return (
        <Contexto.Provider value={{miInfo, Cart, count, AddCount}}>
            {children}
        </Contexto.Provider>
    )
}