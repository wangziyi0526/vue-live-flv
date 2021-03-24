// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
// import echarts from 'echarts'
import store from './store.js'
import ElementUI from 'element-ui';
Vue.use(ElementUI);

Vue.use(Vuex)
// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.directive('focus', {
  

  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    console.log(el)
    el.style.color='red'
    el.focus()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
