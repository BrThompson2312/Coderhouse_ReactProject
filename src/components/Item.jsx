import {Link} from "react-router-dom";

export default function Item(props) {

    return (
        <article key={props.id} className="itemProduct d-flex justify-content-between flex-column border rounded">
            <img src={props.img} alt={props.title}/>
            <div className="border-5 rounded">
                <h4 className="bg-danger text-white p-1 m-0">{props.title}</h4>
                <button className="bg-warning btn w-100 text-center rounded-0">
                    <Link to={`/item/${props.id}`} className="text-white text-decoration-none">Mas info</Link>
                </button>
            </div>
        </article>
    )
}