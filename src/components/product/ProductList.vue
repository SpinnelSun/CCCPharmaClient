<template>
    <div>
        <div class="products-grid">
            <div class="product-item" v-for="product in products" :key="product.code"> 
                <product-component :product=product></product-component> 
            </div>
        </div>
    </div>
</template>

<script>
    import ProductComponent from '@/components/product/ProductComponent'
    import { getProducts } from '@/services/productService'
    
    export default {
        name: 'ProductList',
        data() {
            return {
                products : []
            }
        },
        components: {
            ProductComponent
        },
        async created() {
            const response = await getProducts();
            this.products = response.data.content;
        }
    }
</script>

<style>
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

