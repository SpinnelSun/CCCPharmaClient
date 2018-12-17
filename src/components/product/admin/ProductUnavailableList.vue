<template>
    <div>
        <div class="products-grid">
            <div class="product-item" v-for="product in products" v-if="!product.available" :key="product.code"> 
                <product-item :product=product></product-item> 
            </div>
        </div>
    </div>
</template>

<script>
    import ProductItem from '@/components/product/client/ProductItem'
    import { getProducts } from '@/services/productService'
    
    export default {
        name: 'ProductUnavailableList',
        data() {
            return {
                products : []
            }
        },
        components: {
            ProductItem
        },
        async created() {
            const response = await getProducts();
            this.products = response.data.content;
        }
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Raleway");
    @import url("https://fonts.googleapis.com/css?family=Lato");

    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-row-gap: 2em;

        justify-content: space-around;
        background-color:#FFFFFF;
    }

    .product-item {
        display: grid;
        justify-content: center;
        align-content: center;
    }
</style>