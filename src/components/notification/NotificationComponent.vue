<template>
    <div class="notification">
        <router-link class="notification-text" target="_blank" :to="`/products/${notification.code}`">
            {{ notification.name }}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'NotificationComponent',
        props: {
            notification: Object
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Lato");

    .notification {
        display: flex;
        flex-flow: row wrap;
        
        border-left: 5px solid #242B3A;
        border-radius: 0.5em;
        
        overflow: hidden;
        max-width: 600px;

        background-color: #FFFFFF;
        
        box-shadow: 0 5px 25px 0 rgba(0,0,0,.15);
        margin: 1em auto;
    }

    .notification-text {
        font-family: "Raleway";
        font-size: 0.9em;
        
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
        color: #666666;
        
        padding: 1em;
        width: 80%;
    }

    .notification:hover, .notification-text:hover {
        background-color: #242B3A;
        color: #FFFFFF;
    }
</style>