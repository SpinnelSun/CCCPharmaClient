import axios from 'axios';

const API_URL = 'https://ccc-webpharma.herokuapp.com';

const http = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
    }
})

export default http;
