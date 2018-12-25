import React from "react"
import PropTypes from 'prop-types';
import Numbers from "./Numbers";
import Functions from "./Functions";

const CalculatorKeypad = (props) => {

    const keyPadContainer = {
        height: "100%",
        padding: "15px",
        boxSizing: "border-box"
    }

    return (
        <div style={keyPadContainer}>
            <div style={{ width: "75%", height: "100%", float: "left", padding: "10px", boxSizing: "border-box" }}>
                <Numbers numbers={props.numbers}></Numbers>
            </div>
            <div style={{ width: "25%", height: "100%", float: "right", padding: "10px", boxSizing: "border-box" }}>
                <Functions functions={props.functions}></Functions>
            </div>
        </div>
    )
}

CalculatorKeypad.defaultProps = {
    numbers: [],
    functions: []
}

CalculatorKeypad.propTypes = {
    numbers: PropTypes.array,
    functions: PropTypes.array
}

export default CalculatorKeypad