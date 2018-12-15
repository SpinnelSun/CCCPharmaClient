<template>
    <div id="category-list">
        <div class="list-header">
            <div class="column-header">Categoria</div>
            <div class="column-header">Desconto Atual</div>
            <div class="column-header">Alterar Desconto?</div>
        </div>
        <div class="list-itens">
            <category-item v-for="category in categories" :key="category.name" v-bind:category="category"></category-item>
        </div>
        <div class="list-footer"><button v-on:click="saveChanges">Salvar Alterações</button></div>
    </div>
        
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

        async saveChanges() {
            const promises = this.categories.map(async category => {
                category.discount = this.percentageStringToFloat(category.discount); 
                const response = await update(category);
                return response;
            });
            await Promise.all(promises);
            
            this.$router.go();
        }
    }
}
</script>
 
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Raleway");

    #category-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .list-header {
        display: inline-grid;
        justify-content: space-around;
        grid-template-columns: repeat(3, 1fr);

        border-radius: 1em 1em 0em 0em;
        align-content: center;

        font-family: "Raleway";
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
        
        background-color: #242B3A;
        color: #FFFFFF;

        width: 50em;
        height: 3em;
    }

    .list-footer {
        display: inline-grid;
        justify-content: center;
        
        border-radius: 0em 0em 1em 1em;

        background-color: #242B3A;

        width: 60em;
    }

    button {
        border: 0.08em solid #FFFFFF;
        border-radius: 0.8em;

        font-family: "Raleway";
        text-align: center;
        font-size: 1.1em;

        background-color: #242B3A;
        color: #FFFFFF;

        padding: 0.5em 1.5em;
        margin: 0.5em;
    }

    button:hover {
        background-color:#FFFFFF;
        font-weight: bold;
        color:#242B3A;

        transition: .2s ease-in-out;
    }    
</style>