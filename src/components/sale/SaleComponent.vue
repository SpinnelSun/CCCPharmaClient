<template>
    <div id="sale-component">
        Pedido nº: {{sale.Id}} <br/>
        Total: {{sale.Total}}
        <div id="product-list-Container">
            <div id="product-list-header">
                <span id="item-header">Itens</span>
                <span id="quantity-header">Qtd</span>
                <span id="price-header">Preço</span>
            </div>
            <ul id="product-list">
                <li v-for="sale in sales">
                    {{ sale }} 
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
            sales: [],
            isError: false,
            isSucess: false
        }
    },
    methods: {
        async getSales () {
            const HTTP_STATUS_CREATED = 201;
            this.sales = await getAllSales();
            this.isError = response.status != HTTP_STATUS_CREATED;
            this.isSucess = !this.isError;
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

