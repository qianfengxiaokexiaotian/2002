<template>
  <div class="Detail">
    <template v-if="detail">
        <h1>{{detail.name}}</h1>
        <img :src="detail.poster.origin"/>
        <button @click="addToCart(detail)">添加购物车</button>
    </template>
  </div>
</template>

<script src="./js/Detail.js">
import axios from "axios";

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./css/Detail.scss">

</style>