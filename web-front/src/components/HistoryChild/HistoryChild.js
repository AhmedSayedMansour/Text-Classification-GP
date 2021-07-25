import React, { Component } from 'react';
import './historyChild.css';
import {Link} from "react-router-dom";

export default class HistoryChild extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            month:0,
            day: 0,
            year:0,
            acc:0
        }
    }

    componentDidMount(){
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        this.setState({
            id: this.props._id,
            month:month,
            day:day,
            year:year
        })
        switch (this.props.algo){
            case 'Random Forest':
                this.setState({
                    acc: 70
                });
                break;
            case 'SVM':
                this.setState({
                    acc: 80
                });
                break;
            case 'Naive Bayes':
                this.setState({
                    acc: 90
                });
                break;
            case 'Linear SVC':
                this.setState({
                    acc: 95
                });
                break;
            default:
                this.setState({
                    acc: 70
                });
        }
    }
    
    render() {
        return (
            <div className="note">
                <article >
                    <header>
                        <Link to="/history" onClick={() => {this.props.onDelete(this.state.id)}}  className="close">                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Link>

                        <span className="date">{this.state.month}/{this.state.day}/{this.state.year}</span>
                    </header>
                    <div className="content">
                        <p>{this.props.txt}</p>
                    </div>
                    <footer>

                        <span className="using" style={{display: 'inline'}}>Using Algorithm:<span  style={{display: 'inline'}}className="algo">{this.props.algo}</span></span>
                        <span className="acc" style={{display: 'inline'}}>ACC: <span  style={{display: 'inline'}}className="algo">{this.state.acc}%</span></span>
                        
                        <span  className="author" style={{fontSize:'1.4rem'}}><span style={{color: 'white', fontStyle: 'italic'}}>CLASS</span> {this.props.class}</span>
                    </footer>
                </article>
            </div>
        )
    }
}
