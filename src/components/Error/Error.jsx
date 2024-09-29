import "./style.css";

export default function Error() {
    return (
        <>
        <div className="Error">
            <div>
                <i className="fa-solid fa-circle-exclamation"></i>
                <h3>Error</h3>
            </div>
            <p>Error en la solicitud de datos</p>
        </div>
        </>
    )
}