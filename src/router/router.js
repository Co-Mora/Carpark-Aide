// router.js

import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import MainChart from '../components/MainChart'

import Level from '../components/Level'
import Zone from '../components/Zone'
import ZLevel from '../components/ZLevel'
import Street from '../components/Street'
import Bay from '../components/Bay'
import Voucher from '../components/Voucher'

import AddCarpark from '../components/PageCarPark/AddCarpark'
import CarparkFees from '../components/CarparkFees'
import Auth from '../components/Auth'

import Master from '../components/Master'
import Lock from '../components/Lock'
import Pole from '../components/Pole'

import Country from '../components/Country'
import State from '../components/State'
import City from '../components/City'

import AddSubscribe from '../components/AddSubscribe'
import VerifySubscribe from '../components/VerifySubscribe'

import AddLevel from '../components/AddLevel'
import AddZone from '../components/AddZone'
import AddStreet from '../components/AddStreet'
import AddBay from '../components/AddBay'
import AddZLevel from '../components/AddZLevel'

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

import Customer from '../components/Customer'
import CustomerCP from '../components/CustomerCP'
import AddCustomer from '../components/AddCustomer'

import PassType from '../components/PassType'
import Staff from '../components/Staff'

import Parker from '../components/Parker'
import AddParker from '../components/AddParker'

import Bank from '../components/Bank'

import VoucherBuy from '../components/VocuherBuy'


import CarParkProduct from '../components/CarParkProduct'
import Register from '../components/Register'
import ResetPassword from '../components/ResetPassword'
import ForgotPassword from '../components/ForgotPassword'

import Users from '../components/Users'
import Activity from '../components/Activity'

Vue.use(Router)


export function createRouter () {
  return new Router({
    mode: 'history',
    base: __dirname,
    routes: [
      {
        path: '/',
        component: MainChart,
      },
      {
        name: 'CarparkFees',
        path: '/fees',
        component: CarparkFees
      },
      {
        path: '/carparks/add',
        component: AddCarpark
      },
      {
        name: 'auth',
        path: '/login',
        component: Auth
      },
      {
        path: '/register',
        component: Register
      },
      {
        path: '/setting/reset_password',
        component: ResetPassword
      },
      {
        path: '/setting/forgot_password',
        component: ForgotPassword
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
        path: '/carparks',
        component: Index,
      },

      {
        path:'/location/cities',
        component: City,
      },
      {
        path:'/location/cities/add',
        component: AddCity,
      },
      {
        path:'/location/countries',
        component: Country,
      },
      {
        path:'/location/states',
        component: State,
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
        path:'/carparks/zlevel',
        component: ZLevel,
      },
      {
        path:'/carparks/zlevel/add',
        component: AddZLevel,
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
      {
        path:'/customers',
        component: Customer,
      },
      {
        path:'/customers/add',
        component: AddCustomer,
      },

      {
        path:'/customers/:id',
        component: CustomerCP,
        props: (route) => ({
          query: route.query.q
        })

      },
      {
        path:'/passtype',
        component: PassType,
      },
      {
        path:'/staff',
        component: Staff,
      },
      {
        path:'/parker',
        component: Parker,
      },
      {
        path:'/parker/add',
        component: AddParker,
      },
      {
        path:'/bank',
        component: Bank,
      },
      {
        path:'/voucher/buy',
        component: VoucherBuy,
      },
      {
        path:'/carparks/product',
        component: CarParkProduct,
      },
      {
        path:'/users',
        component: Users,
      },
      {
        path:'/activity',
        component: Activity,
      },

    ]
  })
}
