<template>
    <div>
        <user-form title="Sign up" v-on:handleSubmit="handleSubmit">
        </user-form>
        <span :class="{error: isError}" v-if="isError">
            <i class="fa fa-warning"></i>
            Houve um erro no cadastro de dados. Confira suas informações!
        </span>
        <span :class="{sucess: isSucess}" v-if="isSucess">
            <i class="fa fa-check"></i>
            Usuário cadastrado com sucesso!
        </span>
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
            this.isError = response.status != HTTP_STATUS_CREATED;
            this.isSucess = !this.isError;
            },
        },
        components: {
            UserForm
        }
    }
</script>