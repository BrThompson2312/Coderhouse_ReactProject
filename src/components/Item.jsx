import {Link} from "react-router-dom";

export default function Item(props) {
    return (
        <article className="d-flex justify-content-between flex-column">
            <img src={props.img}/>
            <h4 className="bg-danger text-white p-1 rounded">{props.title}</h4>
            <button className="btn border bg-warning">
                <Link to="item">Ver detalle del producto</Link>
            </button>
        </article>
    )
}