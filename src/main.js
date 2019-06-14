import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import userInfoStore from './store/index'

Vue.config.productionTip = false

new Vue({
  store: userInfoStore,
  router,
  render: h => h(App)
}).$mount('#app')
