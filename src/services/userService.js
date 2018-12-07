import http from '@/api/axios';

const BASE_PATH = '/users'

const signup = (user) => { 
    user.authorities = [{id: 2, name: 'ROLE_ADMIN'}]
    http.post(`${BASE_PATH}`, user)
        .then(response => signupSucessful(response))
        .catch(error => signupFailed(error));
}

const signupSucessful = (resp) => {
    console.log(resp.data);
}

const signupFailed = (error) => {
    console.log(error);
}

export {
    signup
}