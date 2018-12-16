<template>
    <div id="register-container">
        <div class="double-container">
            <label for="input-product">Produto:</label>
            <select v-model="soldProduct.product">
                <option v-for="product in products" :value="product" :key="product.code">
                    {{ `${product.code} - ${product.name} - R$ ${product.price.toFixed(2)}` }}
                </option>
            </select>
        </div>

        <div class="double-container">
            <label for="input-quantity">Quantidade:</label>
            <input v-model="soldProduct.quantity" id="input-quantity" required/>
        </div>

        <div class="buttons-container">
            <button @click="addShoppingCart">Adicionar Produto</button>
            <button @click="registerSale">Registrar Venda</button>
        </div>
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
    @import url("https://fonts.googleapis.com/css?family=Raleway");
    @import url("https://fonts.googleapis.com/css?family=Lato");

    #register-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        border: 0.2em solid #242B3A;
        border-radius: 2em;

        padding: 2em;
        width: 50em;
    }

    .double-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-around;
        align-items: center;

        padding: 0.5em;
        margin: 0.2em 0em;
        width: 40em;
    }

    label {
        font-family: "Raleway";
        font-weight: bold;
        font-size: 1.2em;
    }

    select {
        font-family: "Lato";
        font-size: 1em;

        background: #FFFFFF;
        color: #242B3A;

        padding: 0em 0.5em;
        width: 30em;
        height: 2em;
    }

    input {
        justify-self: left;
        font-family: "Lato";
        font-size: 1em;

        background: #FFFFFF;
        color: #242B3A;

        padding: 0em 0.5em;
        width: 28.8em;
        height: 1.5em;
    }

    .buttons-container {
        display: flex;
        align-items: center;
        justify-content: space-around;

        margin-top: 1.5em;
        width: 40em;
    }

    button {
        border: 0.1em solid #242B3A;
        border-radius: 0.5em;

        text-decoration-line: none;
        font-family: "Raleway";
        font-weight: bold;

        background-color: #FFFFFF;
        color: #242B3A;
        
        margin-bottom: 1em;
        padding: 0.5em 2em;
    }

    button:hover {
        background-color: #242B3A;
        color: #FFFFFF;

        transition: .2s ease-in-out;
    }
</style>