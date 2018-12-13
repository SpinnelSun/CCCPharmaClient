<template id = "form-update">
    <div>
        <product-form title="Atualizar" :key="code" v-on:handleSubmitProduct="handleSubmitProduct"> </product-form>
        <span :class="{error: isError}" v-if="isError">
            <i class="fa fa-warning"></i>
            Houve um erro na atualização de dados. Reveja suas informações.
        </span>
        <span :class="{sucess: isSucess}" v-if="isSucess">
            <i class="fa fa-check"></i>
            Produto atualizado com sucesso.
        </span>
    </div>
</template>


<script>
    import { update } from '@/services/productService'
    import ProductForm from '@/components/product/ProductForm'

    export default {
        name: 'ProductList',

        data() {
            return {
                code: this.$route.params.code,
                product : {},
                isError: false,
                isSucess: false
            }
        },
        components: {
            ProductForm
        },
        methods: {
            async handleSubmitProduct (product) {
                const HTTP_STATUS_CREATED = 201;
                const response = await update(product);
                console.log(response.status);
                this.isError = response.status != HTTP_STATUS_CREATED;
                this.isSucess = !this.isError;
            }, 
        }
    }

</script>