<template id = "form-update">
    <div>

        <form v-on:submit.prevent="handleSubmitProduct" class="register-datas">
            <label for="input_code">Codigo</label><br><br>
            <input v-model="product.code" id="input_code" required/> <br>

            <label for="input_category">Categoria</label><br><br>
            <select v-model="product.category">
                <option v-for="category in categories" :value="category" :key="category.name">
                    {{ category.name }}
                </option>
            </select>

            <button>Register</button>

            <!-- <product-form :product=product title="Registrar" v-on:handleSubmitProduct="handleSubmitProduct"> </product-form> -->
        </form>

        {{product}}
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
                product : {
                    name: '',
                    price: '',
                    amount: '',
                    producer: '',
                    category: {},
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
            handleSubmitProduct () {
                console.log(this.product.code);
            }, 
        }
    }

</script>

<style scoped>

.register-datas {
    padding-top: 3cm;
    padding-bottom: 0cm;
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