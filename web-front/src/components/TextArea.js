import React, { Component } from 'react'
import { MDBInput } from 'mdbreact';


export default class TextArea extends Component {
    render() {
        return (
            <div style = {funcStyles}>
                <p style = {paraStyle}>To use this document classifier, 
                    please copy and paste your content in the box below,
                    and then click on the big orange button that says “Start classifying!”
                    then sit back and watch as your article is scanned for which class it
                    belongs.</p>
                    <div style={textAreaDiv}>
                        <MDBInput type="textarea"  style={textArea}
                        label=" ..Copy and paste your text here to classify your content ..." 
                        rows="10" />
                    </div>
                    
                    
            </div>
        )
    }
}
const funcStyles = {
    gridColumn:'2/ span 3',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    border: '1px solid #1a1c20',
    borderRadius:'10px',
}
const paraStyle ={
    fontFamily: 'cabinReg',
    margin:'auto',
    marginTop: '2%',
    width: '80%',
}
const textAreaDiv = {
    backgroundColor: 'white',
    margin: '2%',
    marginTop:'10%',
}

const textArea = {
    border: '0.5px dotted #1a1c20',
    borderRadius: '10px',

}
