import React, { Component, useState } from "react";
import Emoji from 'react-emoji-render';

import { Twemoji } from 'react-emoji-render';

import renderFrench from "./languages/renderFrance"

import CameraInput from "./cameraInput"

import RealApp from "./realApp"

export default (props) => {

    const { locale, showApp } = props

    let text, component, title = "Trust Diligence"
    console.log(props, "props")
    if (locale == "french"){
        title = "Confiance diligence"
    } else if(locale == "chinese"){
        title = "信任勤奋"
    }else if(locale=="german"){
        title = "Vertrauen Fleiß"
    }

    const data = props.builderData.map((node, index) => {

        if(node.id=="parse-id"){
            return (
                <div>
                    <h6>{index + 1}. {node.title}</h6>
                    <CameraInput/>
                    </div>
            )
        }

        const element = <h6>{index + 1}. {node.title}</h6>
        return (
            element
        )
    })

    if(
    showApp){
        return (                    <RealApp/>        )
    }

    return (
        
        <div style={{
            margin: "50px",
            padding: "30px",
            border: "solid",
            borderRadius: "32px",
            height: "500px",
            width: "250px"
        }}>

            <h3>{title} </h3>
            <div>
                {data}
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between", }}>
            <button style={{
                                width: "68px",
                                padding: "5px",
                                /* padding-right: 20px; */
                                borderRadius: "6px",
                                color: "white",
                                cursor: "pointer",
                                border: "none",
                                background: "#e60028"
            }}>BACK</button>
            <button style={{
                                width: "68px",
                                padding: "5px",
                                color: "white",
                                border: "none",
                                /* padding-right: 20px; */
                                borderRadius: "6px",
                                cursor: "pointer",
                                background: "#e60028"

            }}>NEXT</button>

            </div>
        </div>


    )




}