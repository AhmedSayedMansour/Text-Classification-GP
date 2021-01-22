import React, { Component } from 'react'

export default class Functionlities extends Component {
    render() {
        return (
            <div style = {funcStyles}>
                <h2>item 2</h2>
            </div>
        )
    }
}
const funcStyles = {
    gridColumn:'5/ span 1',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    border: '1px solid #1a1c20',
    borderRadius:'10px',
}
