import React from "react"
import CalculatorKeypad from './Keypad/CalculatorKeypad';
import CalculatorDisplay from './CalculatorDisplay';
import { KeyData } from "./Keypad/CalculatorKey";

const METHODS = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

export class Calculator extends React.Component {

    state = {
        firstField: "",
        secondField: "",
        currentResult: "",
        currentMethodField: "",
        currentMethod: null
    }

    get currentEntry() {
        if (this.state.firstField && this.state.firstField.length > 0) {
            if (this.state.currentMethod) {
                return `${this.truncate(this.state.firstField)} ${this.state.currentMethodField} ${this.truncate(this.state.secondField)} `
            } else return this.truncate(this.state.firstField)
        } else return ""
    }

    render() {
        const numbers = new Array(9).fill().map((any, index) => {
            return new KeyData(index += 1, () => {
                this.setState({
                    currentResult: "",
                    firstField: (this.state.firstField && this.state.currentMethod) ? this.state.firstField : this.state.firstField + index.toString(),
                    secondField: (this.state.firstField && this.state.currentMethod) ? this.state.secondField + index.toString() : this.state.secondField
                })
            })
        })

        numbers.push(
            new KeyData(0, () => {
                this.setState({
                    currentResult: "",
                    firstField: (this.state.firstField && this.state.currentMethod) ? this.state.firstField : this.state.firstField + "0",
                    secondField: (this.state.firstField && this.state.currentMethod) ? this.state.secondField + "0" : this.state.secondField
                })
            })
        )

        const functions = Object.keys(METHODS).map(key => {
            return new KeyData(key, () => {
                if (this.state.currentResult) {
                    this.setState({
                        firstField: this.state.currentResult.toString(),
                        secondField: "",
                        currentResult: "",
                        currentMethod: METHODS[key],
                        currentMethodField: key,
                    })
                } else if (!this.state.currentResult && this.state.currentMethod) {
                    this.setState({
                        firstField: this.calculate().toString(),
                        secondField: "",
                        currentMethod: METHODS[key],
                        currentMethodField: key,
                    })
                } else if (this.state.firstField.length > 0) {
                    this.setState({
                        secondField: "",
                        currentMethod: METHODS[key],
                        currentMethodField: key,
                    })
                }
            })
        })

        functions.push(
            new KeyData("CLR", () => {
                this.setState({
                    firstField: "",
                    secondField: "",
                    currentResult: "",
                    currentMethodField: "",
                    currentMethod: null
                })
            }),
            new KeyData("=", () => {
                const result = this.calculate()
                console.log(this.truncate(result))
                if (result) {
                    this.setState({
                        firstField: "",
                        secondField: "",
                        currentResult: result,
                        currentMethodField: "",
                        currentMethod: null
                    })
                }
            })
        )

        return (
            <div style={{ width: "100%", height: "100%", background: "#ededed" }}>
                <div style={{ width: "100%", height: "30%" }}>
                    <CalculatorDisplay text={this.currentEntry} subText={this.truncate(this.state.currentResult)}></CalculatorDisplay>
                </div>
                <div style={{ width: "100%", height: "70%" }}>
                    <CalculatorKeypad numbers={numbers} functions={functions}></CalculatorKeypad>
                </div>
            </div>
        )
    }

    truncate(s) {
        const split = s.toString().split(".")
        if (split[1] && split[1].length > 3) return `${split[0]}.${split[1].substring(0, 3)}...`
        else if (!split[1]) return `${split[0]}`
        else return `${split[0]}.${split[1]}`
    }

    calculate() {
        if (this.state.firstField.length > 0
            && this.state.secondField.length > 0
            && this.state.currentMethod) return this.state.currentMethod(Number.parseFloat(this.state.firstField), Number.parseFloat(this.state.secondField))
        return null
    }
}