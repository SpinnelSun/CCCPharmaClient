import http from '@/config/axios';

const BASE_PATH = '/auth';

const signin = (user) => { 
    return http.post(`${BASE_PATH}/signin`, user)
            .then(response => signinSucessful(response))
            .catch(error => signinFailed(error));
}

const signinSucessful =  (response) => {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('authority', response.data.roles[0].name);

    return response;
}

const signinFailed = (error) => {
    return error.response;
}

const logout =  () => {
    localStorage.removeItem('token')
    localStorage.removeItem('authority');
}

export {
    signin,
    logout
}