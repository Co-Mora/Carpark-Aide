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
import AddLevel from '../components/AddLevel'
import AddZone from '../components/AddZone'
import AddStreet from '../components/AddStreet'
import AddBay from '../components/AddBay'

import AddMaster from '../components/AddMaster'
import AddLock from '../components/AddLock'
import AddPole from '../components/AddPole'


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
        path:'/carparks/level/add',
        component: AddLevel,
      },
      {
        path:'/carparks/street',
        component: Street,
      },
      {
        path:'/carparks/street/add',
        component: AddStreet,
      },
      {
        path:'/carparks/zone',
        component: Zone,
      },
      {
        path:'/carparks/zone/add',
        component: AddZone,
      },
      {
        path:'/carparks/bay',
        component: Bay,
      },
      {
        path:'/carparks/bay/add',
        component: AddBay,
      },
      {
        path:'/wheel/lock',
        component: Lock,
      },
      {
        path:'/wheel/lock/add',
        component: AddLock,
      },
      {
        path:'/wheel/master',
        component: Master
      },
      {
        path:'/wheel/master/add',
        component: AddMaster
      },
      {
        path:'/wheel/pole',
        component: Pole,

      },
      {
        path:'/wheel/pole/add',
        component: AddPole,

      },
    ]
  })
}
