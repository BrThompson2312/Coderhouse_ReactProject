// Components
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
// Methods
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Styles
import "./style.css";
// Firebase modules
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {

    const [ loading, setLoading ] = useState(true);
    const [ item, setItem ] = useState([]);
    const [ error, setError ] = useState(false);

    const params = useParams();

    useEffect(() => {
        const bd = getFirestore();
        const itemsCollection = collection(bd, "items");
        getDocs(itemsCollection)
        .then((snapshot) => {
            for (let i = 0; i < snapshot.docs.length; i++) {
                if (snapshot.docs[i].id == params.itemId) {
                    setItem(snapshot.docs[i].data()); break;
                }
            }
            setLoading(false);
        })
        .catch(() => {
            setError(true);
        })
    }, []);

    return (
        <article className="ItemDetailContainer">
            { 
                error
                ? <Error />
                : 
                    loading 
                    ? <Loader /> 
                    : <ItemDetail item={item}/> 
            }
        </article>
    )
}