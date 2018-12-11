<template>
    <div id="sale-component">
        Pedido nº: id do pedido <br/>
        Total: Total
        <div id="product-list-Container">
            <div id="product-list-header">
                <span id="item-header">Itens</span>
                <span id="quantity-header">Qtd</span>
                <span id="price-header">Preço</span>
            </div>
            <ul id="product-list">
                <li v-for="sale in sales" :key="sale.id">
                    <span> {{ sale }} </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getAllSales } from '@/services/saleService'

export default {
    name: 'SaleComponent',
    data () {
        return {
            sales: []
        }
    },
    methods: {
        async created() {
            this.sales = await getAllSales();
            console.log(this.sales);
        }
    }
}
</script>

<style>

#sale-component{
    height: 90%;
    width: 90%;
    font-family: 'sans';
    font-size: 0.875rem;
    font-weight: 400;
    
}

</style>

