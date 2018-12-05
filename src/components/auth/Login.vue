<template>
    <form @submit.prevent="login" id="login_form">
        <h2>Please Signin</h2>
        <label for="input_email"> Email</label>
        <input v-model="email" type="email" id="input_email" required/>
        <label for="input_password">Password</label>
        <input v-model="password" type="password" id="input_password" required/>
        <button>Sign in</button>
    </form>
</template>

<script>
import http from '@/api/axios'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login () {
            http.post('/login', { email: this.email, password: this.password })
                .then(request => this.loginSucessful(request))
                .catch(() => this.loginFailed());
        },
        loginSucessful(req) {
            localStorage.token = req.data.token;
            console.log(req.data.token);
        },
        loginFailed () {
            console.log('Error');
        }
    } 
}
</script>

<style scoped>
body {
    font-family: 'sans';
    font-size: 0.875rem;
    font-weight: 400;
    margin: 0;
}
#login_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input {
    width: 20%;
    height: 50%;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid #e65c00;
    margin-bottom: 10px;
}
button {

}
</style>

