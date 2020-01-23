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
        {/* <input type="color" name="color" value={this.state.color} /> */}
        {this.state.color ? (
          <input
            style={{ width: "136px", height: "47px" }}
            type="color"
            name="color"
            value={this.state.color}
            disabled
          />
        ) : (
          ""
        )}

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
