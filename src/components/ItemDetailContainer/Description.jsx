export default function Description({item}) {

    const { id, title, price, category, description, image } = item;

    return (
        <div className="productDescription">
            <div className="p-0 m-0">
                <h1>Product Details</h1>
                <table className="p-0 m-0">
                    <tbody>
                        <tr>
                            <th><span>ID PRODUCT: </span></th>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <th><span>NAME: </span></th>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <th><span>PRICE: </span></th>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <th><span>CATEGORY: </span></th>
                            <td>{category}</td>
                        </tr>
                        <tr>
                            <th><span>DESCRIPTION: </span></th>
                            <td>{description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <figure>
                <img src={image} />
            </figure>
        </div>
    )
}