import React, { Component } from 'react';
import HistoryChild  from '../HistoryChild/HistoryChild';
import './history.css';
import Logo from '../Logo.js';
import {ScaleLoader} from 'react-spinners';
import { getHistory, deleteHistory } from '../../API/HistoryApi.js';



export default class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allHistory: [],
            loading: true,
            alert: false
        }
    }
    componentDidMount(){

        getHistory().then( response => {
            this.setState({allHistory: response.data.data.history , loading: false, alert: false})
    
        }).catch(error => setTimeout(this.setState({
            alert:true,
            loading: false,
        }),3000))
        
    }

    onDelete(id) { 

        deleteHistory({id}).then(response => {
            response.data.status && this.setState({
                allHistory: this.state.allHistory.filter((history) => history._id !== id)
            }) 

        }).catch(error => console.log(error));
    }


    render() {
        return (
            <div>
                <header className="site-header">
                    <Logo style={{position:"fixed"}}/>
                    <ScaleLoader loading = {this.state.loading}/>
                    {(this.state.allHistory.length === 0) && (this.state.loading === false) && (this.state.alert === false) ? <h1>NO HISTORY YET</h1>:""}
                    {(this.state.alert === true) ? <h1>There is problem with the server</h1>:""}
                    
                </header>
                {this.state.allHistory.length>0 ? this.state.allHistory.reverse().map((history)=>(<li style={{listStyleType: 'none'}} key={history._id}><HistoryChild onDelete={this.onDelete.bind(this)} _id={history._id} txt={history.text} class={history.tag} algo={history.algorithm} isRight={history.isTagRight}/></li>) ): ""}
            </div>
        )
    }
}
