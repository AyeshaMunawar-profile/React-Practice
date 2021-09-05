import React, {useEffect, useState} from "react";

const Counter = () => {
    // Styling
    const buttonStyling =
        {
            padding: "10px 30px",
            backgroundColor: "lavender",
            fontSize: "20px",
            maxWidth: "200px",
            minWidth: "150px",
            borderRadius: "30px"
        }
    const buttonGroupStyling = {
        minWidth: "400px",
        maxWidth: "500px",
        display: "flex",
        flexFlow: "row no-wrap",
        justifyContent: "space-between",
        padding: "20px"
    }

    const resultBoxFormatting = {
        backgroundColor: "lavender",
        padding: "30px 40px",
        borderRadius: "3px",
        borderWidth: "15px",
        borderStyle: "outset",
        borderColor: "-internal-light-dark(rgb(133, 133, 133), rgb(150, 150, 150))",
        borderImage: "initial",
        color: "#282c34",
        marginTop: "30px",
        marginBottom: "30px"
    }

    // States
    const [count, setCount] = useState(0)
    // Custom Function
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h2>Counter Component</h2>
            <br/>
            <h3> The count is : </h3>
            <h1 style={resultBoxFormatting}>{count}</h1>
            <div style={buttonGroupStyling}>
                <button style={buttonStyling} onClick={handleIncrement}
                >Increment<strong>&nbsp;+</strong></button>
                <button style={buttonStyling} onClick={handleDecrement}
                >Decrement<strong>&nbsp;-</strong></button>
            </div>

        </>
    );
};
export default Counter;
