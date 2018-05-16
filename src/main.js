// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

// 图片懒加载
import vueLazyLoad from 'vue-lazyload'
Vue.use(vueLazyLoad,{
	loading:require('@/assets/images/default.jpg')
})

// 解决移动端点击300ms延迟的问题
import fastclick from 'fastclick'
fastclick.attach(document.body)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
