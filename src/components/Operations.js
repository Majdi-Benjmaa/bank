import React, { Component } from "react";

class Operations extends Component {
    constructor(){
        super()
        this.state = {
            amountInp : "",
            vendorInp : "", 
            categoryInp : ""
        }
}

handleInput = e => {
    let inputValue = e.target.value;
    this.setState({
      [e.target.id]: inputValue
    })
}

  render() {
    
    return (
      <div>
        <input id = "amountInp" placeholder="Amount" onChange={this.handleInput} type="text" />
        <input id = "vendorInp" placeholder="Vendor" onChange={this.handleInput} type="text" />
        <input id = "categoryInp" placeholder="Category" onChange={this.handleInput} type="text" />
        <button>Deposit</button>
        <button>Withdraw</button>
      </div>
    )
  }
}

export default Operations;
