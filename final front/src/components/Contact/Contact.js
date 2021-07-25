import React, { Component } from 'react';
import './Contact.css';
class Contact extends Component {
    state={
        class:""
    };

    toggleClass=()=>{
        this.state.class===""?
        this.setState(
        {
            class:" active"
        }
        ):this.setState(
            {
                class:""
            }
            );
    }
    render(){
    return (

        <div id="card">
            <div id="blur">
                <div id="color"></div>
            </div>
            <div id="profile">
                <img className='profileImg' src={this.props.img} alt={this.props.name}/>
                <h1 className="profileH">{this.props.name}</h1>
                <p className="profilePara">{this.props.title}</p>
                <div className={"info"+this.state.class} >
                    <i className="fa fa-info fa-1x block" onClick={()=>this.toggleClass()}></i>
                    <i className="fa fa-angle-down fa-2x block" onClick={()=>this.toggleClass()}></i>
                    <p>Glad to make such a great project with this team feel free to send me anytime.</p>
                    <p > {this.props.email}</p>
                </div>
            </div>
        </div>

    );
}
}

export default Contact;