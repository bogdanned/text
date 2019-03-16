import React, { Component, useState } from "react";
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-minimal";

import treeData from "./treeData"
import treeDataGermany from "./treeDataGermany"
import treeDataChina from "./treeDataChina"
import treeDataFrance from "./treeDataFrance"

import "./App.css"


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData,
      other_modules: []
    };
    this.setDefault = this.setDefault.bind(this)
    this.setFrance = this.setFrance.bind(this)
    this.setGermany = this.setGermany.bind(this)
    this.setChina = this.setChina.bind(this)
  }

  setGermany(e) {
    e.preventDefault()
    this.setState({
      treeData: treeDataGermany,
      other_modules: []
    })
  }

  setChina(e) {
    e.preventDefault()
    this.setState({
      treeData: treeDataChina,
      other_modules: []
    })
  }


  setFrance(e) {
    e.preventDefault()
    console.log("asdfd")
    this.setState({
      treeData: treeDataFrance,
      other_modules: []
    })
  }


  setDefault(e) {
    e.preventDefault()
    this.setState({
      treeData: treeData,
      other_modules: []
    })
  }

  render() {
    return (
      <div style={{ height: 700, textAlign: "center" }}>
        <div>
        </div>
        <div style={{
          display: 'flex',
          width: "75%",
          paddingLeft: "45px",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <img src="./logo2.png" style={{ height: 70 }} />
          <h3>Da Crazy Dino Factory</h3>

          <img src="./logo2.png" style={{ height: 70 }} />
        </div>
        <div>

          <button className="btnC" onClick={this.setGermany}>Germany</button>
          <button className="btnC" onClick={this.setDefault}>UK</button>
          <button className="btnC" onClick={this.setFrance}>France</button>
          <button className="btnC" onClick={this.setChina}>中文</button>

        </div>

        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          theme={FileExplorerTheme}
        />


        <button>Create Process</button>
      </div>
    );
  }
}
