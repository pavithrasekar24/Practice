import React, { Component } from "react";
import "./styles.css";
import InputColor from "react-input-color";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#00000"
    };
  }
  handleChange = e => {
    this.setState({ color: e.hex });
    console.log("color", e.hex);
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input value={this.state.color} />
        <InputColor
          name="color"
          initialHexColor={this.state.color}
          value={this.state.color}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
