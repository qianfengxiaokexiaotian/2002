<template>
  <div id="app">
    <div class="back">
      <!-- <a href="#/cart">购物车</a> -->
      <a href="#/">返回首页</a>
      <router-link to="/detail/10086">返回详情页</router-link>
      <router-link to="/films">电影列表</router-link>
      <Cart/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Cart from "./components/Cart";
export default {
  name: "App",
  components:{
    Cart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;

}
a {
  text-decoration-style: none;
  text-decoration: none;
}
</style>
