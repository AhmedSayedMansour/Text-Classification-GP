import React, { Component } from 'react'
import './dashboard.css';
import History from '../History/History.js';
import Classifier from '../Classifier/Classifier';
import Research from '../Research.js';
import { Link } from "react-router-dom";
import {
    Route
} from "react-router-dom";
import Credits from '../Credits/Credits';

export default class dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [],
            isClicked: false,
            isActive: true,
            toggleDD: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isActive: false,
            })
        }, 3000)
    }


    toggleDropDown = () => {
        this.setState({
            toggleDD: !this.state.toggleDD
        })
    }
    disableActive = () => {
        this.setState({ isActive: false })
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({
            isClicked: !this.state.isClicked,
            toggleDD: false,
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
                    <nav role="navigation" onMouseLeave={() => { this.setState({ toggleDD: false }) }} className="menu">
                        <Link to="/" onClick={this.disableActive} className="logotype">TEXT<span>CLASS</span></Link>
                        <div className="overflow-container">
                            <ul className="menu-dropdown">
                                <li><Link to="/" onClick={this.disableActive}>Classify text</Link><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                                </svg></span>
                                </li>
                                <li><Link to="/history">History</Link><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg></span>
                                </li>
                                <li><Link to="/research">Research</Link><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                                </svg></span>
                                </li>

                                <li><Link to="/credits">Credits</Link><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg></span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="new-wrapper">
                    <Route exact path="/">
                        <Classifier  />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/research">
                        <Research />
                    </Route>
                    <Route path="/credits">
                        <Credits/>
                    </Route>
                </div>
            </div>
        )
    }

}
