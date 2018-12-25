import React from 'react';
import CalculatorKey, { KeyData } from './CalculatorKey';
import PropTypes from 'prop-types';

const Numbers = (props) => {
    const style = {
        "height": "100%",
        "display": "grid",
        "rowGap": "15px",
        "columnGap": "15px",
        "gridTemplateColumns": "1fr 1fr 1fr",
        "gridTemplateRows": "1fr 1fr 1fr 1fr"
    }

    if (props.numbers && props.numbers.length !== 10) {
        throw new Error("Can only display exactly 10 numbers!")
    }

    const keys = props.numbers.slice(0, 10).map((number, i) => {
        return (
            <CalculatorKey key={number.name} keyData={number} last={(i === 9) ? true : false}></CalculatorKey>
        )
    })

    return (
        <div style={style}>
            {keys}
        </div>
    )
}

Numbers.defaultProps = {
    numbers: []
}

Numbers.propTypes = {
    numbers: PropTypes.arrayOf(KeyData)
}


export default Numbers