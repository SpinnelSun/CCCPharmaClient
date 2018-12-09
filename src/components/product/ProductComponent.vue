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
              <p>
                <strong>{{product.name}}</strong> <small>{{product.price}}</small>
              </p>
            </div>

              <div class="level-left">
                <a class="level-item">
                  <button class="clicavel" >VER</button>
                  <button class="clicavel">EDITAR</button>
                </a>
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
  padding-bottom: 15px;
}

#product-component .box {
  width: 300px;
  height: 150px;
  margin-bottom: 0;
  border-radius: 0;
  background: rgb(154, 231, 227);
  color: #FFF;
  padding: 10px;
  margin: 10px;
  border: 5px solid #CCC;
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

#product-component .clicavel {
  padding: 0 7.5px;
}
</style>

