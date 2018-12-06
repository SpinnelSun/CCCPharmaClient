<template>
    <form @submit.prevent="login" id="login_form">
        <h2>Please Signin</h2>
        <label for="input_email"> Email</label>
        <input v-model="email" id="input_email" required/>
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
            http.post('/auth/signin', { email: this.email, password: this.password })
                .then(request => this.loginSucessful(request))
                .catch(error => this.loginFailed(error));
        },
        loginSucessful(req) {
            localStorage.token = req.data.token;
            console.log(req.data.token);
        },
        loginFailed (error) {
            console.log(error);
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
    margin: 10%;
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input {
    width: 25%;
    height: 50%;
    border-left: none;
    border-right: none;
    border-top: none;
    font-size: 1.1em;
    border-bottom: 1px solid #ac7c4f;
    margin-bottom: 10px;
}
input:hover{
	border-bottom:1px solid #000000;
}
button {
  background-color:#000000;
  color:white;
  font-size: 1.1em;
  border: 0;
  cursor:pointer;
  padding: 1em;
  text-align:center;
  transition: .2s ease-in-out;
}
</style>

