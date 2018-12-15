<template>
    <div id="app">
        <nav>
            <component :is="layout"></component>
        </nav>
        <main>
            <router-view/>
        </main> 
    </div>
</template>

<script>
    import AdminNavBar from '@/views/AdminNavBar'
    import ClientNavBar from '@/views/ClientNavBar'
    import CommonNavBar from '@/views/CommonNavBar'

    export default {
        name: 'App',
        computed: {
            layout() {
                if (this.$route.meta.isAdmin) {
                    return `admin-nav-bar`;
                } else if (this.$route.meta.isClient) {
                    return `client-nav-bar`;
                } else {
                    return `common-nav-bar`;
                }
            }
        },
        components:{
            AdminNavBar,
            ClientNavBar,
            CommonNavBar
        }
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Lato");

    #app {
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 1fr 1fr;
        grid-template-rows: repeat(5, 1fr); 

        background-color: #EEEEEE;
        font-family: 'Lato';

        height: 100%;
    }

    nav {
        grid-column: 1;
        grid-row: 1 / 7;

        background-color: #242B3A;
        border-radius: 2em;
        
        margin: 2em 0em 2em 2em;
    }

    main {
        grid-row: 1 / 7;
        grid-column: 2 / 5;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #FFFFFF;
        border: 0.1em solid #242B3A;
        border-radius: 2em;

        margin: 2em 2em;
    }
</style>
