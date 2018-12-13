<template id = "list">
    <div id="app" class="columns">
        <div class="column">
            <ul>
                <li id="component" v-for="product in products" :key="product.code"> 
                    <product-component :product=product > </product-component> 
                </li>
            </ul>
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
            console.log(response.data.content);
            this.products = response.data.content;
        }
    }

</script>

<style>
    .column ul{
        padding:0px;
        margin:0px;
        background-color:#EDEDED;
        list-style:none;
         display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    
</style>

