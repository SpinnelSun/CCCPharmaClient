<template>
    <div>
        <div class="list-header">
            <div><strong>Categoria</strong></div>
            <div><strong>Desconto Atual</strong></div>
            <div><strong>Novo Desconto?</strong></div>
        </div>
        <div class="list-itens">
            <category-item v-for="category in categories" :key="category.name" v-bind:category="category"></category-item>
        </div>
        <div class="list-footer"></div>
    </div>
</template>

<script>
import CategoryItem from '@/components/category/CategoryItem'

export default {
    name: 'CategoryList',
    components: { CategoryItem },
    data() {
        return {
            categories : [ { name: "Alimentos", discount: "0%" },
                           { name: "Cosméticos", discount: "10%" },
                           { name: "Higiene Pessoal", discount: "25%" },
                           { name: "Medicamentos", discount: "50%" } ]
        }
    }
}
</script>
 
<style scoped>
    .list-header {
        display: inline-grid;
        justify-content: space-around;
        grid-template-columns: repeat(3, 1fr);

        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
        width: 60em;
        height: 3em;

        align-content: center;
        text-align: center;

        background-color: #242B3A;
        color: #FFFFFF;
    }

    .list-footer {
        display: inline-grid;

        border-bottom-left-radius: 1em;
        border-bottom-right-radius: 1em;
        width: 60em;
        height: 1.5em;

        background-color: #242B3A;
    }
</style>