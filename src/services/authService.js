import http from '@/api/axios';

const BASE_PATH = '/auth'

const signin = (user) => { 
    return http.post(`${BASE_PATH}/signin`, user)
            .then(response => signinSucessful(response))
            .catch(error => signinFailed(error));
}

const signinSucessful =  (response) => {
    localStorage.token = response.data.token;
    localStorage.authorities = response.data.roles[0].name;
    return response.data;
}

const signinFailed = (error) => {
    return error.response;
}

export {
    signin
}