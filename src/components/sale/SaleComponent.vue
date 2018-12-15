<template>
    <div id="sale-record">
        <div class="sale-details">
            <span>Pedido Nº:</span> {{sale.id}} 131<br/>
            <span>Total:</span> {{sale.cost}} R$ 50,00
        </div>
        <div class="sale-itens">
            <div class="list-header">
                <div class="column-header">Itens</div>
                <div class="column-header">Quantidade</div>
                <div class="column-header">Preço</div>
            </div>
            <li v-for="soldProduct in sale.soldProducts" :key="soldProduct.id">
                <span id="product-name">{{soldProduct.product.name}}</span>
                <span id="product-quantity">{{soldProduct.quantity}}</span>
                <span id="product-price">{{soldProduct.product.price}}</span>
            </li>
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
        const response =  await getSaleById(this.$route.params.code);
        this.sale = response.data;
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

        border: 0.3em solid #242B3A;
        border-radius: 2em;

        padding: 2em;
        width: 50em;
}

.sale-details {
    font-family: "Lato";
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

#sale-itens {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.list-header {
    display: inline-grid;
    justify-content: space-around;
    grid-template-columns: 2fr 1fr 2fr;
    border-radius: 1em 1em 0em 0em;
    
    align-content: center;
    font-family: "Raleway";
    
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
        
    background-color: #242B3A;
    color: #FFFFFF;

    width: 40em;
    height: 3em;
}


</style>

