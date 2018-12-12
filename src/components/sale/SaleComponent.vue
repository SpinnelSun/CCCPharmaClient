<template>
    <div id="sale-component">
        <div id="sale-detale">
            Pedido nº: {{sale.id}} <br/>
            Total: {{sale.cost}} 
        </div>
        <div id="product-list-Container">
            <h3 id="product-list-header">
                <span id="item-header">Itens</span>
                <span id="quantity-header">Qtd</span>
                <span id="price-header">Preço</span>
            </h3>
            <ul>
                <!--{{sale}}-->
                <li v-for="soldProduct in sale.soldProducts" :key="soldProduct.id">
                    <span id="product-name">{{soldProduct.product.name}}</span>
                    <span id="product-quantity">{{soldProduct.quantity}}</span>
                    <span id="product-price">{{soldProduct.product.price}}</span>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import { getSaleById } from '@/services/saleService'

export default {
    name: 'SaleComponent',
    data() {
        return {
            sale: Object
        }
    },
    async created() {
        const one = await getSaleById(5);
        console.log(one);
        this.sale = one.data;
    }
}
</script>

<style scoped>

#sale-component{
    font-family: 'sans';
    font-size: 0.875rem;
    font-weight: 400;
    border: 0.1em solid #242B3A;
    padding: 0.3em 0em;   
    align-items: center;
    text-align: center;
    color: #242B3A;
}

#sale-detale{
    margin-top: 5px;
    margin-left: 10px;
}

#product-list-Container{
    display: grid;
    grid-template-rows: min-content 1fr;
    border-bottom: 0.1em solid #242B3A;
    margin: 10px;
}

#product-list-header{
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
    color: white;
    background: black;
    grid-row: 1;
}

li {
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
}

span {
    border: 0.1em solid #242B3A;
}

#sale-detale {
    text-align: left;
}

ul {
    list-style:none;
}

</style>

