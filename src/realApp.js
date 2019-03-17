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
            <iframe src="https://prottapp.com/e/9c520e" width="432" height="980" frameborder="0"></iframe>
        )
    }
}