function Button(props) {
    const { color, TextColor } = props;
    const ButtonStyles = {
        color: TextColor,
        backgroundColor: color,
        borderRadius: "5px",
        border: "1px solid black",
        color: "#fff",
        
    }
    function changeColor() {
        
    }
    return (
        <>
        <button style={ButtonStyles}>Change color</button>
        </>
    )
}

export default Button;