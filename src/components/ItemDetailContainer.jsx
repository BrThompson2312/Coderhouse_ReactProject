import { useParams } from "react-router-dom";
import listaProductos from "../data.js";

export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const resultadoFind = listaProductos.find((producto) => producto.id == itemId);

    return (
        <article className="productDetails">
            <figure>
                <img src={resultadoFind.image} />
            </figure>
            <table>
                <thead>
                    <tr>
                        <th>ID del producto</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{resultadoFind.id}</td>
                        <td>{resultadoFind.name}</td>
                        <td>{resultadoFind.price}</td>
                        <td>{resultadoFind.category}</td>
                        <td>{resultadoFind.description}</td>
                    </tr>
                </tbody>
            </table>
        </article>
    )
}