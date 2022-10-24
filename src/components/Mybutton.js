import clouds from "../images/20201215_150116.jpg"
function ButtonNew() {
    return (
        <>
            <img src={clouds} alt="clouds" className="myCloud" />
        <button>Click me</button>
        </>
    )
}

export default ButtonNew;