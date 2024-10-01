export default function ButtonBuy({totalPrice}) {
    return (
        <div className="purchaseControl d-flex flex-column align-items-center gap-2">
            <p className="totalPrice text-black">Total price: {totalPrice}</p>
            <button className="btn bg-success p-2 text-white">Buy!</button>
        </div>
    )
}