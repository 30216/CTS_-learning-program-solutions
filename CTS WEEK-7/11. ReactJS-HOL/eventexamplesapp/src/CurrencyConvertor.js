import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euro: "",
      exchangeRate: 0.011, 
        };
  }

  handleInputChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const euro = (parseFloat(this.state.rupees) * this.state.exchangeRate).toFixed(2);
    this.setState({ euro });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Indian Rupees: </label>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && (
          <p>
            Euro: <strong>{this.state.euro}</strong>
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
