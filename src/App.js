import React, { Component } from "react";
import { Provider } from "rebass";
import "./App.css";
import Subspaces from "./subspaces.js";
import LinearCombinations from "./linear-combinations.js";

class App extends Component {
  render() {
    return (
      <Provider>
        <LinearCombinations />
        <br />
        <Subspaces />
        <br />
        <br />
      </Provider>
    );
  }
}

export default App;
