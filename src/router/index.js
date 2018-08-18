import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/Cart'
import Detail from '@/components/Detail'
import Films from '@/components/Films'
Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/detail/:fid',
    name: 'Detail',
    component: Detail
  }, {
    path: '/films',
    name: 'Films',
    component: Films
  }, ]
})
