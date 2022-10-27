import { useState } from "react";
function Button(props) {
    //const {color, textColor} = props;
    const [buttonColor, setButtonColor] = useState("pink");
    const ButtonStyles = {
        color: "black",
        backgroundColor: buttonColor,
        borderRadius: "5px",
        border: "1px solid grey", 
        fontSize: "1rem",
        padding: "0.5rem"
    }
    const changeColor = () => {
        setButtonColor("blue");
    }
    return (
        <button className="button" style={ButtonStyles} onMouseOver={changeColor}>Click Me</button>
    )
}

export default Button;