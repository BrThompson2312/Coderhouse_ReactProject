import Item from "./Item";
import listaProductos from "../data.js";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

    let itemCategory = useParams();

    if (Object.keys(itemCategory).length == 0) {
        return (
            <>
                <h1>Catálogo</h1>
                <section className="containerItems gap-5">
    
                    { listaProductos.map((producto) => {
                        return (
                            <Item 
                                id={producto.id} 
                                img={producto.imagen} 
                                title={producto.nombre} 
                            />
                            )
                        }) 
                    }
    
                </section>
            </>
        )
    } else {
        return (
            <>
                <h1>Catálogo</h1>
                <section className="containerItems gap-5">
    
                    { listaProductos.map((producto) => {
                        if (producto.id == itemCategory.categoryId) {
                            return (
                                <Item 
                                    id={producto.id} 
                                    img={producto.imagen} 
                                    title={producto.nombre} 
                                />
                            )
                        }
                    }) }
    
                </section>
            </>
        )
    }
    
}