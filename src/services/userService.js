import http from '@/config/axios';

const BASE_PATH = '/users'

const signup = (user) => {
    user.authorities = [{id: 1, name: 'ROLE_CLIENT'}]
    
    return http.post(`${BASE_PATH}`, user)
                .then(response => response)
                .catch(error => error.response);
}

const findByEmail = (email) => {
    return http.get(`${BASE_PATH}/${email}`)
                .then(response => response)
                .catch(error => error.response);    
}

export {
    signup,
    findByEmail
}