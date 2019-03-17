import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Image = ({ src }) => (<img 
    style={{ 
        height: "400px"
    }} 
    src={src} />)

export default class DemoCarousel extends Component {
    constructor(props) {
        super()
        this.state = {
            step: 0
        }
    }
    render() {
        const { step } = this.state;
        return (
<iframe src="https://prottapp.com/e/5e9624" width="431" height="936" frameborder="0"></iframe>
        )
    }
}