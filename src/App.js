import React, { Component } from "react";
import "./App.css";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
const axios = require('axios')
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
  componentDidMount = () => {
   this.getDataFromDB()
  }

    getDataFromDB = async () =>{
      let transactions = await axios.get("http://localhost:3003/transactions")
      console.log(transactions)
      this.setState({
        data : transactions.data
      }, function(){
        this.calcTotalBalance()
      } )
     
    }

  calcTotalBalance = () => {
    let sum = this.state.data.map(a => a.amount).reduce((a, b) => a + b, 0)
    this.setState({
      balance : sum
    })
  }

  deposit = async (amount, vendor, category) => {
      let t1 = {amount, vendor , category}
      await axios.post("http://localhost:3003/transaction", t1)
      this.getDataFromDB()
  }

  withdraw = async (amount, vendor, category) => {
    amount *= (-1)
    let t1 = {amount, vendor , category}
    await axios.post("http://localhost:3003/transaction", t1)
    this.getDataFromDB()
}

 

  render() {
    return (
      <div>
        <Operations deposit={this.deposit} withdraw = {this.withdraw}/>
        <h1>Current Balance: {this.state.balance}</h1>
        <Transactions trans={this.state.data} />
      </div>
    );
  }
}

export default App;
