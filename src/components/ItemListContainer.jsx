export default function Container(props) {
    return (
        <div className="container">
            <h1 style={{fontSize: props.fontSize, color: props.color}}>{props.msg}</h1>
        </div>
    )
}