import Item from "./Item";
import { useParams } from "react-router-dom";


import listaProductos from "../data.js";

export default function ItemListContainer() {

    let itemCategory = useParams();

    console.log(itemCategory)

    return (
        <>
            <h1>Catálogo2</h1>
            <section className="containerItems gap-5">
                {
                    listaProductos.map((producto) => {
                        return (
                            <Item id={producto.id} image={producto.image} myName={producto.name} />
                        )
                    })
                }
            </section>
        </>
    )
    
}