<template>
    <form v-on:submit.prevent="$emit('handleSubmit', user)">
        <label for="input_email"> Email</label>
        <input v-model="user.email" id="input_email" required/>
        <label for="input_password">Password</label>
        <input v-model="user.password" type="password" id="input_password" required/>
        <button>{{ title }}</button>
    </form>
</template>

<script>
export default {
    name: 'UserForm',
    props: {
        title: String
    },
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
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

form {
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
    border-bottom: 1px solid #000000;
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

