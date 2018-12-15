<template>
    <div class="box-view">
        <span class="product-name"> {{product.name}} </span> 
        <span class="product-producer"> {{product.producer}} </span>
        <span class="product-price" v-if="product.available"> R$ {{product.price.toFixed(2)}} </span>
        <span class="amount-warning" v-if="!product.available" > Indisponível </span>
    </div>
</template>

<script>
export default {
    name: 'ProductSimpleComponent',
    props: {
      product: Object
    }
}
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Raleway");
    @import url("https://fonts.googleapis.com/css?family=Lato");

    .box-view {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        align-items: center;

        border: 0.1em solid #242B3A;
        border-radius: 1.5em; 

        background-color: #242B3A;
        color: #FFFFFF;

        padding: 1em 2em;
        margin: 0.5em;
        width: 15em;
        height: 10em;
    }

    .box-view:hover {
        border: 0.1em solid #242B3A;
        background-color: #FFFFFF;
        color: #242B3A;

        transition: .15s ease-in-out;
    }
    
    .product-name {
        align-self: center;

        font-family: "Lato";
        font-weight: bold;
        font-size: 1.5em;
    }

    .product-producer {
        align-self: flex-start;

        font-family: "Lato";
    }

    .product-price {
        align-self: center;

        font-family: "Lato";
        font-weight: bold;
        font-size: 1.5em;
    }

    .amount-warning {
        justify-self: center;
        align-self: center;

        border-radius: 0.5em;

        font-family: "Raleway";
        font-size: 1.1em;

        background-color: #FFFFFF;
        color: #242B3A;

        padding: 0.5em;
    }

    .box-view:hover > .amount-warning {
        background-color: #242B3A;
        color: #FFFFFF;

        transition: .15s ease-in-out;
    }
</style>

