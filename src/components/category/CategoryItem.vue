<template>
    <div class="category-row">
        <div>{{ category.name }}</div>
        <div v-once>{{ category.discount }}</div>
        <div>
            <select v-model="category.discount">
                <option v-for="discount in discounts" :value="discount" :key="discount">
                    {{ discount }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'CategoryItem',
    data() {
        return {
            discounts: ["0%", "10%", "25%", "50%"]
        }
    },
    props: {
      category: Object
    },
    created() {
        this.category.discount = this.percentageFloatToString(this.category.discount);
    },
    methods: {
        percentageFloatToString(discount) {
            return (parseInt(discount * 100).toString() + "%");
        }
    }
}
</script>
 
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Lato");

    .category-row {
        display: grid;
        align-items: center;
        justify-content: space-around;
        grid-template-columns: repeat(3, 1fr);

        border: 0.1em solid #242B3A;
        border-top: none; 
        
        font-family: "Lato";
        font-size: 1.1em;
        text-align: center;

        color: #242B3A;

        padding: 0.3em 0em;
        width: 54.3em;
        height: 2em;
    }

    select {
        border: 0.1em solid #242B3A;

        background-color: #FFFFFF;
        color: #242B3A;

        padding: 0.15em;
        width: 5em;
    }
</style>