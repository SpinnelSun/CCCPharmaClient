<template>
    <div>
        <span class="product-order">
            <span> Listar por: </span>
            <select @change="sort" class="form-control" v-model="sortingAttribute">
                <option value="name">Nome</option>
                <option value="price">Preço</option>
                <option value="category">Categoria</option>
            </select>
        </span>
        <div class="products-grid">
            <div class="product-item" v-for="product in products" :key="product.code"> 
                <product-item :product=product></product-item> 
            </div>
        </div>
    </div>
</template>

<script>
    import ProductItem from '@/components/product/client/ProductItem'
    import { getProducts, getProductsSorted } from '@/services/productService'
    
    export default {
        name: 'ProductList',
        data() {
            return {
                products : [],
                sortingAttribute: ''
            }
        },
        components: {
            ProductItem
        },
        async created() {
            const response = await getProducts();
            this.products = response.data.content;
        },
        
        methods:{
            async sort () {
                const response = await getProductsSorted(this.sortingAttribute);
                this.products = response.data.content;
            }
        }
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Raleway");
    @import url("https://fonts.googleapis.com/css?family=Lato");

    .product-order {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        border-radius: 1em; 

        font-family: "Raleway";
        font-weight: bold;
        font-size: 1.1em;

        background-color: #242B3A;
        color: #FFFFFF;

        padding: 1em 2em;
        margin: 1em 5em;
    }

    select {
        border: 0.1em solid #242B3A;

        font-family: "Lato";
        font-size: 1em;

        background-color: #FFFFFF;
        color: #242B3A;

        padding: 0.2em 0.5em;
        margin-left: 1em;
    }

    button {
        justify-self: center;
        align-self: flex-start;

        border: 0.1em solid #242B3A;
        border-radius: 0.5em;

        text-decoration-line: none;
        font-family: "Raleway";
        font-weight: bold;
        font-size: 0.8em;

        background-color: #FFFFFF;
        color: #242B3A;
    }

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

