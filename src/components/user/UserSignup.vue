<template>
    <user-form title="Sign up" v-on:handleSubmit="handleSubmit">
    </user-form>
</template>

<script>
import { signup } from '@/services/userService'
import UserForm from '@/components/user/UserForm'

export default {
    name: 'UserSignup',
    data() {
        return {
            error: false
        }
    },
    methods: {
        async handleSubmit (user) {
          const HTTP_STATUS_CREATED = 201;
          const response = await signup(user);
          this.error = response.status != HTTP_STATUS_CREATED;
        },
    },
    components: {
        UserForm
    }
}
</script>