import http from '@/api/axios';

const BASE_PATH = '/products'

const getProducts = (product) => {
    return http.get(`${BASE_PATH}`)
                .then(data => console.log(data))
                .catch(error => error.response);
}

export {
    getProducts
}