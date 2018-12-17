<template>
    <div id="sale-list-container">
        <router-link id="register-sale-btn" :to="`/sale-register`">Cadastrar Nova Venda</router-link>

        <span class="sale-order">
            <span> Listar por: </span>
            <select @change="sort" class="form-control" v-model="sortingAttribute">
                <option value="id">ID</option>
                <option value="cost">Custo Total</option>
            </select>
        </span>
        
        <div class="list-header">
            <div class="column-header">ID</div>
            <div class="column-header">Total</div>
        </div>
        <div class="list-itens" v-for="sale in sales" :key="sale.id">
            <router-link :to="`/sales/${sale.id}`">{{sale.id}}</router-link>
            <div> R$ {{ sale.cost.toFixed(2) }} </div>
        </div>
        <div class="list-footer"></div>
    </div>
</template>

<script>
    import { getAllSales, getAllSalesSorted } from '@/services/saleService'

    export default {
        name: 'SaleList',
        data () {
            return {
                sales: [],
                sortingAttribute: ''
            }
        },
        async created() {
            const response = await getAllSales();
            this.sales = response.data.content;
        }, 
        methods: {
            async sort(){
                const response = await getAllSalesSorted(this.sortingAttribute);
                this.sales = response.data.content;
            }
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Raleway");

    #sale-list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sale-order {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 1em 1em 0em 0em; 

        font-family: "Raleway";
        text-align: center;
        font-weight: bold;

        background-color: #242B3A;
        color: #FFFFFF;

        padding-top: 1em;
        width: 24em;
    }

    select {
        border: 0.1em solid #242B3A;

        font-family: "Lato";
        font-size: 1em;

        background-color: #FFFFFF;
        color: #242B3A;

        padding: 0.2em 0.5em 0.2em 0em;
        margin-left: 1em;
    }

    .list-header {
        display: inline-grid;
        justify-content: space-around;
        grid-template-columns: 1fr 1fr;
        align-content: center;
        
        font-family: "Raleway";
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
            
        background-color: #242B3A;
        color: #FFFFFF;

        width: 20em;
        height: 3em;
    }

    .list-itens {
        display: inline-grid;
        justify-content: space-around;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;

        border: 0.01em solid #242B3A;

        padding: 0.5em 0em;
        width: 23.9em;
    }

    a {
        color: #242B3A;
    }

    a:hover {
        font-weight: bold;
    }

    .list-footer {
        border-radius: 0em 0em 1em 1em;
        background-color: #242B3A;

        width: 23.9em;
        height: 1em;
    }

    #register-sale-btn {
        border: 0.1em solid #242B3A;
        border-radius: 0.5em;

        text-decoration-line: none;
        font-family: "Raleway";
        font-weight: bold;

        background-color: #FFFFFF;
        color: #242B3A;
        
        margin-bottom: 1em;
        padding: 0.5em 2em;
    }

    #register-sale-btn:hover {
        background-color: #242B3A;
        color: #FFFFFF;

        transition: .2s ease-in-out;
    }
</style>

