import "./style.css";

export default function NotFoundItem() {
    return (
        <>
            <div className="Error">
                <div>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <h3>Error</h3>
                </div>
                <p>Parece que el articulo que buscas no está disponible</p>
            </div>
        </>
    )
}