
import { render } from "react-dom";
import React, { Component, useState } from "react";

import Builder from "./builder"
import AppRender from "./appRender"
import treeData from "./treeData"
import CameraInput from "./cameraInput"

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            locale: "france",
            showApp: false,
            builderData: treeData
        }
        this.setBuilderData = this.setBuilderData.bind(this)
        this.setLocale = this.setLocale.bind(this)
        this.switch = this.switch.bind(this)
    }


    setLocale(input) {
        this.setState({
            locale: input
        })
    }

    setBuilderData(input) {
        this.setState({
            builderData: input
        })
    }

    switch() {
        
        this.setState({
            showApp: true
        })
    }


    render() {
        console.log(this.state, "this state")


        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "60%" }}>
                        <Builder
                            builderData={this.state.builderData}
                            setBuilderData={this.setBuilderData}
                            setLocale={this.setLocale}
                            locale={this.state.locale} />
                    </div>
                    <div style={{ width: "40%" }}>
                        <AppRender
                            setLocale={this.setLocale}
                            showApp={this.state.showApp}
                            builderData={this.state.builderData}
                            locale={this.state.locale} />
                    </div>

                    <div>


                    </div>
                </div>

                <button 
                className="success"
                onClick={this.switch}>DEFRAG THE DINOS(PUBLISH)</button>

            </div>


        )
    }
}




render(<App />, document.getElementById("root"));


