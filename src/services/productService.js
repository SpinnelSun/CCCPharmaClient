import http from '@/api/axios';

const BASE_PATH = '/products'

const getProducts = (product) => {
    return http.get(`${BASE_PATH}`)
                .then(data => console.log(data))
                .catch(error => error.response);
}

const update = (product) => {
    return http.put(`${BASE_PATH}/`+product.code, product)
                .then(response => response)
                .catch(error => error.response);
}

export {
    getProducts,
    update
}