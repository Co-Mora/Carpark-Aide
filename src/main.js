import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueSwal from 'vue-swal'
import VueResource from 'vue-resource'
import { createRouter } from './router/router'
import VueSelect from 'vue-cool-select'


const router = createRouter()
new Vue({
  router,
  render: h => h(App)

}).$mount('#app')

Vue.use(VueSelect, {
  theme: 'bootstrap' // or 'material-design'
})

Vue.use(VueRouter)
Vue.use(VueSwal)
Vue.use(VueResource)
