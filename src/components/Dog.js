function Dog({ dogYears, color, breed, name }) {
    {/*logic goes at the top outside of return statement */}
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
            {/*create a sentence that says how I am in dog years and human years*/}
            <p>I am {?} years old in dogs years. That is {?} human years.</p>
        }
    </div>
 
)

export default Dog;