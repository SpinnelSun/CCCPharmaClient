<template id = "list">
    <div id="app" class="columns">
        <div class="column">
            <ul>
                <!-- add v-on para fillProducts -->
                <li id="component"> <product-component v-for="product in products" :key="product.code" > </product-component> </li>
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
            const content = await getProducts();
            this.products = content.data.content;
        }
    }

</script>

<style>
    .column ul{
        padding:0px;
        margin:0px;
        background-color:#EDEDED;
        list-style:none;
    }

    #component {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    
</style>

