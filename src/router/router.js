// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Level from '../components/Level'
import Index from '../components/Index'
import Zone from '../components/Zone'
import Street from '../components/Street'
import Master from '../components/Master'
import CarparkFees from '../components/CarparkFees'
import Lock from '../components/Lock'
import Auth from '../components/Auth'
import Pole from '../components/Pole'
import Bay from '../components/Bay'
Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    base: __dirname,
    routes: [
      {
        name: 'CarparkFees',
        path: '/fees',
        component: CarparkFees
      },
      {
        name: 'Index',
        path: '/',
        component: Auth
      },
      {
        name: 'Index',
        path: '/carparks',
        component: Index,
        active: false
      },
      {
        path:'/carparks/level',
        component: Level,
      },
      {
        path:'/carparks/street',
        component: Street,
      },
      {
        path:'/carparks/zone',
        component: Zone,
      },
      {
        path:'/carparks/bay',
        component: Bay,
      },
      {
        path:'/wheel/lock',
        component: Lock,
      },
      {
        path:'/wheel/master',
        component: Master
      },
      {
        path:'/wheel/pole',
        component: Pole,

      },
    ]
  })
}
