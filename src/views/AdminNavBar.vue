<template>
    <nav-bar>
        <header id="logo">CCCPharma</header>
        
        <router-link class="nav-link" to="/notifications">Home</router-link>
        <router-link class="nav-link" to="/products">Listar Produtos</router-link>
        <router-link class="nav-link" to="/products-register">Cadastrar Produtos</router-link>
        <router-link class="nav-link" to="/products-unavailable">Fora de Estoque</router-link>
        <router-link class="nav-link" to="/categories">Descontos</router-link>
        <router-link class="nav-link" to="/sales">Vendas</router-link>
        
        
        <button @click="quit">Logout</button>
    </nav-bar>
</template>

<script>
    import NavBar from '@/views/NavBar'
    import { logout } from '@/services/authService'
    
    export default {
        name: 'AdminNavBar',
        components: {
            NavBar
        },
        methods: {
            quit() {
                logout();
                this.$router.push('/signin');
          }
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Raleway");
    .nav-link {
        border-bottom: 0.05em solid #FFFFFF;
        font-family: "Raleway";
        font-weight: bold;
        font-size: 1.2em;
        
        margin: 0.8em 0em 0em 0em;
        padding: 0.5em;
    }
    .nav-link:hover {
        border-bottom: 0.1em solid #FFFFFF;
    }
    #logo {
        border: 0.02em solid #242B3A;
        border-radius: 0.5em;
        font-family: "Raleway";
        text-align: center;
        font-weight: bold;
        font-size: 2em;
        color: #FFFFFF;
        padding: 0.1em 0.1em;
    }
    button {
        justify-self: center;
        border: 0.08em solid #FFFFFF;
        border-radius: 0.8em;
        font-family: "Raleway";
        text-align: center;
        font-size: 1.1em;
        background-color: #242B3A;
        color: #FFFFFF;
        padding: 0.5em 1.5em;
        margin: 2.5em;
    }
    button:hover {
        background-color:#FFFFFF;
        font-weight: bold;
        color:#242B3A;
        transition: .2s ease-in-out;
    }
</style>