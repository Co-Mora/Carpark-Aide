// router.js

import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/App/Index'
import MainChart from '../components/App/MainChart'

import Level from '../components/PageCarPark/Level'
import Zone from '../components/PageCarPark/Zone'
import ZLevel from '../components/PageCarPark/ZLevel'
import Street from '../components/PageCarPark/Street'
import Bay from '../components/PageCarPark/Bay'
import Voucher from '../components/PageCarPark/Voucher'

import AddCarpark from '../components/PageCarPark/PageAdd/AddCarpark'
import CarparkFees from '../components/PageCarPark/CarparkFees'
import Auth from '../components/PageLogin/Auth'

import Master from '../components/PageWheel/Master'
import Lock from '../components/PageWheel/Lock'
import Pole from '../components/PageWheel/Pole'

import Country from '../components/PageCountry/Country'
import State from '../components/PageCountry/State'
import City from '../components/PageCountry/City'

import AddSubscribe from '../components/PageSubscribe/AddSubscribe'
import VerifySubscribe from '../components/PageSubscribe/VerifySubscribe'

import AddLevel from '../components/PageCarPark/PageAdd/AddLevel'
import AddZone from '../components/PageCarPark/PageAdd/AddZone'
import AddStreet from '../components/PageCarPark/PageAdd/AddStreet'
import AddBay from '../components/PageCarPark/PageAdd/AddBay'
import AddZLevel from '../components/PageCarPark/PageAdd/AddZLevel'

import AddMaster from '../components/PageWheel/PageAdd/AddMaster'
import AddLock from '../components/PageWheel/PageAdd/AddLock'
import AddPole from '../components/PageWheel/PageAdd/AddPole'
import AddVoucher from '../components/PageCarPark/PageAdd/AddVoucher'
import AddCity from '../components/PageCountry/PageAdd/AddCity'

import GateMaster from '../components/PageGate/GateMaster'
import AddGetMaster from '../components/PageGate/AddPage/AddGetMaster'
import Gates from '../components/PageGate/Gates'

import Adverts from '../components/PageAdvert/Adverts'
import AddAdverts from '../components/PageAdvert/PageAdd/AddAdverts'

import Customer from '../components/PageCustomer/Customer'
import CustomerCP from '../components/PageCustomer/CustomerCP'
import AddCustomer from '../components/PageCustomer/PageAdd/AddCustomer'

import PassType from '../components/PagePassType/PassType'
import Staff from '../components/PageStaff/Staff'

import Parker from '../components/PageParker/Parker'
import AddParker from '../components/PageParker/PageAdd/AddParker'

import Bank from '../components/PageBank/Bank'
import VoucherBuy from '../components/PageVoucherBuy/VocuherBuy'

import CarParkProduct from '../components/PageCarpark/CarParkProduct'
import Register from '../components/PageRegister/Register'
import ResetPassword from '../components/PageLogin/ResetPassword'
import ForgotPassword from '../components/PageLogin/ForgotPassword'

import Users from '../components/PageUsers/Users'
import Activity from '../components/PageActivity/Activity'

import Role from '../components/PageRole/Role'
import AddRole from '../components/PageRole/PageAdd/AddRole'



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
      {
        path:'/role',
        component: Role,
      },
      {
        path:'/role/add',
        component: AddRole,
      },
    ]
  })
}
