import axios from 'axios';

export function getClass(params){
    return axios.post('http://localhost:5000/api/classify', params);
}

export function getHistory(){
    return axios.get('http://localhost:5000/api/get/history');
}

export function addHistory(params){
    return axios.post('http://localhost:5000/api/add/history',params);
}

export function deleteHistory(params){
    return axios.post('http://localhost:5000/api/delete/history',params);
}