import http from '@/config/axios';

const BASE_PATH = '/sales'

const save = (sale) => {
    return http.post(`${BASE_PATH}`, sale)
                .then(response => response)
                .catch(error => error.response);
}

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
    getSaleById,
    save
}