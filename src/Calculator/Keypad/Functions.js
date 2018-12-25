import React from 'react';
import CalculatorKey, { KeyData } from './CalculatorKey';
import PropTypes from 'prop-types';

const Functions = (props) => {
    const style = {
        "height": "100%",
        "display": "grid",
        "rowGap": "15px",
        "gridTemplateColumns": "1fr",
        "gridTemplateRows": "1fr 1fr 1fr 1fr 1fr 1fr"
    }

    if (props.functions && props.functions.length !== 6) {
        throw new Error("Can only display exactly 6 functions!")
    }

    const keys = props.functions.slice(0, 9).map(func => {
        return (
            <CalculatorKey key={func.name} keyData={func}></CalculatorKey>
        )
    })

    return (
        <div style={style}>
            {keys}
        </div>
    )
}

Functions.defaultProps = {
    functions: []
}

Functions.propTypes = {
    functions: PropTypes.arrayOf(KeyData)
}


export default Functions