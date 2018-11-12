import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueSwal from 'vue-swal'
import VueResource from 'vue-resource'
import { createRouter } from './router/router'
import authMe from './api/authMe'

const router = createRouter()
new Vue({
  router,
  render: h => h(App)

}).$mount('#app')


Vue.use(VueRouter);
vue.use(authMe);
Vue.use(VueSwal);
Vue.use(VueResource);
