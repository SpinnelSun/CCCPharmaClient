<template>
    <div id="form-container">
        <div id="product-register-form">
            <form>
                <label for="input_code">Código do Produto:</label>
                <input v-model="product.code" id="input_code" required/>

                <label for="input_category">Categoria:</label>
                <select v-model="product.category">
                    <option v-for="category in categories" :value="category" :key="category.name">
                        {{ category.name }}
                    </option>
                </select>

                <product-form :product=product title="Registrar Produto" v-on:handleSubmitProduct="handleSubmitProduct"></product-form>
            </form>

        </div>
    </div>
</template>

<script>
    import ProductForm from '@/components/product/ProductForm'

    import { save } from '@/services/productService'
    import { get } from '@/services/categoryService';

    export default {
        name: 'ProductRegister',
        data() {
            return {
                product : {
                    name: '',
                    price: '',
                    amount: '',
                    producer: '',
                    category: {},
                    code: ''
                },
                categories: [],
                isError: false,
                isSucess: false
            }
        },
        async created(){
            const response = await get();
            this.categories = response.data;
        },
        components: {
            ProductForm
        },
        methods: {
            async handleSubmitProduct (product) {
                const HTTP_STATUS_CREATED = 201;
                const response = await save(product);
                console.log(response);
                this.isError = response.status != HTTP_STATUS_CREATED;
                this.isSucess = !this.isError; 
                this.alertUpdateSituation();
            }, 

            alertUpdateSituation (){
                if(this.isError){
                    alert("Impossível registrar o produto. Informações inválidas!");
                }else if(this.isSucess){
                    alert("Produto registrado com sucesso!");
                }
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

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        border-radius: 4em;
        
        font-family: "Lato";
        
        background-color: #242B3A;
        color: #FFFFFF;
        
        padding: 2em 0em 1em 0em;
        width: 30em;
    }

    label {
        font-weight: bold;
        font-family: "Raleway";
        font-size: 1.05em;
    }

    input {
        border: none;
        border-bottom: 0.05em solid #FFFFFF;

        font-size: 1.05em;

        background-color: #242B3A;
        color: #FFFFFF;
        
        width: 65%;
        margin-top: 0.5em;
        margin-bottom: 2em;
        padding: 0.5em 1em;
    }

    select {
        border-bottom: 0.05em solid #FFFFFF;

        font-family: "Lato";
        font-size: 1em;
        
        background-color: #242B3A;
        color: #FFFFFF;
        
        width: 70%;
        height: 2em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        padding: 0em 1em;
    }
</style>