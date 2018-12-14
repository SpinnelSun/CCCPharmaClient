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
        <div class="list-footer"><button v-on:click="saveChanges">Salvar Alterações</button>
    </div></div>
        
</template>

<script>
import CategoryItem from '@/components/category/CategoryItem';
import { get, update } from '@/services/categoryService';

export default {
    name: 'CategoryList',
    components: { CategoryItem },
    data() {
        return {
            categories : []
        }
    },
    async created() {
        const response = await get();
        this.categories = response.data;
    },
    methods: {
        percentageStringToFloat(discount) {
            return (parseFloat(discount) / 100);
        },

        saveChanges() {
            this.categories.forEach(category => {
                category.discount = this.percentageStringToFloat(category.discount); 
                update(category);
            });
        }
    }
}
</script>
 
<style scoped>
    button {
        border-radius: 1em;
        padding: 0.5em;
        margin: 1em;
        width: 15em;

        border: 0.05em solid #FFFFFF;
        background-color: #242B3A;
        color: #FFFFFF;
    }

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

        align-self: center;
        text-align: center;

        background-color: #242B3A;
    }    
</style>