import {Link} from "react-router-dom";

export default function Item({id, image, myName}) {

    return (
        <article key={id} className="itemProduct d-flex justify-content-between flex-column border rounded">
            <img src={image} alt={myName}/>
            <div className="border-5 rounded">
                <h4 className="bg-danger text-white p-1 m-0">{myName}</h4>
                <button className="bg-warning btn w-100 text-center rounded-0">
                    <Link to={`/item/${id}`} className="text-white text-decoration-none">Mas info</Link>
                </button>
            </div>
        </article>
    )
}