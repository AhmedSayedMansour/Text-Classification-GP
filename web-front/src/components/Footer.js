import React from 'react'

export default function Footer() {
    return (
        <div style={navStyles}>
            <h1 style={fontStyle}>footer</h1>
        </div>
    )
}
const navStyles = {
    textAlign: 'center',
    alignSelf:'end',
    backgroundColor: '#1a1c20',
}
const fontStyle = {
    padding: '0',
    margin:'0',
    color: '#1a1c20',
}