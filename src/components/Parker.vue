<template>
    <div v-show="isLoggedIn">
      <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{zoneName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="table-responsive">
                          <table class="table table-striped table-bordered table-hover dataTables-example">
                              <thead>
                                  <tr>
                                    <th data-hide="phone,tablet">subscriberID</th>
                                    <th data-hide="phone,tablet">customerID</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedParker == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="parker in selectedParker" :key="parker" class="gradeX">
                                      <td class="center">{{parker.subscriberID || 'Unknown'}}</td>
                                      <td class="center">{{parker.customerID || 'Unknown'}}</td>
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
                            </div>
                            <div class="logo-element">
                                IN+
                            </div>
                        </li>
                        <li>
                            <a  href="#"><i class="fa fa-car"></i> <span class="nav-label">CarPark</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse" >
                                 <li>
                                    <a href="/carparks">All Carparks</a>
                                </li>
                                <li >
                                    <a href="#">Zone<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/zone">View Zone</a>
                                            </li>
                                        </ul>
                                </li>
                                <li >
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
                                <li>
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
                         <li>
                        <a  href="#"><i class="fa fa-globe"></i> <span class="nav-label">Wheel</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">Master<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
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
                            <li>
                                <a href="#">Pole<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/wheel/pole">View Pole</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-globe"></i> <span class="nav-label">Location</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">Country<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/location/countries">View Country</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">State<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/location/states">View State</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">City<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/location/cities">View City</a>
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
                    <li>
                        <a  href="#"><i class="fa fa-cube"></i> <span class="nav-label">PassType</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li>
                              <a href="/passtype">View PassType</a>
                          </li>
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-child"></i> <span class="nav-label">Staff</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li>
                              <a href="/staff">View Staff</a>
                          </li>
                        </ul>
                    </li>
                    <li class="active">
                        <a  href="#"><i class="fa fa-thumb-tack "></i> <span class="nav-label">Parker</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li class="active">
                              <a href="/parker">View Parker</a>
                          </li>
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-university"></i> <span class="nav-label">Bank</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li>
                              <a href="/bank">View Bank</a>
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
                        <span class="m-r-sm text-muted welcome-message">Welcome to {{username}}</span>
                    </li>

                    <li>
                        <a @click="logout" href="/login">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>

            </nav>
            </div>
         <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>Parkers</h5>
                        </div>
                        <div class="ibox-content">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="input-group" style="margin-bottom: 20px">
                                <a href="/parker/add" class="btn btn-w-m btn-success">Add Parker</a>
                              </div>
                            </div>
                            <div class="col-sm-9 m-b-xs">
                              <select v-model="customerID" class="form-control m-b" @change="filterByParker">
                                <option disabled value="null" key="null">Please Select Customer Name</option>
                                <option v-for="cus in customer" :value="cus.id" :key="cus">{{cus.name}}</option>
                              </select>
                            </div>
                            <div class="col-sm-9 m-b-xs">
                              <select v-model="customerParkerID" class="form-control m-b" @change="getParker">
                                <option disabled  selected value="null" key="null">Please Select Parker Name</option>
                                <option v-for="p in customerParker" :value="p.id" :key="p">{{p.name}}</option>
                              </select>
                            </div>
                            <div class="col-sm-3">
                              <div class="input-group" style="margin-bottom: 20px">
                                <input v-model="searchResult" @change="getSearchResult" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
                                      <button type="button"  @click="getSearchResult()" class="btn btn-sm btn-primary">Search</button></span>
                              </div>
                            </div>
                          </div>
                            <div class="table-responsive">
                              <table class="table table-striped table-bordered table-hover dataTables-example">
                                 <thead>
                                 <tr>
                                     <th data-hide="phone,tablet">id(s)</th>
                                     <th data-hide="phone,tablet">name</th>
                                     <th data-hide="phone,tablet">createDate</th>
                                     <th data-hide="phone,tablet">car1</th>
                                     <th data-hide="phone,tablet">car2</th>
                                     <th data-hide="phone,tablet">mobile</th>
                                     <th data-hide="phone,tablet">email</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                    <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                     <tr v-for="p in parker" :key="s" class="gradeX" v-if="result == true && errorResult === false">
                                         <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewParker(p.id)">{{'Parker: ' + p.id || 'Unknown'}}</a></td>
                                         <td class="center">{{p.name || 'Unknown'}}</td>
                                         <td class="center">{{parkerDate || 'Unknown'}}</td>
                                         <td class="center">{{p.car1 || 'Unknown'}}</td>
                                         <td class="center">{{p.car2 || 'Unknown'}}</td>
                                         <td class="center">{{p.mobile || 'Unknown'}}</td>
                                         <td class="center">{{p.email || 'Unknown'}}</td>
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

export default {
  name: 'Parker',
  data () {
    return {
      parker: null,
      customerParkerID: 'null',
      customerParker: null,
      customer: null,
      parkerDate: null,
      customerID: null,
      selectedParker: null,
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
      username: localStorage.getItem('email'),

      result: true,
      message: '',
      searchResult: '',
      errorResult: false,
      mySearch: [],
    }
  },
  methods: {
    getSearchResult() {
      if(this.searchResult.length === 0) {
        this.errorResult = false;
        this.message = "";
        this.getParker()
      }
      axios
        .get(`https://sys2.parkaidemobile.com/api/customers/${this.customerID}/parkers/${this.customerParkerID}?search=${this.searchResult}`, {
          headers: {
            'x-access-token': JSON.parse(this.token)
          }
        })
        .then(response => {
          this.parker = response.data;
          this.errorResult = false;
          this.message = "";
          this.result = true;
          if (this.parker.length === 0) {
            this.errorResult = true;
            this.message = "No Data Available";
          }
        })
    },
    filterByParker() {
        axios
        .get(`https://sys2.parkaidemobile.com/api/customers/${this.customerID}/parkers`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.customerParker = response.data
            this.customerParkerID = response.data[0].id;
            this.getParker();
        })
    },
    getParker() {
        axios
        .get(`https://sys2.parkaidemobile.com/api/customers/${this.customerID}/parkers/${this.customerParkerID}`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.parker = response.data
            var date;
            var hours;
            var minutes;
            var seconds;
            var formattedTime;
            this.parker.forEach((el) => {
               if(el.id === this.customerParkerID) {
                 date = new Date(el.createDate*1000);
                 hours = date.getHours();
                 minutes = "0" + date.getMinutes();
                 seconds = "0" + date.getSeconds();
                 formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                 this.parkerDate = formattedTime
               }
            });

        })
    },
    viewParker(value) {
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/customers/${this.customerID}/parkers/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedParker = response.data;

            });

    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },

  mounted () {

    axios
      .get('https://sys2.parkaidemobile.com/api/customers',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.customer   = response.data;
        this.customerID = response.data[0].id;
        this.filterByParker()
      })
    }
}
</script>
