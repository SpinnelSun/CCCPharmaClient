import http from '@/api/axios';

const BASE_PATH = '/categories';

const get = () => { 
    return http.get(`${BASE_PATH}`)
            .then(response => response)
            .catch(error => error.response);
}

const update = (category) => { 
    return http.post(`${BASE_PATH}`, category)
            .then(response => response)
            .catch(error => error.response);
}

export {
    get,
    update
} 