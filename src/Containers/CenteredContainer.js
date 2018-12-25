import React from 'react';
import { Calculator } from './../Calculator/Calculator';

const CenteredContainer = () => {

    const outerStyle = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100%"
    }

    const style = {
        "width": "50vh",
        "height": "80vh",
        "boxShadow": "0px 0px 84px -12px rgba(95,95,95,1)",
        "overflow": "hidden",
        "borderRadius": "20px"
    }

    return <div style={outerStyle}>
        <div style={style}>
            <Calculator></Calculator>
        </div>
    </div>
}

export default CenteredContainer