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
    this.props.setLocale("german")
    this.props.setBuilderData(treeDataGermany)
  }

  setChina(e) {
    e.preventDefault()
    this.props.setLocale("chinese")
    this.props.setBuilderData(treeDataChina)

  }


  setFrance(e) {
    e.preventDefault()
    this.props.setLocale("french")
    this.props.setBuilderData(treeDataFrance)
  }


  setDefault(e) {
    e.preventDefault()
    this.props.setLocale("english")
    this.props.setBuilderData(treeData)
  }

  render() {
    return (
      <div style={{ height: 600, textAlign: "center" }}>
        <div>
        </div>
        <div style={{
          display: 'flex',
          width: "75%",
          paddingLeft: "45px",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <img src="./logo_good.png" style={{ height: 70 }} />
          <h2>Bringing people toghether</h2>

          <img src="./logo_good.png" style={{ height: 70 }} />
        </div>
        <img src="./logo_sg.png" style={{ height: 70 }} />

        <div style={{
              textAlign: "left",
              paddingLeft: "40px"
        }}>

          <button className="btnC" onClick={this.setFrance}>France</button>
          <button className="btnC" onClick={this.setGermany}>Deutschland</button>
          <button className="btnC" onClick={this.setDefault}>UK</button>
          <button className="btnC" onClick={this.setChina}>中文</button>
          <button className="btnC" onClick={this.setChina}>España</button>

        </div>

        <SortableTree
          treeData={this.props.builderData}
          onChange={treeData => this.props.setBuilderData(treeData)}
          theme={FileExplorerTheme}
        />

      </div>
    );
  }
}
