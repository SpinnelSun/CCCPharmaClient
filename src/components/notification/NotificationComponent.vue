<template>
    <div id="notification">
        <strong id="notification-name">{{ notification.name }}</strong>
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

    #notification {
        margin-right: auto;
        margin-left: auto;
        display: flex;
        overflow: hidden;
        flex-flow: row wrap;
        max-width: 600px;
        background-color: #fff;
        border-left: 5px solid #242B3A;
        border-radius: 4px;
        box-shadow: 0 5px 25px 0 rgba(0,0,0,.15);

    }

    #notification-name {
        padding: 18px;
        width: calc(100% - 50px);
        font: 12px Arial, sans-serif;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
        color: #666;
    }
</style>