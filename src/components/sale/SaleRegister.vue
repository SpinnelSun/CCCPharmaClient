<template>
        <div>
            <select v-model="soldProduct">
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
    import SaleRegisterItem from '@/components/sale/SaleRegisterItem'
    export default {
        name: 'SaleRegister',
        data() {
            return {
                sale: {
                    soldProducts: []
                },
                products: [],
                soldProduct: {}
            }
        },
        async created() {
            const response = await getProducts();
            this.products = response.data.content;
        },
        components: {
            SaleRegisterItem
        },
        methods:{
            addShoppingCart() {
                this.sale.soldProducts.push(this.soldProduct);
                this.soldProduct = {};
            },
            async registerSale() {
                console.log(this.sale);
                const response = await save(this.sale);
                console.log(response.data);
            }
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Lato");
    @import url("https://fonts.googleapis.com/css?family=Raleway");
 
    #form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #form-header {
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 4em 4em 0em 0em;

        background-color: #242B3A;
        color: #FFFFFF;

        padding: 3em 0em 0em 0em;
        width: 30em;
    }

    #logo {
        border: 0.1em solid #FFFFFF;
        border-radius: 1em;

        font-family: "Raleway";
        font-weight: bolder;
        font-size: 3.6em;

        padding: 0.1em 0.3em;
        margin-bottom: 0.2em;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        border-radius: 0em 0em 4em 4em;
        
        font-family: "Lato";
        
        background-color: #242B3A;
        color: #FFFFFF;
        
        padding: 2em 0em 1em 0em;
        width: 30em;
    }

    label {
        font-weight: bold;
        font-family: "Raleway";
        font-size: 1.5em;
    }

    input {
        border: none;
        border-bottom: 0.05em solid #FFFFFF;

        font-family: "Lato";
        font-size: 1.1em;

        background-color: #242B3A;
        color: #FFFFFF;
        
        width: 65%;
        margin-top: 0.5em;
        margin-bottom: 2em;
        padding: 0.5em 1em;
    }

    button {
        border: 0.08em solid #FFFFFF;
        border-radius: 0.75em;

        text-align:center;
        font-weight: bold;
        font-family: "Raleway";
        font-size: 1.2em;

        background-color:#242B3A;
        color:#FFFFFF;
        
        margin: 0.5em 0em;
        padding: 0.5em 1.0em;
    }

    button:hover {
        border: 0.08em solid #242B3A;
        background-color:#FFFFFF;
        color:#242B3A;
        
        transition: .2s ease-in-out;
    }
</style>