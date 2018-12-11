<template id = "list">
    <div id="app" class="columns">
        <div class="column">
            <ul>
                <!-- add v-on para fillProducts -->
                <li id="component"> <product-component v-for="product in products" :key="product.code" v-bind:product="product"> </product-component> </li>
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
                products : [{name: "Camisinha - Sabor Uva", price: 2.75, avaliable: false, producer: "governo", code: "1", amount: 0},
                {  name: "Camisinha - Chocolate",price: 28.95,  avaliable: true, producer: "Juntex", code: "2", amount: "10"},
                { name: "Camisinha básica",price: 7.85, avaliable: true, producer: "Governo", code: "3", amount: "30"}, 
                {name: "Dipirona", price: 4.99,  avaliable: false, producer: "Dipi", code: "4", amount: 0}]
            }
        },
        components: {
            ProductComponent
        },
        methods: {
            async fillProducts(){
                this.products = await getProducts();
            }
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

