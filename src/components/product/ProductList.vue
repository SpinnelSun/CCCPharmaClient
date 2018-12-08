<template id = "list">
    <div id="app" class="columns">
        <div class="column">
            <ul>
                <li id="component"> <product-component v-for="product in products" v-bind:product="product"> </product-component> </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ProductComponent from '@/components/product/ProductComponent'
    

    export default {
        name: 'ProductList',
        data() {
            return {
                products : [{name: "camisinha", price: 2.75},{  name: "camisinha",price: 2.85},{ name: "camisinha",price: 2.85}]
            }
        },
        components: {
            ProductComponent
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

