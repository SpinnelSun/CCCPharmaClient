<template>
    <div>
        <span class="product-order">
            <span> Listar por: </span>
            <select @change="sort" class="form-control" v-model="sortingAttribute">
                <option value="code">Código</option>
                <option value="name">Nome</option>
                <option value="price">Preço</option>
                <option value="producer">Fabricante</option>
                <option value="category">Categoria</option>
            </select>
        </span>
        <div class="products-grid">
            <div class="product-item" v-for="product in products" v-if="product.available" :key="product.code"> 
                <product-detailed-item :product=product></product-detailed-item> 
            </div>
        </div>
    </div>
</template>

<script>
    import ProductDetailedItem from '@/components/product/admin/ProductDetailedItem'
    import { getProducts, getProductsSorted } from '@/services/productService'
    
    export default {
        name: 'ProductDetailedList',
        data() {
            return {
                products : [],
                sortingAttribute: ''
            }
        },
        components: {
            ProductDetailedItem
        },
        async created() {
            const response = await getProducts();
            this.products = response.data.content;
        },
        methods: {
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
