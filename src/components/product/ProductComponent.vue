<template>
    <div id="product-component" class="product">
      <div class="box">
        <article class="media">

          <div class="media-content">
                <h3 id="product-name"> {{product.name}}  </h3> 
<h2 id="product-price"> R$ {{product.price}} </h2>
                <span :class="{available: product.available, unavailable: !product.available}">
                  <i class="fa fa-warning"></i>
                    <p>INDISPONÍVEL </p>
                </span>

                <div class="extra-infos">
                  <p>Código: {{product.code}} <br>
                  Fabricante: {{product.producer}} <br>
                  Quantidade: {{product.amount}}</p>

                </div>

                
            </div>
            <div class="admin-options">
              <router-link id="clickable" target="_blank" :to="`/products/${product.code}`">EDITAR</router-link>

          </div>
        </article>

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
  color: #242B3A;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-decoration: none;
}

.admin-options:hover{
  text-decoration: unset;
}

#product-name{
  text-align: left;
  color: #242B3A;
  margin: 0px;
}

#product-price{
  text-align: right;
  color: #242B3A;
}
.unavailable{
  text-align: left;
  color: #707070;
}
.available{
  text-align: left;
  color: #DDDDDD;
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
  background: #DDDDDD;
  color: #FFF;
  padding: 5px;
  margin: 10px;
  border: 5px solid #242B3A;
}

.box:hover{
  margin: 5px;
}

</style>

