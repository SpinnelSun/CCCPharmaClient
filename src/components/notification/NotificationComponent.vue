<template>
    <div id="notification">
        <strong id="product-name">{{ product.name }}</strong>
    </div>
</template>
<script>
export default {
    name: 'NotificationComponent',
    props: {
        product: Object
    }
}
</script>
<style>

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

    #product-number {
        margin: 0;
        width: 50px;
        background-color: hsl(0, 0%, 96.5%);
        border: 0;
        cursor: pointer;
        transition: .3s ease-in-out;
    }

    #product-name {
        padding: 18px;
        width: calc(100% - 50px);
        font: 12px Arial, sans-serif;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
        color: #666;
    }

</style>