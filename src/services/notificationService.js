import http from '@/api/axios';

const BASE_PATH = '/notifications';

const get = () => { 
    return http.get(`${BASE_PATH}`)
            .then(response => response)
            .catch(error => error.response);
}

export {
    get
}