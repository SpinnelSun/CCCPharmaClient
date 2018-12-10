<template>
    <div class="category-row">
        <div>{{ category.name }}</div>
        <div>{{ category.discount }}</div>
        <div>Novo Desconto</div>
    </div>
</template>

<script>
    export default {
    name: 'CategoryItem',
    props: {
      category: Object
    }
}
</script>
 
<style scoped>
    .category-row {
        display: inline-grid;
        justify-content: space-around;
        grid-template-columns: repeat(3, 1fr);

        border: 0.1em solid #242B3A;
        padding: 0.3em 0em;
        border-top: none; 
        width: 59.8em;
        height: 2em;

        align-content: center;
        text-align: center;

        color: #242B3A;
    }
</style>