import Button from "./Button";
function Cat({ props }) {
    //const { name, color, lackOfCommonSense } = props; 
    const styles = {
        backgroundColor: props.color,
        color: props.textColor
    }
    return (
        <div style={styles}>
            <h2>Hi, I am a cat.</h2>
            <p>My name is {props.name}</p>
            
            {/*this is using ternary statements which are just shorthand conditional statements
            
        condition ? thingtodoifcondicitonTrue:thingtodoiffalse */}
            {props.lackOfCommonSense ?
                <p>I have NO common sense</p>
                :
                <p>I do have common sense</p>
            }
            <Button />
        </div>
    )

export default Cat;