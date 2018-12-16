<template>
    <div class="box-view">
        <span class="product-name"> {{product.name}} </span> 
        <span class="product-producer"> {{product.producer}} </span>
        <span class="product-price"> R$ {{product.price.toFixed(2)}} </span>
        <span class="pharma-infos"><strong>Código:</strong> {{product.code}}</span>
        <span class="pharma-infos"><strong>Quantidade:</strong> {{product.amount}}</span>
        <span class="pharma-infos"><strong>Categoria:</strong> {{product.category.name}}</span>
        <router-link id="edit-product" target="_blank" :to="`/products/${product.code}`">Editar</router-link>
    </div>
</template>

<script>
    export default {
        name: 'ProductDetailedItem',
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
        height: 60%;
    }

    .box-view:hover {
        border: 0.1em solid #242B3A;
        background-color: #FFFFFF;
        color: #242B3A;

        transition: .15s ease-in-out;
    }
    
    .product-name {
        justify-self: center;

        font-family: "Lato";
        font-weight: bold;
        font-size: 1.5em;
    }

    .product-producer {
        justify-self: center;
        align-self: flex-start;

        font-family: "Lato";
    }

    .product-price {
        justify-self: center;
        align-self: flex-start;

        font-family: "Lato";
        font-weight: bold;
        font-size: 1.5em;

        margin-bottom: 0.5em;
    }

    .pharma-infos {
        justify-self: center;
        align-self: center;

        letter-spacing: 0.02em;
        font-family: "Lato";
    }

    #edit-product {
        justify-self: center;
        align-self: flex-start;

        border: 0.1em solid #242B3A;
        border-radius: 0.5em;

        text-decoration-line: none;
        font-family: "Raleway";
        font-weight: bold;
        font-size: 0.8em;

        background-color: #FFFFFF;
        color: #242B3A;

        margin: 1em 0em 0em 0em;
        padding: 0.5em 1em;
    }

    #edit-product:hover {
        background-color: #242B3A;
        color: #FFFFFF;
    }
</style>

