import http from '@/api/axios';

const BASE_PATH = '/sales'

const getAllSales = () => {
    user.authorities = [{id: 1, name: 'ROLE_CLIENT'}]
    return http.post(`${BASE_PATH}`, user)
                .then(response => response)
                .catch(error => error.response);
}

export {
    signup
}