import React, { Component } from "react";
import Numbers from "../components/Numbers";
import Screen from "../components/Screen";
import Equations from "../components/Equations";
import "../App.css";

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            currNum: "",
            total: 0,
            oldNum: "",
            memory: "",
            operation: ""
        };

    }

    number(e) {
        let name = e.target.className;

        if (name === "decimal") {
            name = ".";
        }
        this.setState({currNum:name});

        if (this.state.total !== 0) {
            this.setState({
                total: this.state.total + this.state.currNum,
            });
        } else {
            this.setState({
                total: this.state.currNum,
            });
        }
    };

    delete() {
        this.setState({
            total: "",
            currNum: "",
            memory: "",
            operation: ''
        });
    };

    handleEvent(e) {

        if (e.target.nodeName === "BUTTON") {
            const name = e.target.className;

            //numbers
            if (
                name !== "delete" &&
                name !== "divide" &&
                name !== "multiply" &&
                name !== "subtract" &&
                name !== "add" &&
                name !== "equals"
            ) {
                this.number(e);
            }
            
            if (name === "delete") {
                this.delete();
            }

            // operations
            if (name === "add") {
                this.setState({
                    currNum:'+',
                    memory: this.state.total,
                    total: '',
                    operation: '+',
                });
            }

            if (name === "subtract") {
                this.setState({
                    currNum:'-',
                    memory: this.state.total,
                    total: '',
                    operation: '-',
                });
            }

            if (name === "multiply") {
                this.setState({
                    currNum:'*',
                    memory: this.state.total,
                    total: '',
                    operation: '*',
                });
            }

            if (name === "divide") {
                this.setState({
                    currNum:'/',
                    memory: this.state.total,
                    total: '',
                    operation: '/',
                    
                });
            }


            // ans
            if (name === "equals") {

                const operation = this.state.operation;
                let memory = parseFloat(this.state.memory);
                let total = parseFloat(this.state.total);

                // if the user presses the wrong key:
                if (!operation) this.delete();
                if (isNaN(memory)) memory = 0;
                if (isNaN(total)) total = 0;

                if (operation === "+") this.setState({ total: memory + total });
                if (operation === "-") this.setState({ total: memory - total });
                if (operation === "*") this.setState({ total: memory * total });
                if (operation === "/") this.setState({ total: memory / total });
            }

        }
    }

    componentDidMount() {
        window.addEventListener("click", this);
    }

    render() {
        // console.log("rendered")
        return (
            <div className="">
                <main className="">
                    <Screen number={this.state.total} />

                    <div className="calculator-body">
                        <Numbers />
                        <Equations />
                    </div>
                </main>
            </div>
        );
    }



}
export default Calculator;
