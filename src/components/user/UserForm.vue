<template>
    <div id="form-container">
        <div id="form-header">
            <span id="logo">CCCPharma</span>
        </div>
        <form v-on:submit.prevent="$emit('handleSubmit', user)">
            <label for="input_email"> Email</label>
            <input v-model="user.email" id="input_email" required/>
            <label for="input_password">Password</label>
            <input v-model="user.password" type="password" id="input_password" required/>
            <button>{{ title }}</button>
        </form>
    </div>
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
 
    #form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #form-header {
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 4em 4em 0em 0em;

        background-color: #242B3A;
        color: #FFFFFF;

        padding: 3em 0em 0em 0em;
        width: 30em;
    }

    #logo {
        border: 0.1em solid #FFFFFF;
        border-radius: 1em;

        font-family: "Raleway";
        font-weight: bolder;
        font-size: 3.6em;

        padding: 0.1em 0.3em;
        margin-bottom: 0.2em;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        border-radius: 0em 0em 4em 4em;
        
        font-family: "Lato";
        
        background-color: #242B3A;
        color: #FFFFFF;
        
        padding: 2em 0em 1em 0em;
        width: 30em;
    }

    label {
        font-weight: bold;
        font-family: "Raleway";
        font-size: 1.5em;
    }

    input {
        border: none;
        border-bottom: 0.05em solid #FFFFFF;

        font-family: "Lato";
        font-size: 1.1em;

        background-color: #242B3A;
        color: #FFFFFF;
        
        width: 65%;
        margin-top: 0.5em;
        margin-bottom: 2em;
        padding: 0.5em 1em;
    }

    button {
        align-self: center;
        justify-self: center;

        border: 0.08em solid #FFFFFF;
        border-radius: 0.75em;

        text-align:center;
        font-weight: bold;
        font-family: "Raleway";
        font-size: 1.2em;

        background-color:#242B3A;
        color:#FFFFFF;
        
        margin: 0.5em 0em;
        padding: 0.5em 1.0em;
    }

    button:hover {
        border: 0.08em solid #242B3A;
        background-color:#FFFFFF;
        color:#242B3A;
        
        transition: .2s ease-in-out;
    }
</style>