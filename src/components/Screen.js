import React from 'react';
import '../App.css';

function Screen(props){
    return(
        <div className="screen" >
           <span className="value">{props.number}</span>
        </div>
    )
}

export default Screen;



// import React, { Component } from "react";
// import Numbers from "../components/Numbers";
// import Screen from "../components/Screen";
// import Equations from "../components/Equations";
// import "../App.css";

// class Calculator extends Component {
//     constructor() {
//         super();
//         this.state = {
//             currNum: "",
//             total: 0,
//             oldNum: "",
//             memory: "",
//             operation: ""
//         };

//     }

//     number(e) {
//         let name = e.target.className;
//         if (name === "decimal") {
//             name = ".";
//         }

//         this.setState((prevState) => ({
//             oldNum: prevState.currNum + name,
//             currNum: name
//         }));


//         if (this.state.total !== 0) {
//             this.setState({
//                 total: this.state.total + this.state.currNum,
//             });
//         } else {
//             this.setState({
//                 total: this.state.currNum,
//             });
//         }
//     };

//     delete() {
//         this.setState({
//             total: "",
//             currNum: "",
//             memory: "",
//             operation: '',
//             oldNum: ''
//         });
//     };

//     handleEvent(e) {

//         if (e.target.nodeName === "BUTTON") {
//             const name = e.target.className;

//             //numbers
//             if (
//                 name !== "delete" &&
//                 name !== "divide" &&
//                 name !== "multipy" &&
//                 name !== "subtract" &&
//                 name !== "add" &&
//                 name !== "equals"
//             ) {
//                 this.number(e);
//             }

//             if (name === "delete") {
//                 this.delete();
//             }

//             // operations
//             if (name === "add") {
//                 this.setState((prevState) => ({
//                     oldNum: prevState.currNum + '+'
//                 }));

//                 this.setState({
//                     currNum: '+',
//                     memory: this.state.total,
//                     total: '',
//                     operation: '+',
//                 });
//             }

//             if (name === "subtract") {
//                 this.setState((prevState) => ({
//                     oldNum: prevState.currNum + '-'
//                 }));

//                 this.setState({
//                     currNum: '-',
//                     memory: this.state.total,
//                     total: '',
//                     operation: '-',
//                 });
//             }

//             if (name === "multiply") {
//                 this.setState((prevState) => ({
//                     oldNum: prevState.currNum + '*'
//                 }));

//                 this.setState({
//                     currNum: '*',
//                     memory: this.state.total,
//                     total: '',
//                     operation: '*',
//                 });
//             }

//             if (name === "divide") {
//                 this.setState((prevState) => ({
//                     oldNum: prevState.currNum + '/'
//                 }));

//                 this.setState({
//                     currNum: '/',
//                     memory: this.state.total,
//                     total: '',
//                     operation: '/',

//                 });
//             }


//             // ans
//             if (name === "equals") {

//                 const operation = this.state.operation;
//                 let memory = parseFloat(this.state.memory);
//                 let total = parseFloat(this.state.total);

//                 // if the user presses the wrong key:
//                 if (!operation) this.delete();
//                 if (isNaN(memory)) memory = 0;
//                 if (isNaN(total)) total = 0;

//                 if (operation === "+") this.setState({ total: memory + total });
//                 if (operation === "-") this.setState({ total: memory - total });
//                 if (operation === "*") this.setState({ total: memory * total });
//                 if (operation === "/") this.setState({ total: memory / total });
//             }

//             // this.setState((prevState) => {
//             //     console.log(prevState)   
//             // })
//         }
//     }

//     componentDidMount() {
//         window.addEventListener("click", this);
//     }

//     render() {
//         // console.log("rendered")
//         return (
//             <div className="">
//                 <main className="">
//                     <p>old num: {this.state.oldNum}</p>
//                     <p>curr num : {this.state.currNum}</p>
//                     <p> total : {this.state.total}</p>
//                     {/* <p> memory: {this.state.memory}</p> */}
//                     {/* <p> operation: {this.state.operation}</p> */}

//                     <Screen number={this.state.oldNum} />

//                     <div className="calculator-body">
//                         <Numbers />
//                         <Equations />
//                     </div>
//                 </main>
//             </div>
//         );
//     }



// }
// export default Calculator;
