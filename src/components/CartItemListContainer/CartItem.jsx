export default function CartItem({props}) {

    const { image, title, category, description, price, amount } = props;
    
    return (
        <article className="DetailCartItem rounded d-flex">
            <figure className="d-flex align-items-center">
                <img src={image}></img>
            </figure>
            <div>
                <div className="TitleDetalCartItem position-relative d-flex align-items-center justify-content-between text-primary p-3">
                    <h3 className="m-0">{title} <span className="">({amount})</span></h3>
                    <i className="fa-solid fa-delete-left"></i>
                </div>
                <div className="bg-primary-subtle">
                    <p><strong>Category: </strong> {category}</p>
                    <p><strong>Description: </strong>{description}</p>
                    <p className="bg-primary text-white text-end"><strong>Price: </strong>${price}</p>
                </div>
            </div>
        </article>
    )
}