// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import MainChart from '../components/MainChart'

import Level from '../components/Level'
import Zone from '../components/Zone'
import Street from '../components/Street'
import Bay from '../components/Bay'
import Voucher from '../components/Voucher'

import CarparkFees from '../components/CarparkFees'
import Auth from '../components/Auth'

import Master from '../components/Master'
import Lock from '../components/Lock'
import Pole from '../components/Pole'
import City from '../components/City'

import AddSubscribe from '../components/AddSubscribe'
import VerifySubscribe from '../components/VerifySubscribe'

import AddLevel from '../components/AddLevel'
import AddZone from '../components/AddZone'
import AddStreet from '../components/AddStreet'
import AddBay from '../components/AddBay'
import AddMaster from '../components/AddMaster'
import AddLock from '../components/AddLock'
import AddPole from '../components/AddPole'
import AddVoucher from '../components/AddVoucher'
import AddCity from '../components/AddCity'

import GateMaster from '../components/GateMaster'
import AddGetMaster from '../components/AddGetMaster'
import Gates from '../components/Gates'

import Adverts from '../components/Adverts'
import AddAdverts from '../components/AddAdverts'

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
        path: '/login',
        component: Auth
      },
      {
        path:'/subscribe/add',
        component: AddSubscribe,
      },
      {
        path:'/subscribe/verify',
        component: VerifySubscribe,
      },
      {
        name: 'Index',
        path: '/carparks',
        component: Index,
        active: false
      },
      {
        name: 'MainChart',
        path: '/',
        component: MainChart,
      },
      {
        path:'/cities',
        component: City,
      },
      {
        path:'/cities/add',
        component: AddCity,
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
        path:'/carparks/voucher',
        component: Voucher,
      },
      {
        path:'/carparks/voucher/add',
        component: AddVoucher,
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
      {
        path:'/get-master',
        component: GateMaster,

      },
      {
        path:'/get-master/add',
        component: AddGetMaster,

      },
      {
        path:'/gates',
        component: Gates,

      },
      {
        path:'/adverts',
        component: Adverts,

      },
      {
        path:'/adverts/add',
        component: AddAdverts,

      },
    ]
  })
}
