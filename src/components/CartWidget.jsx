import cart from '../imgs/carrito.svg';

export default function CartWidget() {
    return (
        <>
            <img src={cart} alt="imgCarrito"/>
            <p className="m-0">Carrito</p>
            <span>1</span>
        </>
    )
}