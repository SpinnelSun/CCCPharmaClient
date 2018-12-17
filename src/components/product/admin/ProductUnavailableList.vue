<template>
    <div>
        <div class="products-grid">
            <div class="product-item" v-for="product in products" v-if="!product.available" :key="product.code"> 
                <product-detailed-item :product=product></product-detailed-item> 
            </div>
        </div>
    </div>
</template>

<script>
    import ProductDetailedItem from '@/components/product/admin/ProductDetailedItem'
    import { getProducts } from '@/services/productService'
    
    export default {
        name: 'ProductUnavailableList',
        data() {
            return {
                products : []
            }
        },
        components: {
            ProductDetailedItem
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
        grid-template-rows: repeat(8, 1fr);
        justify-content: space-around;
        
        background-color:#FFFFFF;
    }

    .product-item {
        display: grid;
        justify-content: center;
        align-content: center;
    }
</style>