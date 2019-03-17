
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

                <div style={{
                    display: 'flex',
                    width: "75%",
                    paddingLeft: "45px",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />

                </div>

                <div style={{
                    display: 'flex',
                    width: "75%",
                    paddingLeft: "45px",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <h1>--- Da Crazy Dino Factory ---</h1>
                    <img src="./logo_good.png" style={{ height: 70 }} />

                </div>

                <div style={{
                    display: 'flex',
                    width: "75%",
                    paddingLeft: "45px",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />
                    <img src="./logo_good.png" style={{ height: 70 }} />

                </div>
                <button 
                className="success"
                onClick={this.switch}>DEFRAG THE DINOS(PUBLISH)</button>

            </div>


        )
    }
}




render(<App />, document.getElementById("root"));


