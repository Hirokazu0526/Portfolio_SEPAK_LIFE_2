import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: {id: 'G-TXBCZZN8J0'}
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
