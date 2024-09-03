import Item from "./Item";

import mouse from "../imgs/mouse.jpeg";
import auto from "../imgs/auto.jpeg";

export default function ItemListContainer(props) {

    return (
        <div className="container containerProducts">
            <h1>{props.msg}</h1>
            <section className="containerItems container d-flex gap-5">
                <Item img={mouse} title="Mouse"/>
                <Item img={auto} title="Auto"/>
            </section>
        </div>
    )
}