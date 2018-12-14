<template id = "form-update">
    <div>
        <label for="input_code">Codigo</label>
        <input :value="product.code" id="input_code" required/>

        <label for="input_category">Categoria</label>
        <input :value="product.category" id="input_category" required/>

        <product-form :product=product title="Registrar" :key="code" v-on:handleSubmitProduct="handleSubmitProduct"> </product-form>
        

        <span :class="{error: isError}" v-if="isError">
            <i class="fa fa-warning"></i>
            Houve um erro na atualização de dados. Reveja suas informações.
        </span>
        <span :class="{sucess: isSucess}" v-if="isSucess">
            <i class="fa fa-check"></i>
            Produto atualizado com sucesso.
        </span>
    </div>
</template>


<script>
    import { save } from '@/services/productService'
    import ProductForm from '@/components/product/ProductForm'

    export default {
        name: 'ProductList',

        data() {
            return {
                code: this.$route.params.code,
                product : {name: '',
                            price: '',
                            amount: '',
                            producer: '',
                            category: '',
                            code: ''

                },
                isError: false,
                isSucess: false
            }
        },
        components: {
            ProductForm
        },
        methods: {
            async handleSubmitProduct (product) {
                const HTTP_STATUS_CREATED = 201;
                const response = await save(product);
                console.log(response.status);
                this.isError = response.status != HTTP_STATUS_CREATED;
                this.isSucess = !this.isError;
            }, 
        }
    }

</script>

<style scoped>

label{
    text-align: left;
    padding: 18px;

}

form {
    margin: 10%;
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    
}

input {
    width: 25%;
    height: 50%;
    border-left: none;
    border-right: none;
    border-top: none;
    font-size: 1.1em;
    border-bottom: 1px solid #ac7c4f;
    margin-bottom: 10px;
    font-size: 15px;
    color: rgb(182, 182, 182);
}

input:hover{
    border-bottom: 1px solid #000000;
}

button {
  background-color:#000000;
  color:white;
  font-size: 1.1em;
  border: 0;
  cursor:pointer;
  padding: 1em;
  text-align:center;
  transition: .2s ease-in-out;
}



</style>