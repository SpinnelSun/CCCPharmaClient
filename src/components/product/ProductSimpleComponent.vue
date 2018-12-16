<template>
    <div class="box-view">
        <span class="product-name"> {{product.name}} </span> 
        <span class="product-producer"> {{product.producer}} </span>
        <span class="product-price"> R$ {{product.price.toFixed(2)}} </span>
        <span class="amount-warning" :class="{available: product.available, unavailable: !product.available}">
            Indisponível
        </span>
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
        grid-template-rows: 1fr 1fr 1fr;
        align-items: center;

        border: 0.1em solid #242B3A;
        border-radius: 1.5em; 

        background-color: #242B3A;
        color: #FFFFFF;

        padding: 1em 2em;
        margin: 0.5em;
        width: 15em;
        height: 12em;
    }

    .box-view:hover {
        border: 0.1em solid #242B3A;
        background-color: #FFFFFF;
        color: #242B3A;

        transition: .15s ease-in-out;
    }
    
    .product-name {
        justify-self: left;

        font-family: "Lato";
        font-weight: bold;
        font-size: 1.5em;
    }

    .product-producer {
        justify-self: left;
        align-self: flex-start;

        font-family: "Lato";
    }

    .product-price {
        justify-self: right;
        align-self: flex-start;

        font-family: "Lato";
        font-weight: bold;
        font-size: 1.5em;
    }

    .amount-warning {
        justify-self: center;
        align-self: flex-end;

        border-radius: 0.5em;

        font-family: "Raleway";
        font-size: 1.1em;

        padding: 0.5em;
        margin: 1em 0em 0.5em 0em;
    }

    .available {
        background-color: #242B3A;
        color: #242B3A;
    }

    .box-view:hover > .available {
        background-color: #FFFFFF;
        color: #FFFFFF;

        transition: .15s ease-in-out;
    }

    .unavailable {
        border: 0.1em solid #242B3A;
        background-color: #FFFFFF;
        color: #242B3A;
    }

    .box-view:hover > .unavailable {
        background-color: #FFFFFF;
        color: #242B3A;

        transition: .15s ease-in-out;
    }
</style>

