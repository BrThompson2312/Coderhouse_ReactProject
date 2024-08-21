import cart from '../imgs/carrito.svg';

export default function CartWidget() {
    return (
        <li>
            <a href="#" className="d-flex gap-1">
                <img src={cart}/>
                <p className="m-0">Carrito</p>
                <span className="cartNotification">1</span>
            </a>
        </li>
    )
}