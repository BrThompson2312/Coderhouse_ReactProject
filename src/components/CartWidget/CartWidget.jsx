import cart from '../../imgs/carrito.svg';

export default function CartWidget() {
    return (
        <>
            <img src={cart} alt="imgCarrito"/>
            <p className="m-0">Cart</p>
            <span>1</span>
        </>
    )
}