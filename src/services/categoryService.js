import http from '@/config/axios';

const BASE_PATH = '/categories';

const get = () => { 
    return http.get(`${BASE_PATH}`)
        .then(response => response)
        .catch(error => error.response);
}

const update = (category) => { 
    return http.put(`${BASE_PATH}`, category)
            .then(response => response)
            .catch(error => error.response);
}

export {
    get,
    update
} 