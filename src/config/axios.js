import axios from 'axios';

const API_URL = 'https://cccpharma-server.herokuapp.com';

const http = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': `Bearer ${localStorage.token}`
    }
})


export default http;