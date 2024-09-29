// Components
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
// Methods
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Styles
import "./style.css";

export default function ItemDetailContainer() {

    const [ loading, setLoading ] = useState(true);
    const [ item, setItem ] = useState([]);
    const [ error, setError ] = useState(false);

    const params = useParams();
    console.log(params)

    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {

                // data.map((el) => {
                //     console.log(el)
                //     if (el.id == params.itemId) setItem(el);
                // })

                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == params.itemId) {
                        setItem(data[i]);
                        console.log(data[i]);
                        break;
                    }
                }
                
                setLoading(false);
            })
            .catch(data => {
                console.log(data);
                setError(true);
            })
        }, 1000);
    }, []);

    // const { itemId } = useParams();
    // const {id, title, price, category, description, image} = listaProductos.find((producto) => producto.id == itemId);

    return (
        <article className="ItemDetailContainer">
            {/* <ItemDetail id={id} title={title} price={price} category={category} description={description} image={image}/> */}
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