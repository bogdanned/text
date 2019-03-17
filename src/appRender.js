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
    return (

        <div style={{
            margin: "50px",
            padding: "30px",
            border: "solid",
            borderRadius: "32px",
            height: "500px",
            width: "250px"
        }}>
            <h1>Awesome app here </h1>
            <div>

                <label style={{ fontSize: "20px;" }}>{text}

                </label>

                <input style={
                    {
                        border: "none",
                        borderBottom: "solid black 2px"
                    }
                }></input>?                <Twemoji text=":)" />
            </div>
        </div>


    )




}