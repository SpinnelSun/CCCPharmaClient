import http from '@/config/axios';

const BASE_PATH = '/sales'

const getAllSales = () => {
    return http.get(`${BASE_PATH}`)
                .then(response => response)
                .catch(error => error.response);
}

const getSaleById = (id) => {
    return http.get(`${BASE_PATH}/${id}`)
                .then(response => response)
                .catch(error => error.response);
}

export {
    getAllSales,
    getSaleById
}