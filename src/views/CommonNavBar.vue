<template>
    <nav-bar>
        <header id="logo">CCCPharma</header>
        
        <router-link class="nav-link" to="/products-client">Home</router-link>
        <router-link class="nav-link" to="/">Login</router-link>
        <router-link class="nav-link" to="/signup">Cadastre-se</router-link>
      </nav-bar>
</template>

<script>
    import NavBar from '@/views/NavBar'
    export default {
        name: 'CommonNavBar',
        components: {
            NavBar
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
</style>
