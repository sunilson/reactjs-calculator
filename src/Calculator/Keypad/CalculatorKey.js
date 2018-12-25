import React from 'react';
import PropTypes from 'prop-types'
import './CalculatorKey.css';

const CalculatorKey = (props) => {

    const classes = ["squareKey"]
    if (props.last) classes.push("bigKey")

    return <div onClick={props.keyData.onKeyPress} className={classes.join(" ")}>
        <div className="squareKeyContent">
            {props.keyData.name}
        </div>
    </div>
}

export class KeyData {
    constructor(name, onKeyPress) {
        this.name = name
        this.onKeyPress = onKeyPress
    }
}

CalculatorKey.defaultProps = {
    last: false
}

CalculatorKey.propTypes = {
    keyData: PropTypes.instanceOf(KeyData),
    last: PropTypes.bool
}

export default CalculatorKey