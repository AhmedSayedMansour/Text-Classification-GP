import React, { Component } from 'react'
import Functionlities from './Functionlities.js'
import TextArea from './TextArea.js'

export default class Input extends Component {
    render() {
        return (
            <div style = {inputStyles} >
                <TextArea />
                <Functionlities />
            </div>
        )
    }
}
const inputStyles = {
    gridRow:'2 / span 16',
    display: 'grid',
    gridTemplateColumns:' 0.05fr 1fr 1fr 1fr 1fr 0.05fr',
    gridGap: '10px',
    backgroundColor: '#f4f4f4',
    
}


