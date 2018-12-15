<template>
    <div>
        <div class="products-grid">
            <div class="product-item" v-for="product in products" :key="product.code"> 
                <product-simple-component v-if="product.available === false"  :product=product></product-simple-component> 
            </div>
        </div>
    </div>
</template>

<script>
    import ProductSimpleComponent from '@/components/product/clientLists/ProductSimpleComponent'
    import { getProducts } from '@/services/productService'
    
    export default {
        name: 'ProductUnavailableList',
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
        }
    }
</script>

<style>
    .products-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        justify-content: space-around;
        
        background-color:#FFFFFF;
    }

    .product-item {
        display: grid;
        justify-content: center;
        align-content: center;
    }
</style>

