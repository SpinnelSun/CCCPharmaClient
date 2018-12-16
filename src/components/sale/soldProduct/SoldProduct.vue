<template>
    <div class="sold-product-row">
        <div id="product-name"> {{soldProduct.product.name}} </div>
        <div id="product-quantity"> {{soldProduct.quantity}} </div>
        <div id="product-price"> R$ {{soldProduct.product.price.toFixed(2)}} </div>
    </div>
</template>

<script>
    export default {
        name: 'SoldProduct',
        props: {
        soldProduct: Object
        }
    }
</script>
 
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Lato");

    .sold-product-row {
        display: grid;
        align-items: center;
        justify-content: space-around;
        grid-template-columns: repeat(3, 1fr);

        border: 0.1em solid #242B3A;
        border-top: none; 
        
        font-family: "Lato";
        font-size: 1.1em;
        text-align: center;

        color: #242B3A;

        padding: 0.1em 0em;
        width: 40em;
        height: 2em;
    }
</style>