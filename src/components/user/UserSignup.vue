<template>
    <user-form title="Sign up" v-on:handleSubmit="handleSubmit">
    </user-form>
</template>

<script>
import { signup } from '@/services/userService'
import UserForm from '@/components/user/UserForm'

export default {
    name: 'UserSignup',
    methods: {
        async handleSubmit (user) {
          const response = await signup(user);
          console.log(response);
        },
    },
    components: {
        UserForm
    }
}
</script>