import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";

export default class TypeAHead extends Component {
  render() {
    var options = [
      "Rate A",
      "Rate B",
      "Rate C",
      "Rate D",
      "Rate E",
      "Rate F",
      "Rate G",
      "Rate H",
      "Rate I",
      "Rate J",
      "Rate K",
      "Rate I"
    ];
    return (
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div style={{ width: "178px", paddingLeft: "20px" }}>
          <Typeahead
            labelKey="name"
            options={options}
            placeholder="Choose Rate Category"
          />
        </div>
      </div>
    );
  }
}
