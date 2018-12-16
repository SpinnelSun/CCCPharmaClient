<template>
    <div>
        <header>Produtos com Estoque Baixo</header>
        <div v-for="notification in notifications" :key="notification.code">
            <span>
                <notification-component :notification="notification"></notification-component>
            </span>
        </div>
    </div>
</template>

<script>
    import { get } from '@/services/notificationService';
    import NotificationComponent from '@/components/notification/NotificationComponent';
    export default {
        name: 'NotificationList',
        data () {
            return {
                notifications: []
            }
        },
        async created() {
            const response = await get();
            console.log(response);
            this.notifications = response.data;
        },
        components: {
            NotificationComponent
        }
    }
</script>

<style scoped>
    header {
        font-family: "Raleway";
        text-align: center;
        font-size: 2em;

        color: #242B3A;
        
        margin-bottom: 1em;
    }
</style>
