import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/user'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

// postcss.config.js:移动端 px 转 vm 插件
//解决移动端 300ms 延迟问题；需要在 fastClick.js 文件修改配置，解决 ios 端 input 需双击的问题
FastClick.attach(document.body);

//添加事件总线对象
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

//图片懒加载
Vue.use(VueLazyload, {
  loading: require('../src/assets/img/icon/head_back.png'),
})



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
