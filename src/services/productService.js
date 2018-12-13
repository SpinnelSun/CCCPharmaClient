import http from '@/api/axios';

const BASE_PATH = '/products'

const getProducts = () => {
    return http.get(`${BASE_PATH}`)
                .then(response => response)
                .catch(error => error.response);
}

const update = (product) => {
    return http.put(`${BASE_PATH}/${product.code}`, product)
                .then(response => response)
                .catch(error => error.response);
}

const save = (product) => {
    return http.post(`${BASE_PATH}/${product.code}`, product)
                .then(response => response)
                .catch(error => error.response);
}

export {
    getProducts,
    update,
    save
}