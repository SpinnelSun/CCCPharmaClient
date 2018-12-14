<template>
    <div id="product-form">
        <form v-on:submit.prevent="$emit('handleSubmitProduct', product)">
            <label for="input_name">Nome do produto: </label>
            <input :value="product.name" id="input_name" required/>

            <label for="input_price">Preço</label>
            <input :value="product.price" id="input_price" required/>

            <label for="input_producer">Fabricante</label>
            <input :value="product.producer" id="input_producer" required/>

            <label for="input_amount">Quantidade</label>
            <input :value="product.amount" id="input_amount" required/>

            <button>{{title}}</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ProductForm',
    props: {
        title: String,
        product: Object
    }
    
}
</script>
<style scoped>
body {
    font-family: 'sans';
    font-size: 0.875rem;
    font-weight: 400;
    margin: 0;
}

label{
    text-align: left;
    padding: 18px;

}

form {
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

