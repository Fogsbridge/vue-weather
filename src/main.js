import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 指定事件总线对象，供Search组件和Weather组件通信
    Vue.prototype.$bus = this
  }
}).$mount('#app')
