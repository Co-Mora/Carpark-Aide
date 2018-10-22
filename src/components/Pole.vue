<template>
    <div v-show="isLoggedIn">
      <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{wheelMastersName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="table-responsive">
                          <table class="table table-striped table-bordered table-hover dataTables-example">
                              <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">Carpark Name</th>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">qrcode</th>
                                      <th data-hide="phone,tablet">Bay ID</th>
                                      <th data-hide="phone,tablet">mac</th>

                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedPole == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="pole in selectedPole" :key="z" class="gradeX">
                                      <td class="center">{{wheelMastersName || 'Unknown'}}</td>
                                      <td class="center">{{pole.name || 'Unknown'}}</td>
                                      <td>{{pole.qrcode || 'Unknown'}}</td>
                                      <td>{{pole.bayID || 'Unknown'}}</td>
                                      <td>{{pole.mac || 'Unknown'}}</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>

                  </div>

                  <div class="modal-footer">
                      <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
         <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <li class="nav-header">
                            <div class="dropdown profile-element">
                                <img alt="image" class="rounded-circle" :src="Image" />
                                <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                    <span class="block m-t-xs font-bold">Admin</span>
                                    <span class="text-muted text-xs block">Art Director <b class="caret"></b></span>
                                </a>
                                <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                                    <li><a class="dropdown-item" href="contacts.html">Contacts</a></li>
                                    <li><a class="dropdown-item" href="mailbox.html">Mailbox</a></li>
                                    <li class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="/">Logout</a></li>
                                </ul>
                            </div>
                            <div class="logo-element">
                                IN+
                            </div>
                        </li>
                        <li >
                            <a  href="#"><i class="fa fa-car"></i> <span class="nav-label">CarPark</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse" >
                                 <li>
                                    <a href="/carparks">All Carparks</a>
                                </li>
                                <li>
                                    <a href="#">Zone<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/zone">View Zone</a>
                                            </li>
                                        </ul>
                                </li>
                                <li>
                                    <a href="#">Level<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/level">View Level</a>
                                            </li>
                                        </ul>
                                </li>
                                <li>
                                    <a href="#">Zone Level<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/zlevel">View ZLevel</a>
                                            </li>
                                        </ul>
                                </li>
                                <li>
                                    <a href="#">Street<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/street">View Street</a>
                                            </li>
                                        </ul>
                                </li>
                                <li >
                                    <a href="#">Bay<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/bay">View Bay</a>
                                            </li>
                                        </ul>
                                </li>
                                <li>
                                <a href="#">Voucher<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/carparks/voucher">View Voucher</a>
                                        </li>
                                    </ul>
                            </li>
                            </ul>
                        </li>
                        <li class="active">
                        <a  href="#"><i class="fa fa-bandcamp"></i> <span class="nav-label">Wheel</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">Master<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li  >
                                            <a href="/wheel/master">View Master</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Lock<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/wheel/lock">View Lock</a>
                                        </li>
                                    </ul>
                            </li>
                            <li class="active">
                                <a href="#">Pole<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li class="active">
                                            <a href="/wheel/pole">View Pole</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-globe"></i> <span class="nav-label">Cities</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">City<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/cities">View City</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-sign-in"></i> <span class="nav-label">Subscribers</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">Subscriber<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/subscribe/add">Add User</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-bandcamp"></i> <span class="nav-label">Gate Master</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">Master<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/get-master">View Master</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Gates<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/gates">View Gates</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-bullhorn"></i> <span class="nav-label">Adverts</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">Adverts<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/adverts">View Adverts</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-address-book "></i> <span class="nav-label">Customers</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="/customers">All</a>
                            </li>
                            <li>
                                <a href="#">Branch<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/customers/company?q=1">View Company</a>
                                        </li>
                                        <li>
                                            <a href="/customers/personal?q=0">View Perosnal</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    </ul>

                </div>
            </nav>
             <div id="page-wrapper" class="gray-bg">
            <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome to Carpark Aide.</span>
                    </li>

                    <li>
                        <a @click="logout" href="/login">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
                <div class="ibox-content">
                    <div class="col-lg-12">
                         <div class="input-group" style="margin-bottom: 20px">
                            <a href="/wheel/pole/add" class="btn btn-w-m btn-success">Add Pole</a>
                          </div>
                         <div class="input-group" style="margin-bottom: 20px">
                            <select v-model="carparkID" class="form-control m-b" @change="filterMaster">
                            <option disabled selected value="null" key="null">Please Select Carpark Name</option>
                            <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                        </select>
                        </div>

                       <div class="input-group">
                            <select v-model="wheelMastersID" class="form-control m-b" @change="filterMasterPole">
                                <option disabled selected value="null" key="null">Please Select wheel Master</option>
                                <option v-for="wheel in wheelMasters" :value="wheel.id" :key="wheel">{{wheel.name}}</option>
                            </select>
                       </div>
                    </div>
                    <div class="col-lg-12">

                    </div>
                </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>Wheel Pole</h5>
                        </div>
                        <div class="ibox-content">
                            <div class="table-responsive">
                              <table class="table table-striped table-bordered table-hover dataTables-example">
                                  <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">id(s)</th>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">remark</th>
                                      <th data-hide="phone,tablet">lastSeen</th>
                                      <th data-hide="phone,tablet">wheelmaster Name</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                       <span v-show="poleMasters == 0" style="font-size: 20px;">{{message}}</span>
                                      <tr v-for="pole in poleMasters" :key="pole" class="gradeX">
                                          <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewPole(pole.id)">{{'Pole: ' + pole.id || 'Unknown'}}</a></td>
                                          <td>{{pole.name || 'Unknown'}}</td>
                                          <td>{{pole.remark || 'Unknown'}}</td>
                                          <td>{{pole.lastSeen || 'Unknown'}}</td>
                                          <td>{{wheelMastersName || 'Unknown'}}</td>
                                      </tr>
                                  </tbody>
                                  <tfoot>
                                  <tr>
                                      <td colspan="5">
                                          <ul class="pagination float-right"></ul>
                                      </td>
                                  </tr>
                                  </tfoot>
                              </table>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
            <div class="footer">
                <div class="float-right">
                    10GB of <strong>250GB</strong> Free.
                </div>
                <div>
                    <strong>Copyright</strong> CarPark Company &copy; 2018
                </div>
            </div>

        </div>
         </div>

    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Pole',

  data () {
    return {
      carpark: null,
      wheelMasters: null,
      selectedPole: null,
      Istrigger: null,
      poles: null,
      poleMasters: null,
      selected: null,
      carparkID: null,
      wheelMastersID: null,
      wheelMastersName: null,
      message: null,
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },

  methods: {


    filterMaster() {
         axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.wheelMasters = response.data
            console.log(response)
        })
    },
    filterMasterPole() {
        axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheelpoles`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.poleMasters = response.data
            if(this.poleMasters.length === 0) {
                  this.message = "Threre's no carpark";
            }
        })
        this.wheelMasters.forEach((el) => {
           if(el.id === this.wheelMastersID) {
             this.wheelMastersName = el.name
           }
        })
    },
    viewPole(value) {
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheelpoles/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedPole = response.data;
                if (this.selectedPole.length === 0) {
                    this.message = "Threre's no carpark";
                }
            });

    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },
  mounted () {


    axios
      .get('https://sys2.parkaidemobile.com/api/carparks/',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data
        this.carparkID = response.data[0].id;
        this.filterMaster()
      })


    },

}

</script>
