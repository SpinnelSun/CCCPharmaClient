<template>
    <div>
        <div class="product-order">
            <span> Listar por: </span>
            <button @click="sortProducts('name')">NOME</button>
            <button @click="sortProducts('price')">PREÇO</button>
            <button @click="sortProducts('producer')">FABRICANTE</button>
        </div>
        <div class="products-grid">
            <div class="product-item" v-for="product in products" :key="product.code"> 
                <product-simple-component :product=product></product-simple-component> 
            </div>
        </div>
    </div>
</template>

<script>
    import ProductSimpleComponent from '@/components/product/client/ProductSimpleComponent'
    import { getProducts } from '@/services/productService'
    
    export default {
        name: 'ProductSimpleList',
        data() {
            return {
                products : []
            }
        },
        components: {
            ProductSimpleComponent
        },
        async created() {
            const response = await getProducts();
            console.log(response.data.content);
            this.products = response.data.content;
        },
        
        methods:{
            sortProducts: function(key) {
                
                this.products.sort(function(a, b) {
                    return a[key].localeCompare(b[key]);
                });
            }
        }
    }
</script>

<style>
    .product-order{
        align-items: center;

        border: 0.1em solid #242B3A;
        border-radius: 1.5em; 

        background-color: #242B3A;
        color: #FFFFFF;

        grid-column-start: 2;

        padding: 1em 2em;
        margin: 0.5em;
        width: 20em;
        height: 1em;
    }

    button{
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
    }

    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        justify-content: space-around;
        
        background-color:#FFFFFF;
    }

    .product-item {
        display: grid;
        justify-content: center;
        align-content: center;
    }
</style>

