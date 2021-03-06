import http from '@/config/axios';

const BASE_PATH = '/products'

const getProducts = () => {
    return http.get(`${BASE_PATH}`)
                .then(response => response)
                .catch(error => error.response);
}

const getProductsSorted = (sortingAttribute) => {
    return http.get(`${BASE_PATH}?sort=${sortingAttribute}`)
                .then(response => response)
                .catch(error => error.response);
}


const update = (product) => {
    return http.put(`${BASE_PATH}`, product)
                .then(response => response)
                .catch(error => error.response);
}

const save = (product) => {
    return http.post(`${BASE_PATH}`, product)
                .then(response => response)
                .catch(error => error.response);
}
 
const findByCode = (code) => {
    return http.get(`${BASE_PATH}/${code}`)
                .then(response => response)
                .catch(error => error.response);
}
 

export {
    getProducts,
    getProductsSorted,
    update,
    save,
    findByCode
}
