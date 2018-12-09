<template>
    <div>
        <div class="list-header">
            <div><strong>Categoria</strong></div>
            <div><strong>Desconto Atual</strong></div>
            <div><strong>Novo Desconto</strong></div>
        </div>
        <div class="list-itens">
            <category-item v-for="category in categories" :key="category.name" v-bind:category="category"></category-item>
        </div>
    </div>
</template>

<script>
import CategoryItem from '@/components/category/CategoryItem'

export default {
    name: 'CategoryList',
    components: { CategoryItem },
    data() {
        return {
            categories : [ { name: "Alimentos", discount: 0.00 },
                           { name: "Cosméticos", discount: 0.10 },
                           { name: "Higiene Pessoal", discount: 0.25 },
                           { name: "Medicamentos", discount: 0.50 } ]
        }
    }
}
</script>
 
<style>
    .list-header {
        display: inline-grid;
        justify-content: space-around;
        grid-template-columns: 1fr 1fr 1fr;

        text-align: center;

        background-color: #242B3A;
        color: #FFFFFF;
    }
</style>