import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello(); 
  }

  sayHello() {
    alert("Hello! This is a static message.");
  }

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = (msg) => {
    alert(`Welcome message: ${msg}`);
  };

  handleOnPress = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event Object:", event);
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Event Handling Examples</h1>

        <h2>Counter Value: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Increment</button>{" "}
        <button onClick={this.decrementCounter}>Decrement</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("welcome")}>Say Welcome</button>

        <br /><br />
        <button onClick={this.handleOnPress}>OnPress</button>

        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
