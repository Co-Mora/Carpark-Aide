<template>
    <div v-show="isLoggedIn">
          <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <img alt="image" class="-square-full" style="margin-left: 40px" :width="60" :src="Image" />
                        </div>
                        <div class="logo-element">
                          <img alt="image" class="-square-full" :width="40" :src="Image" />
                        </div>
                    </li>
                    <li>
                      <a  href="#"><i class="fa fa-dashboard"></i> <span class="nav-label">Dashboard</span><span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level collapse" >
                        <li>
                          <a href="/">View Dashboard</a>
                        </li>
                      </ul>
                    </li>
                    <li :class="{ active: carparkActive }">
                        <a  href="#"><i class="fa fa-car"></i> <span class="nav-label">Car Park</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                              <a href="/carparks">Car park</a>
                            </li>
                            <li :class="{ active: classAll }">
                                <a href="/carparks/zone">Car park Zone<span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                  <li :class="{ active: classZone }">
                                    <a href="/carparks/zone">Car park Zone</a>
                                  </li>
                                  <li :class="{ active: classLevel }">
                                    <a href="/carparks/level">Car park Level</a>
                                  </li>
                                  <li :class="{ active: classZLevel }">
                                    <a href="/carparks/zlevel">Car park ZLevel</a>
                                  </li>
                                  <li :class="{ active: classStreet }">
                                    <a href="/carparks/street">Car park Street</a>
                                  </li>
                                  <li :class="{ active: classBay }">
                                    <a href="/carparks/bay">Car park Bay</a>
                                  </li>
                                </ul>
                            </li>
                            <li :class="{ active: classProduct }">
                              <a href="/carparks/product">Car park Product</a>
                            </li>
                            <li :class="{ active: classVoucher }">
                              <a href="/carparks/voucher">Car park Voucher</a>
                            </li>
                        </ul>
                    </li>
                    <li :class="{ active: wheelMaster }">
                        <a  href="#"><i class="fa fa-bandcamp"></i> <span class="nav-label">Wheel</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li :class="{ active: classMaster }">
                              <a href="/wheel/master">Master</a>
                            </li>
                            <li :class="{ active: classLock }">
                              <a href="/wheel/lock">Lock</a></li>
                            <li :class="{ active: classPole }">
                              <a href="/wheel/pole">Pole</a>
                            </li>
                        </ul>
                    </li>

                    <li :class="{ active: location }">
                        <a  href="#"><i class="fa fa-globe"></i> <span class="nav-label">Location</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li :class="{ active: classCountry }">
                              <a href="/location/countries">Countries</a>
                            </li>
                            <li :class="{ active: classState }">
                              <a href="/location/states">States</a>
                            </li>
                            <li :class="{ active: classCity }">
                              <a href="/location/cities">Cities</a>
                            </li>
                        </ul>
                    </li>
                    <li :class="{ active: subscriber }">
                        <a  href="#"><i class="fa fa-sign-in"></i> <span class="nav-label">Subscribers</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li :class="{ active: classAddSubscriber }">
                            <a href="/subscribe/add">subscriber</a>
                          </li>
                        </ul>
                    </li>
                    <li :class="{ active: gateMaster }">
                      <a  href="#"><i class="fa fa-bandcamp"></i> <span class="nav-label">Gate Master</span><span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level collapse" >
                        <li :class="{ active: classGateMaster }">
                          <a href="/get-master">Master</a>
                        </li>
                        <li :class="{ active: classGate }">
                          <a href="/gates">Gate</a>
                        </li>
                      </ul>
                    </li>
                    <li :class="{ active: advert }">
                      <a  href="#"><i class="fa fa-bullhorn"></i> <span class="nav-label">Adverts</span><span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level collapse" >
                        <li :class="{ active: classAdvert }">
                          <a href="/adverts">Adverts</a>
                        </li>
                      </ul>
                    </li>
                    <li :class="{ active: customer }">
                        <a  href="#"><i class="fa fa-address-book "></i> <span class="nav-label">Customers</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li :class="{ active: classCustomer }">
                                <a href="/customers">All</a>
                            </li>
                            <li :class="{ active: classCustomerCP }">
                                <a href="#">Branch<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/customers/company?q=1">View Company</a>
                                        </li>
                                        <li>
                                            <a href="/customers/personal?q=0">View Personal</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    <li :class="{ active: passType }">
                        <a href="#"><i class="fa fa-cube"></i> <span class="nav-label">PassType</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li :class="{ active: classPassType }">
                              <a href="/passtype">View PassType</a>
                          </li>
                        </ul>
                    </li>
                    <li :class="{ active: staff }">
                        <a  href="#"><i class="fa fa-child"></i> <span class="nav-label">Staff</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li :class="{ active: classStaff }">
                              <a href="/staff">View Staff</a>
                          </li>
                        </ul>
                    </li>
                    <li :class="{ active: parker }">
                        <a  href="#"><i class="fa fa-thumb-tack "></i> <span class="nav-label">Parker</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li  :class="{ active: classParker }">
                              <a href="/parker">View Parker</a>
                          </li>
                        </ul>
                    </li>
                    <li :class="{ active: bank }">
                        <a  href="#"><i class="fa fa-university"></i> <span class="nav-label">Bank</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li :class="{ active: classBank }">
                              <a href="/bank">View Bank</a>
                          </li>
                        </ul>
                    </li>
                  <li :class="{ active: voucherBuy }">
                    <a  href="#"><i class="fa fa-unlock"></i> <span class="nav-label">Voucher Buy</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse" >
                      <li :class="{ active: classVoucherBuy }">
                        <a href="/voucher/buy">View Voucher</a>
                      </li>
                    </ul>
                  </li>
                </ul>

            </div>
        </nav>
    </div>
