import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueSwal from 'vue-swal'
import VueResource from 'vue-resource'
import AsyncComputed from 'vue-async-computed'

import { createRouter } from './router/router'

Vue.use(VueRouter);
Vue.use(VueSwal);
Vue.use(VueResource);
Vue.use(AsyncComputed);


const router = createRouter()
var vm  =  new Vue({
  router,
  render: h => h(App),
  data: {
    a: 1
  }

}).$mount('#app')

vm.b = 2


