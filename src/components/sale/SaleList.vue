<template>
    <div id="Sales">
        <ul id="product-list">
            <h3 id="sale-list-header">
            <span>ID</span>
            <span>TOTAL</span>
        </h3>
        <li v-for="sale in sales" :key="sale.id">
            <span class="clickable"> {{ sale.id }} </span>
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
        border: 0.1em solid #242B3A;
        border-radius: 5px;
        padding: 0.3em 0em;  
        color: #242B3A;
        margin: 0px;
    }

    #sale-list-header{
        display: grid;
        grid-template-columns: 1fr 1fr;
        color: white;
        background: #242B3A;
        grid-row: 1;
        text-align: left;
        margin: 0px;
        padding: 0px;
    }

    li {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: left;
        
    }

    span {
        border-bottom: 0.1em solid #242B3A;
    }

    ul {
        list-style:none;
        margin: 0px;
        margin-left: 10px;
        margin-right: 10px;
        padding: 0px;
        border: 0.1em solid #242B3A;
    }

    .clickable:hover{
        text-decoration: underline;
        color: blue;
        cursor: pointer;
    }



</style>

