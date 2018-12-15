<template>
    <div>
        <div class="products-grid">
            <div class="product-item" v-for="product in products" :key="product.code"> 
                <product-detailed-item :product=product></product-detailed-item> 
            </div>
        </div>
    </div>
</template>

<script>
    import ProductDetailedItem from '@/components/product/admin/ProductDetailedItem'
    import { getProducts } from '@/services/productService'
    
    export default {
        name: 'ProductDetailedList',
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

