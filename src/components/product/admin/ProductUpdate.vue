<template>
    <div>
        <product-form title="Atualizar Produto" :product=product :key="code" v-on:handleSubmitProduct="handleSubmitProduct"></product-form>
    </div>
</template>

<script>
    import { update, findByCode } from '@/services/productService'
    import ProductForm from '@/components/product/admin/ProductForm'

    export default {
        name: 'ProductUpdate',
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
        async created () {
            const response =  await findByCode(this.$route.params.code);
            this.product = response.data;
        },
        methods: {
            async handleSubmitProduct (product) {
                const HTTP_STATUS_CREATED = 200;
                const response = await update(product);
                console.log(response.status);
                this.isError = response.status != HTTP_STATUS_CREATED;
                this.isSucess = !this.isError;
                this.alertUpdateSituation();
            }, 
            alertUpdateSituation() {
                if (this.isError) {
                    alert("Impossível registrar o produto. Informações inválidas!");
                } else if (this.isSucess) {
                    alert("Produto registrado com sucesso!");
                }
            }
        }
    }
</script>