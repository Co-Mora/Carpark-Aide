import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueSwal from 'vue-swal'
import VueResource from 'vue-resource'
import { createRouter } from './router/router'


const router = createRouter()
new Vue({
  router,
  render: h => h(App)

}).$mount('#app')

Vue.use(VueRouter)
Vue.use(VueSwal)
Vue.use(VueResource)
