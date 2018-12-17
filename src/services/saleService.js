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

const getAllSalesSorted = (sortingAttribute) => {
    return http.get(`${BASE_PATH}?sort=${sortingAttribute}`)
                .then(response => response)
                .catch(error => error.response);
}

const getSaleById = (id) => {
    return http.get(`${BASE_PATH}/${id}`)
                .then(response => response)
                .catch(error => error.response);
}

const deleteSaleById = (id) => {
    return http.delete(`${BASE_PATH}/${id}`)
                .then(response => response)
                .catch(error => error.response);
}

export {
    save,
    getAllSales,
    getSaleById,
    deleteSaleById,
    getAllSalesSorted
}