// Components
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
// Methods
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Styles
import "./style.css";
// Firebase modules
import { collection, getDocs, getFirestore } from "firebase/firestore";
// Context
import { Contexto } from "../../Context/Context"
import { useContext } from 'react';

export default function ItemListContainer() {

    const { items, error, loading } = useContext(Contexto);

    // const [ loading, setLoading ] = useState(true);
    // const [ items, setItems ] = useState([]);
    // const [ error, setError ] = useState(false);

    const params = useParams();

    // useEffect(() => {
    //     const bd = getFirestore();
    //     const itemsCollection = collection(bd, "items");

    //     getDocs(itemsCollection)
    //     .then((snapshot) => {
    //         setItems(snapshot.docs.map( (doc) => ({id: doc.id, ...doc.data()} )))
    //         setLoading(false);
    //     })
    //     .catch(() => {
    //         setError(true);
    //     })
    // }, []);

    return (
        <section>
            {
                error 
                ? <Error />
                : loading 
                    ? <Loader /> 
                    : 
                    <>
                        <h1>Catalog</h1>
                        <ItemList filteredCategory={params} items={items} />
                    </>
            }
        </section>
    )
}