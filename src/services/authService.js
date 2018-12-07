import http from '@/api/axios';

const BASE_PATH = '/auth'

const signin = (user) => { 
    http.post(`${BASE_PATH}/signin`, user)
        .then(response => signinSucessful(response))
        .catch(error => signinFailed(error));
}

const signinSucessful =  (response) => {
    localStorage.token = response.data.token;
    localStorage.authorities = response.data.roles[0].name;
    console.log(response.data);
}

const signinFailed = (error) => {
    console.log('oi')
    console.log(error.response);
}

export {
    signin
}