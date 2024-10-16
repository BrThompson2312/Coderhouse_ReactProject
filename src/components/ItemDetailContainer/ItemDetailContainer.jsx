// Components
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import Error from "../Error/NotFoundItem";
// Methods
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
// Styles
import "./style.css";
// Context
import { Contexto } from "../../Context/Context";

export default function ItemDetailContainer() {

    const [ loading, setLoading ] = useState(true);
    const [ item, setItem ] = useState({});
    const [ error, setError ] = useState(false);
    const params = useParams();

    const { items } = useContext(Contexto);

    useEffect(() => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id == params.itemId) {
                setItem({...items[i]});
                setLoading(false);
                return;
            }
        }
        if (items.length != 0) setError(true);
    }, [items])

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