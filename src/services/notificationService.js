import http from '@/config/axios';

const BASE_PATH = '/notifications';

const get = () => { 
    return http.get(`${BASE_PATH}`,{ 
            headers: {
                Authorization: `Bearer ${localStorage.token}` 
            }
        })
        .then(response => response)
        .catch(error => error.response);
}

export {
    get
}