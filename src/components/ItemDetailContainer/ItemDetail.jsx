import { useContext } from "react";
import { Contexto } from "../../Context/Context";

export default function ItemDetail({item}) {

    const { AddItemToCart } = useContext(Contexto);

    const { id, title, price, category, description, image } = item;

    return (
        <article className="detailProduct">
            <div>
                <figure>
                    <img className="img-fluid" src={image} />
                </figure>
                <div>
                    <p><span>Id: </span>{id}</p>
                    <p><span>Nombre: </span>{title}</p>
                    <p><span>Precio: </span>{price}</p>
                    <p><span>Categoria: </span>{category}</p>
                    <p><span>Description: </span>{description}</p>
                </div>
            </div>
            <div>
                <button onClick={() => {
                    AddItemToCart(
                        {
                            id: id,
                            title: title,
                            price: price,
                            category: category,
                            description: description
                        }
                    )
                }} className="btn bg-success text-white">Agregar al carrito</button>
            </div>
        </article>
    )
}