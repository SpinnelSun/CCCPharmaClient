<template>
    <div id="Sales">
        <h3 id="sale-list-header">
            <span>ID</span>
            <span>TOTAL</span>
        </h3>
        <ul id="product-list">
        <li v-for="sale in sales" :key="sale.id">
            <span> {{ sale.id }} </span>
            <span> {{ sale.cost }} </span>
        </li>
    </ul>
    </div>
</template>

<script>
import { getAllSales } from '@/services/saleService'

export default {
    name: 'SaleList',
    data () {
        return {
            sales: []
        }
    },
    async created() {
        const all = await getAllSales();
        console.log(all);
        this.sales = all.data.content;
    }
}
</script>


<style scoped>
    #Sales {
        font-family: 'sans';
        font-size: 0.875rem;
        font-weight: 400;
        border: 0.1em solid #242B3A;
        padding: 0.3em 0em;   
        align-items: center;
        text-align: center;
        color: #242B3A;
    }

    #sale-list-header{
        display: grid;
        grid-template-columns: 1fr 1fr;
        color: white;
        background: black;
        grid-row: 1;
        text-align: left;
    }

    li {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: left;
        margin-left: 0px;
    }

    span {
        border-bottom: 0.1em solid #242B3A;
    }

    ul {
        list-style:none;
        margin: none;
        padding: node;
    }



</style>

