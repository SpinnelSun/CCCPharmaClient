<template>
    <div>
        <user-form title="Registrar" v-on:handleSubmit="handleSubmit"></user-form>
    </div>
</template>

<script>
    import { signup } from '@/services/userService'
    import UserForm from '@/components/user/UserForm'

    export default {
        name: 'UserSignup',
        data() {
            return {
                isError: false,
                isSucess: false
            }
        },
        methods: {
            async handleSubmit (user) {
                const HTTP_STATUS_CREATED = 201;
                const response = await signup(user);
                this.isError = (response.status != HTTP_STATUS_CREATED);
                this.isSucess = !this.isError;

                if (this.isError) {
                    alert("Impossível realizar seu cadastro. Verifique os dados informados!");
                } else {
                    alert("Cadastro realizado com sucesso!");
                    this.$router.push('/');
                }
            }
        },
        components: {
            UserForm
        }
    }
</script>