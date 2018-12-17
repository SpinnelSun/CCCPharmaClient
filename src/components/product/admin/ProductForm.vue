<template>
    <div id="form-container">
        <div id="product-form">
            <form v-on:submit.prevent="$emit('handleSubmitProduct', product)">
                <label for="input_name">Nome do Produto: </label>
                <input v-model="product.name" id="input_name" required/>

                <label for="input_price">Preço:</label>
                <input v-model="product.price" id="input_price" required/>

                <label for="input_producer">Fabricante:</label>
                <input v-model="product.producer" id="input_producer" required/>

                <label for="input_amount">Quantidade:</label>
                <input v-model="product.amount" id="input_amount" required/>

                <button>{{title}}</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductForm',
        props: {
            title: String,
            product: Object
        },
        created() {
            this.product.price = this.fixPrice();
        },
        methods: {
            fixPrice() {
                return this.product.price.toFixed(2);
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

        font-family: "Lato";
        font-size: 1.05em;

        background-color: #242B3A;
        color: #FFFFFF;
        
        width: 65%;
        margin-top: 0.5em;
        margin-bottom: 2em;
        padding: 0.5em 1em;
    }

    button {
        align-self: center;
        justify-content: center;

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