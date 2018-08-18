<template>
  <div class="cart">
      <div class="youxi">
          <!-- <img src="../assets/background.png"> -->
      </div>
    <h1 @click="showDetails()">购物车{{$store.state.cart.length}}</h1>
    <ul v-if="showFlag">
      <li v-for="item in $store.state.cart" :key="item.state">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    showDetails: function() {
      this.showFlag = !this.showFlag;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.youxi {
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
.youxi > img {
  width: 100%;
  height: 100%;
}
</style>
