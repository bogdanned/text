import React, { Component, useState } from "react";
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-minimal";
import { render } from "react-dom";

import treeData from "./treeData"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData,
      other_modules: []
    };
  }

  render() {
    return (
      <div style={{ height: 450, textAlign: "center" }}>

        <div style={{
          display: 'flex',
          width: "75%",
          paddingLeft: "45px",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <img src="./logo.jpg" style={{ height: 70 }} />
          <h1>Da Crazy Dino Factory</h1>
          <img src="./logo.jpg" style={{ height: 70 }} />
        </div>


        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          theme={FileExplorerTheme}
        />

        <div style={{
          display: 'flex',
          width: "75%",
          paddingLeft: "45px",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <img src="./logo.jpg" style={{ height: 70 }} />
          <h1>Da Crazy Dino Factory</h1>
          <img src="./logo.jpg" style={{ height: 70 }} />
        </div>
        <button>Create Process</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
