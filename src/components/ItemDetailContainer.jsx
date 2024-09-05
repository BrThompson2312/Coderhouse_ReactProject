import {useParams} from "react-router-dom";

import listaProductos from "../data.js";

export default function ItemDetailContainer() {

    const {itemId} = useParams();
    const resultadoFind = listaProductos.find((producto) => producto.id == itemId);

    return (
        <div className="productDetails">
            <article className="itemProduct d-flex justify-content-between flex-column border rounded">
                <h1 className="text-center">{resultadoFind.id}</h1>
                <img src={resultadoFind.imagen}/>
                <div className="bg-secondary">
                    <h4 className="bg-danger text-white p-1 rounded-0 m-0">{resultadoFind.nombre}</h4>
                    <p className="m-1 text-white ">{resultadoFind.description}</p>
                </div>
            </article>
        </div>
    )
}