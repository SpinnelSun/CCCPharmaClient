<template>
    <user-form title="Sign in" v-on:handleSubmit="handleSubmit">
    </user-form>
</template>

<script>
import { signin } from '@/services/authService'
import UserForm from '@/components/user/UserForm'

export default {
    name: 'Signin',
    data() {
        return {
            error: false
        }
    },
    methods: {
        async handleSubmit (user) {
            const HTTP_STATUS_OK = 200;
            const response = await signin(user);
            this.error = response.status != HTTP_STATUS_OK;

            if(!this.error){
                this.$router.replace(this.$route.query.redirect || '/home')
            }
        }
    },
    components: {
        UserForm
    }
}
</script>
