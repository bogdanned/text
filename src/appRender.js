import React, { Component, useState } from "react";
import Emoji from 'react-emoji-render';

import { Twemoji } from 'react-emoji-render';

import renderFrench from "./languages/renderFrance"


export default (props) => {

    const { locale } = props
    let text, component
    console.log(props, "props")
    if (locale == "french") {
        component = null
    } else {
        text = "English: "
    }

    const data = props.builderData.map((node, index) => (<h6>{index + 1}. {node.title}</h6>))
    return (

        <div style={{
            margin: "50px",
            padding: "30px",
            border: "solid",
            borderRadius: "32px",
            height: "500px",
            width: "250px"
        }}>
            <h1>Trust Diligence </h1>
            <div>
                {data}
            </div>
        </div>


    )




}