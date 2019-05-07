import React, { Component } from "react";
import "./App.css";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      balance: 0
    };
  }

  totalBalance = () => {return this.state.data.map(a => a.amount).reduce((a, b) => a + b, 0)}
    
  componentDidMount(){
    this.setState({
      balance: this.totalBalance()
  })
  }

  deposit = () => {
    
  }

  render() {
    return (
      <div>
        <Operations />
        <h1>Current Balance: {this.state.balance}</h1>
        <Transactions trans={this.state.data} />
      </div>
    );
  }
}

export default App;
