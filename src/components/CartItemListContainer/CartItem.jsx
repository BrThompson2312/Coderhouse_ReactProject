
export default function CartItem({id, category, description, price, title, amount, totalPrice}) {
    return (
        <article className="DetailCartItem rounded">
            <h3 className="bg-danger m-0 p-2 rounded-top text-white">{title}</h3>
            <p><strong>Category: </strong> {category}</p>
            <p><strong>Description: </strong>{description}</p>
            <p><strong>Amount: </strong>{amount}</p>
            <p><strong>Price: </strong>${price}</p>
        </article>
    )
}