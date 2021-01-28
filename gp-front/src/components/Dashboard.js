import React, { Component } from 'react'
import '../../src/css/dashboard.css';
import TextArea from './TextArea.js';
import Logo from './Logo.js';


export default class dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
        }
    }
    onClick = (e) => {
        console.log(this.state.isClicked);
        e.preventDefault();
        this.setState({
            isClicked: !this.state.isClicked,
        })
    }
    
    render() {
        return ( 
<div className={this.state.isClicked ? "openNav" : ""}>
    <div className="primary-nav">
        <button onClick={this.onClick} href="#"
            className={`hamburger open-panel nav-toggle ${this.state.isClicked ? "active" : ""}`}>
            <span className="screen-reader-text">Menu</span>
        </button>
        <nav role="navigation" className="menu">
            <a href="#" className="logotype">LOGO<span>TYPE</span></a>
            <div className="overflow-container">
                <ul className="menu-dropdown">
                    <li><a href="#">Dashboard</a><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
                        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                        <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                        </svg></span>
                    </li>
                    <li className="menu-hasdropdown">
                    <a href="#">Functions</a><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                            </svg></span>
                        <label title="toggle menu" htmlFor="settings">
                            <span className="downarrow"><i className="fa fa-caret-down"></i></span>
                        </label>
                        <input type="checkbox" className="sub-menu-checkbox" id="settings" />
                        <ul className="sub-menu-dropdown">
                            <li><a href="">Classify</a></li>
                            <li><a href="">Security</a></li>
                            <li><a href="">Account</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Favourites</a><span className="icon"><i className="fa fa-heart"></i></span></li>
                    <li><a href="#">Messages</a><span className="icon"><i className="fa fa-envelope"></i></span></li>
                </ul>
            </div>
        </nav>
    </div>

    <div className="new-wrapper">

        <div id="main">
            <div id="main-contents">
                <Logo></Logo>
                <p className="intro">To use this document classifier, 
                        please copy and paste your content in the box below,
                        and then click on the big dark button that says “Start classifying!”
                        then sit back and watch as your article is scanned for which class it
                        belongs.
                </p>

                <h2>Checkbox Hack</h2>
                <TextArea></TextArea>

            </div>
            
            <button type="button" class="btn btn-black">Start</button>

        </div>

    </div>

</div>
        )
    }
}