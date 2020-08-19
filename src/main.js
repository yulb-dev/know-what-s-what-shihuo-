import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/user'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('../src/assets/img/icon/head_back.png'),
})

FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
