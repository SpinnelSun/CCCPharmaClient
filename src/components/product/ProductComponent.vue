<template>
    <div id="product-component" class="product">
      <div class="box">
        <article class="media">

          <div class="media-left">
            <figure class="image is-64x64">
              
            </figure>
          </div>

          <div class="media-content">

            <div class="content">
                <h3 id="product-name"> {{product.name}} </h3> 

                <span :class="{available: product.avaliable, unavailable: !product.available}">
                  <i class="fa fa-warning"></i>
                    INDISPONÍVEL
                </span>

                <h2 id="product-price"> R$ {{product.price}} </h2>
            </div>
            <div class="admin-options">
              <a id="clickable" href="#">EDITAR</a>
              <a id="clickable" href="#">VER</a>
            </div>
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
  .unavailable{
    color: #ffae00;
  }
  .available{
    color: rgb(154, 231, 227);
  }
  #product-component template{
  height: 100%;
  padding-top: 10px;
  background: #e6ecf1;
}

#product-component {
  height: 100%;
  padding-top: 0px;
  text-align: center;
}

#product-component .button {
  margin-bottom: 20px;
}

#product-component .product {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 5px;
}

#clickable{
  text-decoration: none;
  margin-right: 5px;
  margin-top: 0px;
}

.media-content{
  padding: 0px;
  margin: 0px;
}

.admin-options{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-decoration: none;
  text-align: left;
}

#product-name{
  text-align: left;
  color: darkblue;
  margin: 0px;
}

#product-situation{
  text-align: left;
  padding: 0px;
}

#product-price{
  text-align: right;
  color: rgb(243, 60, 60);
}

#product-component .box {
  width: 300px;
  height: 155px;
  margin-bottom: 0;
  border-radius: 0;
  background: rgb(154, 231, 227);
  color: #FFF;
  padding: 5px;
  margin: 10px;
  border: 5px solid rgb(199, 193, 193);
}


#product-component .content small {
  color: #ff0000;
}

#product-component img {
  border-radius: 30px;
}

#product-component .level-item {
  padding-left: 10px;
  color: #ff0000;

}

#product-component .clickable {
  padding: 0 7.5px;
  
}
</style>

