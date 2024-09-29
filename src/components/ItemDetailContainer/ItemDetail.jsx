export default function ItemDetail({item}) {

    const { id, title, price, category, description, image } = item;
    
    return (
        <div className="detailProduct">
            <figure>
                <img src={image} />
            </figure>
            <div>
                <div><span>Id: </span>{id}</div>
                <div><span>Nombre: </span>{title}</div>
                <div><span>Precio: </span>{price}</div>
                <div><span>Categoria: </span>{category}</div>
                <div><span>Description: </span>{description}</div>
            </div>
        </div>
    )
}