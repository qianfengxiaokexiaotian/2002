import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  username: "默认用户名",
  cart: []
}
//数据持久化：从本地取出数据
if (localStorage.getItem("data")) {
  var that = this;
  var data = JSON.parse(localStorage.getItem("data"));
  that.state = data;
}

function saveTolocal(state){
  localStorage.setItem("data",JSON.stringify(state))
}

const mutations = {
  setUserName: function (state, username) {
    state.username = username
    //持久化：保存数据
    saveTolocal(state)
  },
  addToCart: function (state, goods_info) {
    state.cart.push(goods_info)
    //持久化：保存数据
    saveTolocal(state)
  }

}

const actions = {
  setUserNameA: function ({
    commit
  }, username) {
    commit("setUserName", username)
  },
  addToCartA: function ({
    commit
  }, goods_info) {
    commit("addToCart", goods_info)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
