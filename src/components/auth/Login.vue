<template>
    <user-form title="signin" v-on:handleSubmit="handleSubmit">
    </user-form>
</template>

<script>
import http from '@/api/axios'
import UserForm from '@/components/user/UserForm'
export default {
    name: 'Login',
    methods: {
        handleSubmit (user) {
            http.post('/auth/signin', { email: user.email, password: user.password })
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
    },
    components: {
        UserForm
    }
}
</script>
