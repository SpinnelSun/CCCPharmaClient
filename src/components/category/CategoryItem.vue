<template>
    <div class="category-row">
        <div>{{ category.name }}</div>
        <div>{{ category.discount }}%</div>
        <div>
            <select>
                <option></option>
                <option>0%</option>
                <option>10%</option>
                <option>25%</option>
                <option>50%</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'CategoryItem',
    props: {
      category: Object
    },
    methods: {
        discountStringToFloat(discount) {
            return (parseFloat(discount) / 100);
        },

        discountFloatToString(discount) {
            return (parseInt(discount * 100).toString + "%");
        }
    }
}
</script>
 
<style scoped>
    select {
        border: 0.1em solid #242B3A;
        padding: 0.15em;
        width: 5em;

        background-color: #FFFFFF;
        color: #242B3A;
    }

    .category-row {
        display: inline-grid;
        justify-content: space-around;
        grid-template-columns: repeat(3, 1fr);

        border: 0.1em solid #242B3A;
        padding: 0.3em 0em;
        border-top: none; 
        width: 59.8em;
        height: 2em;

        align-items: center;
        text-align: center;

        color: #242B3A;
    }
</style>