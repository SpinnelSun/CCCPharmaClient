<template>
    <div id="product-component" class="product">

      <div class="box">
          <div class="media-content">

                <h3 id="product-name"> {{product.name}}  </h3> 
                <h2 id="product-price"> R$ {{product.price.toFixed(2)}} </h2>
                
                <span :class="{available: product.available, unavailable: !product.available}">
                  <i class="fa fa-warning"></i>
                    <p>INDISPONÍVEL </p>
                </span>

                <div class="extra-infos">
                  <span>Código: {{product.code}}</span>
                  <span>Fabricante: {{product.producer}}</span>
                  <span>Quantidade: {{product.amount}}</span>

                </div>

              <router-link id="clickable" target="_blank" :to="`/products/${product.code}`">EDITAR</router-link>
          </div>
      </div>
    </div>  
</template>

<script>
export default {
    name: 'ProductComponent',
    props: {
      product: Object
    }
}
</script>

<style>
.extra-infos{
  text-align: left;
  color: #707070
}

#clickable{
  text-decoration: none;
  margin-right: 5px;
  margin-top: 0px;
  padding: 0 7.5px;
  color: #FFFFFF;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-decoration: none;
}

#product-name{
  text-align: left;
  margin: 0px;
}

#product-price{
  text-align: right;
}
.unavailable{
  text-align: left;
  color: #FFFFFF;
}
.available{
  text-align: left;
  color: #242B3A;
}

template{
  height: 100%;
  padding-top: 10px;
  background: #e6ecf1;
}

#product-component {
  height: 100%;
  padding-top: 0px;
  text-align: center;
}

.product {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 5px;
}

.box {
  width: 300px;
  height: 210px;

  margin-bottom: 0;
  border-radius: 0;

  background-color: #242B3A;
  border: 5px solid rgb(0, 0, 0);
  color: #FFFFFF;
  
  padding: 5px;
  margin: 10px;
  
}

.box:hover{
  margin: 5px;
}

</style>

