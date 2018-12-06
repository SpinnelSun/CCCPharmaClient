<template>
    <user-form title="Sign up" v-on:handleSubmit="handleSubmit">
    </user-form>
</template>

<script>
import http from '@/api/axios'
import UserForm from '@/components/user/UserForm'
export default {
    name: 'Signup',
    methods: {
        handleSubmit (user) {
            const authorities = [{id: 2, name: 'ROLE_ADMIN'}]
            http.post('/users', { email: user.email, password: user.password, authorities: authorities })
                .then(request => this.signupSucessful(request))
                .catch(error => this.signupFailed(error));
        },
        signupSucessful(resp) {
            console.log(resp.data);
        },
        signupFailed (error) {
            console.log(error);
        }
    },
    components: {
        UserForm
    }
}
</script>