// Components
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
// Methods
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Styles
import "./style.css";

export default function ItemListContainer() {

    const [ loading, setLoading ] = useState(true);
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(false);

    const params = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(data => {
                console.log(data);
                setError(true);
            })
        }, 3000);
    }, []);

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