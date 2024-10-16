export default function ButtonBuy({totalprice}) {
    console.log(totalprice)

    return (
        <button className="PurchaseControl d-flex align-items-center justify-content-center text-white p-4 gap-2 bg-success btn w-100 ">
            <p className="totalPrice m-0">Total price: ${totalprice}</p>
            <div>
                <i class="fa-regular fa-money-bill-1"></i> <span>Buy now!</span> 
            </div>
        </button>
    )
}