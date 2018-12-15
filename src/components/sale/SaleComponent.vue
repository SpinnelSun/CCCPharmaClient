<template>
    <div id="sale-record">
        <div class="sale-details">
            <span>Pedido Nº:</span> {{sale.id}}<br/>
            <span>Total:</span> R$ {{sale.cost.toFixed(2)}}
        </div>
        <div class="sale-itens">
            <div class="list-header">
                <div class="column-header">Itens</div>
                <div class="column-header">Quantidade</div>
                <div class="column-header">Preço</div>
            </div>
            <div id="sold-products-list" v-for="soldProduct in sale.soldProducts" :key="soldProduct.id">
                <sold-product :soldProduct="soldProduct"></sold-product>
            </div>
        </div>
        <div class="list-footer"></div>
    </div>
</template>

<script>
    import { getSaleById } from '@/services/saleService'
    import SoldProduct from '@/components/sale/soldProduct/SoldProduct'

    export default {
        name: 'SaleComponent',
        data() {
            return {
                sale: Object
            }
        },
        async created() {
            const response =  await getSaleById(this.$route.params.code);
            this.sale = response.data;
        },
        components: {
            SoldProduct
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Raleway");
    @import url("https://fonts.googleapis.com/css?family=Lato");

    #sale-record {
            display: flex;
            flex-direction: column;
            align-items: center;

            border: 0.2em solid #242B3A;
            border-radius: 2em;

            padding: 2em;
            width: 50em;
    }

    .sale-details {
        font-family: "Lato";
        text-align: center;
        font-size: 1.2em;

        color: #242B3A;

        margin-bottom: 1em;
    }

    span {
        font-family: "Raleway";
        font-weight: bold;
        font-size: 1.1em;

        color: #242B3A;

        margin-right: 0.2em;
    }

    .sale-itens {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .list-header {
        display: inline-grid;
        justify-content: space-around;
        grid-template-columns: 2fr 1fr 2fr;
        border-radius: 1em 1em 0em 0em;
        grid-gap: 3em;
        
        align-content: center;
        font-family: "Raleway";
        
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
            
        background-color: #242B3A;
        color: #FFFFFF;

        width: 36.9em;
        height: 3em;
    }

    .list-footer {
        border-radius: 0em 0em 1em 1em;
        background-color: #242B3A;

        width: 44.3em;
        height: 1em;
    }
</style>

