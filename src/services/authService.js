import http from '@/api/axios';

const BASE_PATH = '/auth'

const signin = (user) => { 
    http.post(`${BASE_PATH}/signin`, user)
        .then(response => signinSucessful(response))
        .catch(error => signinFailed(error));
}

const signinSucessful =  (response) => {
    localStorage.token = response.data.token;
    console.log(response.data.token);
}

const signinFailed = (error) => {
    console.log(error);
}

export {
    signin
}