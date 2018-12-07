<template>
    <user-form title="Sign in" v-on:handleSubmit="handleSubmit">
    </user-form>
</template>

<script>
import { signin } from '@/services/authService'
import UserForm from '@/components/user/UserForm'

export default {
    name: 'Signin',
    methods: {
        handleSubmit (user) {
            signin(user);
            this.$router.replace(this.$route.query.redirect || '/home')
        }
    },
    components: {
        UserForm
    }
}
</script>
