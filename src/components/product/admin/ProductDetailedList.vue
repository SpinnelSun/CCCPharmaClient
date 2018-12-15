<template>
    <div>
        <div class="products-grid">
            <div>
                <span> Listar por: </span>
                <select @change="sort" class="form-control" v-model="sortingAttribute">
                    <option value="code">Código</option>
                    <option value="name">Nome</option>
                    <option value="price">Preço</option>
                    <option value="producer">Fabricante</option>
                    <option value="category">Categoria</option>
                </select>
            </div>
            <div class="product-item" v-for="product in products" :key="product.code"> 
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

