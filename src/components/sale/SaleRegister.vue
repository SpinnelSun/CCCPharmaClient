<template>
        <div>
            <select v-model="soldProduct.product">
                <option v-for="product in products" :value="product" :key="product.code">
                    {{ `${product.code} - ${product.name} - R$ ${product.price.toFixed(2)}` }}
                </option>
            </select>

            <label for="input_quantity">Quantity</label>
            <input v-model="soldProduct.quantity" id="input_quantity" required/>

            <button @click="addShoppingCart">Add to shopping cart</button>

            <button @click="registerSale">Register Sale</button>
        </div>
</template>

<script>
    import { getProducts } from '@/services/productService'
    import { save } from '@/services/saleService'
    import { findByEmail } from '@/services/userService'
    export default {
        name: 'SaleRegister',
        data() {
            return {
                sale: {
                    soldProducts: []
                },
                products: [],
                soldProduct: {
                    product: {},
                    quantity: 0
                }
            }
        },
        async created() {
            const response = await getProducts();
            this.products = response.data.content;
        },
        methods:{
            addShoppingCart() {
                this.sale.soldProducts.push(this.soldProduct);
                this.soldProduct = {};
            },
            async registerSale() {
                const user = await findByEmail('client@gmail.com');
                this.sale.user = user.data;

                const response = await save(this.sale);
                console.log(response.data);
            }
        }
    }
</script>

<style scoped>
</style>