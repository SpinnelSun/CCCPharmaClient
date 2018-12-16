<template>
    <div>
        <user-form title="Entrar" v-on:handleSubmit="handleSubmit"></user-form>
    </div>
</template>

<script>
import { signin, logout } from '@/services/authService'
import UserForm from '@/components/user/UserForm'

export default {
    name: 'Signin',
    data() {
        return {
            isError: false
        }
    },
    methods: {
        async handleSubmit (user) {
            const HTTP_STATUS_OK = 200;
            const response = await signin(user);
            this.isError = response.status != HTTP_STATUS_OK;

            if (this.isError) {
                alert("Login e/ou senha incorretos!");
            } else {
                const role = response.data.roles[0].name;
                let home = '/';
                if(role == "ROLE_ADMIN"){
                    home = '/notifications'
                }
                this.$router.push(home);
            }
        }
    },
    components: {
        UserForm
    }
}
</script>