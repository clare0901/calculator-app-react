// mutiple expressions don't work

import React, { Component } from "react";
import Numbers from "../components/Numbers";
import Screen from "../components/Screen";
import Equations from "../components/Equations";
import "../App.css";
// import { create, all } from 'mathjs'

class Calculator extends Component {
    
    constructor() {
        super();
        this.state = {
            screen_value:"",
            currNum: '',
            total: 0,
            flag:0,
            memory: "",
            operation: ""
        };

    }
    
    number(e) {
        let name = e.target.className;

        if (name === "decimal") {
            name = ".";
        }
        
        this.setState((prevState)=>({
            screen_value: prevState.screen_value + name
        }));

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
            screen_value:"",
            total: "",
            currNum: "",
            memory: "",
            operation: '',
            flag:0
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
                if(this.state.flag === 1){
                    this.setState((prevState)=>({
                        screen_value: prevState.total + '+'
                    }));
                }
                else{
                    this.setState((prevState)=>({
                        screen_value: prevState.screen_value + '+'
                    }));
                }
        
                this.setState({
                    currNum:'+',
                    memory: this.state.total,
                    total: '',
                    operation: '+',
                    flag:0
                });
            }

            if (name === "subtract") {
                if(this.state.flag===1){
                    this.setState((prevState)=>({
                        screen_value: prevState.total + '-'
                    }));
                }
                else{
                    this.setState((prevState)=>({
                        screen_value: prevState.screen_value + '-'
                    }));
                }
    
                this.setState({
                    currNum:'-',
                    memory: this.state.total,
                    total: '',
                    operation: '-',
                    flag:0
                });
            }

            if (name === "multiply") {
                if(this.state.flag===1){
                    this.setState((prevState)=>({
                        screen_value: prevState.total + '*'
                    }));
                }
                else{
                    this.setState((prevState)=>({
                        screen_value: prevState.screen_value + '*'
                    }));
                }
        
                this.setState({
                    currNum:'*',
                    memory: this.state.total,
                    total: '',
                    operation: '*',
                    flag:0
                });
            }

            if (name === "divide") {
                // flag = 1 when the total value is showing up on the screen
                if(this.state.flag === 1){
                    this.setState((prevState)=>({
                        screen_value: prevState.total + '/',          
                    }));
                }
                else{
                    this.setState((prevState)=>({
                        screen_value: prevState.screen_value + '/'
                    }));
                }
        
                this.setState({
                    currNum:'/',
                    memory: this.state.total,
                    total: '',
                    operation: '/',
                    flag:0
                    
                });
            }


            // ans
            if (name === "equals") {
                this.setState({flag:1})
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
        // console.log("total", this.state.total)
        return (
            <div className="">
                <main className="">
                    <Screen number={ (this.state.flag) ? this.state.total : this.state.screen_value} />

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
