
import { render } from "react-dom";
import React, { Component, useState } from "react";

import Builder from "./builder"
import AppRender from "./appRender"

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            locale: "france"
        }

        this.setLocale = this.setLocale.bind(this)
    }


    setLocale(input){
        this.setState({
            locale: input
        })
    }

    render(){
        return (
            <div>
        
                <div style={{ display: "flex" }}>
                    <div style={{ width: "60%" }}>
                        <Builder setLocale={this.setLocale} locale={this.state.locale}/>
                    </div>
                    <div style={{ width: "40%" }}>
                        <AppRender setLocale={this.setLocale} locale={this.state.locale}/>
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
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
    
                </div>
    
                <div style={{
                    display: 'flex',
                    width: "75%",
                    paddingLeft: "45px",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <h1>--- Da Crazy Dino Factory ---</h1>
                    <img src="./logo2.png" style={{ height: 70 }} />
    
                </div>
    
                <div style={{
                    display: 'flex',
                    width: "75%",
                    paddingLeft: "45px",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
                    <img src="./logo2.png" style={{ height: 70 }} />
    
                </div>
            </div>
    
    
        )
    }
}




render(<App />, document.getElementById("root"));


