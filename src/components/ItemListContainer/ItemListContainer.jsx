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

export default function ItemListContainer() {

    const [ loading, setLoading ] = useState(true);
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(false);

    const params = useParams();

    // const [ itemsFirestore, setItemsFirestore ] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             setItems(data);
    //             setLoading(false);
    //         })
    //         .catch(data => {
    //             console.log(data);
    //             setError(true);
    //         })
    //     }, 3000);
    // }, []);

    useEffect(() => {
        const bd = getFirestore();
        const itemsCollection = collection(bd, "items");

        getDocs(itemsCollection)
        .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            setLoading(false);
        })
        .catch(() => {
            setError(true);
        })
    }, []);
    console.log(items);

    return (
        <section className="">
            <h1>Catálogo</h1>
            {
                error 
                ? <Error />
                : loading 
                    ? <Loader /> 
                    : <ItemList filteredCategory={params} items={items} />
            }
        </section>
    )
}