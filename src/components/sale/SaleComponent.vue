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
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SaleComponent',
    props: {
      sale: Object
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

