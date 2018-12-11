import http from '@/api/axios';

const BASE_PATH = '/sales'

const getAllSales = () => {
    return http.post(`${BASE_PATH}`, user)
                .then(response => response)
                .catch(error => error.response);
}

export {
    getAllSales
}