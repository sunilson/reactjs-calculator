import React from 'react';
import PropTypes from 'prop-types'
import "./CalculatorDisplay.css"

const CalculatorDisplay = (props) => {

    const style = {
        height: "100%",
        background: "black",
        color: "green",
        fontSize: 40,
        padding: "30px",
        boxSizing: "border-box"
    }

    const wrapStyle = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }

    return <div style={style}>
        <div style={{ height: "70%", display: "flex", alignItems: "center", ...wrapStyle }} className="displayText">
            {props.text}
        </div>
        <div style={{ fontSize: 30, height: "30%", display: "flex", alignItems: "center", ...wrapStyle }}>
            {props.subText}
        </div>
    </div>
}

CalculatorDisplay.propTypes = {
    text: PropTypes.string,
    subText: PropTypes.string
}

CalculatorDisplay.defaultProps = {
    text: "Leer",
    subText: "Leer"
}

export default CalculatorDisplay