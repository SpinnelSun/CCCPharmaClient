<template>
    <div>
        <ul v-for="notification in notifications" :key="notification.code">
        <li><notification-component :product="notification"></notification-component></li>
        </ul>
    </div>
</template>
<script>
import { get } from '@/services/notificationService';
import NotificationComponent from '@/components/notification/NotificationComponent';

export default {
    name: 'Notificationlist',
    data () {
        return {
            notifications: []
        }
    },
    async created() {
        const response = await get();
        this.notifications = response.data;
    },
    components : {
        NotificationComponent
    }
}
</script>
<style>
    ul {
        list-style: none;
    }

</style>