</template>

<script>

import Image from '../../static/img/icon.png'

export default {
  name: 'NavSide',
  props: ['classZone', 'classLevel', 'classZLevel', 'classStreet',
          'classBay', 'classVoucher', 'classMaster', 'classLock',
          'classPole', 'classCountry', 'classState', 'classCity',
          'classAddSubscriber', 'classGateMaster', 'classGate',
          'classAdvert', 'classCustomer', 'classCustomerCP', 'classPassType',
          'classStaff', 'classParker', 'classBank', 'classVoucherBuy', 'classProduct'
  ],

  data () {
    return {
      Image,
      carparkActive: null,
      wheelMaster: null,
      location: null,
      subscriber: null,
      gateMaster: null,
      advert: null,
      customer: null,
      passType: null,
      staff: null,
      parker: null,
      bank: null,
      voucherBuy: null,
      classAll: false,
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },
  mounted() {
      if(this.classZone || this.classLevel || this.classZLevel || this.classStreet || this.classBay) {
        this.carparkActive = true;
        this.classAll = true
      }
      if(this.classVoucher) {
        this.carparkActive = true;
      }
      if(this.classProduct) {
        this.carparkActive = true;
      }

      if(this.classMaster || this.classLock || this.classPole) {
        this.wheelMaster = true
      }
      if(this.classCountry || this.classState || this.classCity) {
        this.location = true
      }
      if(this.classAddSubscriber) {
        this.subscriber = true
      }
      if(this.classGateMaster || this.classGate) {
        this.gateMaster = true
      }
      if(this.classAdvert) {
        this.advert = true
      }
      if(this.classCustomer || this.classCustomerCP) {
        this.customer = true
      }
      if(this.classPassType) {
        this.passType = true
      }
      if(this.classStaff) {
        this.staff = true
      }
      if(this.classParker) {
        this.parker = true
      }
      if(this.classBank) {
        this.bank = true
      }
      if(this.classVoucherBuy) {
        this.voucherBuy = true
      }
  }
}

</script>
