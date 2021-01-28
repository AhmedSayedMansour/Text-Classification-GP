import React, { Component } from 'react'
import { MDBInput } from 'mdbreact';


export default class TextArea extends Component {
    state = {
        txt: '',
    }
    
    handleInput = (e) => {
        this.setState({
            txt: e.target.value,
        })

        console.log(this.state.txt)
    }

    render() {
        return (

        <div>
            <MDBInput type="textarea"  style={textArea} onChange={this.handleInput} value={this.state.txt}
            label=" ..Copy and paste your text here to classify your content ..." 
            rows="10" />
        </div>
                    
                    

        )
    }
}

const textArea = {
    border: '0.5px solid #1a1c20',
    borderRadius: '10px',

}
