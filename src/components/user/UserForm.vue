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
 @import url("https://fonts.googleapis.com/css?family=Lato");
 @import url("https://fonts.googleapis.com/css?family=Raleway");

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: "Lato";
    border-radius: 4em;

    background-color: #242B3A;
    color: #FFFFFF;

    margin: 0% 41%;
    padding: 3em 0em 2.5em 0em;
}

input {
    border: none;
    font-size: 1.05em;
    border-bottom: 0.05em solid #FFFFFF;
    
    background-color: #242B3A;
    color: #FFFFFF;

    width: 65%;
    margin-top: 1em;
    margin-bottom: 3em;
    padding: 0.3em 1em 0em 1em;
}

label {
    font-size: 1.4em;
    font-weight: bold;
    font-family: "Raleway";
}

button {
    text-align:center;
    font-size: 1.1em;
    font-weight: bold;
    font-family: "Raleway";
    border: 0.08em solid #FFFFFF;
    border-radius: 0.75em;
    

    margin-top: 0.5em;
    padding: 0.75em 1.2em;

    background-color:#242B3A;
    color:#FFFFFF;
}

button:hover {
    border: 0.08em solid #242B3A;
    background-color:#FFFFFF;
    color:#242B3A;

    transition: .2s ease-in-out;
}
</style>

