import React, { useEffect, useState, createContext } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const Contexto = createContext();

let cat = [];
export default function Context({children}) {

    let tempcat = [];
    /*-------------- Items --------------*/
    const [ loading, setLoading ] = useState(true);
    const [ items, setItems ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const bd = getFirestore();
        const itemsCollection = collection(bd, "items");
        getDocs(itemsCollection)
        .then((snapshot) => {
            tempcat = snapshot.docs.map((doc) => doc.data().category);
            tempcat = tempcat.filter((el, index) => tempcat.indexOf(el) === index);
            setCategories(tempcat);
            setItems(snapshot.docs.map( (doc) => ({id: doc.id, ...doc.data()} )));
            setLoading(false);
        })
        .catch(() => {
            setError(true);
        })
    }, []);
    /*-------------- Items --------------*/

    const [ cart, setCart ] = useState([]);

    const AddItemToCart = (obj) => {
        cat.push(obj);
        setCart([...cat]);
    }

    return (
        <Contexto.Provider value={{cart, setCart, AddItemToCart, items, categories, error, loading}}>
            {children}
        </Contexto.Provider>
    )
}