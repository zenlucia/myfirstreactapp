import Button from "./Button";
function Cat({ name, color, lackOfCommonSense }) {
    const styles = {
        backgroundColor: color
    }
    return (
        <div style={styles}>
            <h2>Meow, I am a cat.</h2>
            <p>My name is {name}</p> 
            <p>{
                lackOfCommonSense === true ?
                    <p>I have NO common sense</p>
                    :
                    <p>I DO have common sense</p>
            }
            </p>
            <Button />
        </div>
    )
    
}
export default Cat;