/**
 * Created by Administrator on 2020/3/5.
 */
/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
})
