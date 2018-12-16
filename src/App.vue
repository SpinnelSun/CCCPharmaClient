<template>
    <div id="app">
        <nav class="shadowed">
            <component :is="layout"></component>
        </nav>
        <main class="shadowed">
            <v-bar wrapper="wrapper">
                <router-view/>
            </v-bar>
        </main> 
    </div>
</template>

<script>
    import VBar from 'v-bar'
    import AdminNavBar from '@/views/AdminNavBar'
    import ClientNavBar from '@/views/ClientNavBar'
    import CommonNavBar from '@/views/CommonNavBar'

    export default {
        name: 'App',
        computed: {
            layout() {
                if (this.$route.meta.isClient && localStorage.getItem('authority') == "ROLE_CLIENT") {
                    return `client-nav-bar`;
                }
                else if (this.$route.meta.isAdmin) {
                    return `admin-nav-bar`;
                } else {
                    return `common-nav-bar`;
                }
            }
        },
        components: {
            VBar,
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

        background-color: #FCFCFC;
        border: 0.1em solid #242B3A;
        border-radius: 2em;

        padding: 1.5em 0.5em 1.5em 1em;
        margin: 2em 2em;
    }

    .shadowed{
        -webkit-box-shadow: 0 2em 5em #777777;
        -moz-box-shadow: 0 2em 5em #777777;
        box-shadow: 0 2em 5em #777777;
    }

    .wrapper {
        height: 100%;
        width: 100%;
    }

    .bar--wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
