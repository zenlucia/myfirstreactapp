import Button from "./Button";
function Dog({ color, name, personality }) {
    { const styles = {
        backgroundColor:color
    }
    return (
        <div style={styles}>
            <h2>Woof, I am a dog.</h2>
            <p>My name is {name}</p> 
            <p>I am {personality}</p>
            <Button />
        </div>
    )
        /*logic goes at the top outside of return statement
    let props
    const styles = {
        backgroundColor: props.color
    }
    function calculateHumanYears(n) {
        return n * 7;
    }
    const humanYears = calculateHumanYears(dogYears);
    return (
        <div style={styles}>
            <h2>Woof, I am a dog.</h2>
            <p>My name is {name} and I am a {breed}</p>
            */ }
            {/*create a sentence that says how I am in dog years and human years
            <p>I am  years old in dogs years. That is human years.</p>
        
        </div>
 
    )
    */}
}
export default Dog;