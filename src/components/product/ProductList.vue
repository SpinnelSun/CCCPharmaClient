<template id = "list">
    <div id="app" class="columns">
        <div class="column">
            <ul>
                <li id="component"> <product-component v-for="product in products" :key="product.id" v-bind:product="product"> </product-component> </li>
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
                products : [{name: "camisinha", price: 2.75, id:'1', avaliable: false},
                {  name: "camisinha",price: 2.85, id:'2', avaliable: true},
                { name: "camisinha",price: 2.85, id:'3', avaliable: true}, 
                {name: "camisinha", price: 2.75, id:'4', avaliable: false}]
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

