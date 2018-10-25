

<template>

<div v-show="isLoggedIn">
    <div id="wrapper">
      <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{bankName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="table-responsive">
                          <table class="table table-striped table-bordered table-hover dataTables-example">
                              <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">Created Date</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedBank == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="bank in selectedBank" :key="z" class="gradeX">
                                      <td class="center">{{bank.name || 'Unknown'}}</td>
                                      <td class="center">{{bankDate || 'Unknown'}}</td>
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
                    <li>
                        <a href="#"><i class="fa fa-car"></i> <span class="nav-label">CarPark</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse">
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
                        <a href="#"><i class="fa fa-bandcamp"></i> <span class="nav-label">Wheel</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse">
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
                        <a href="#"><i class="fa fa-sign-in"></i> <span class="nav-label">Subscribers</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse">
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
                        <a href="#"><i class="fa fa-bandcamp"></i> <span class="nav-label">Gate Master</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse">
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
                        <a href="#"><i class="fa fa-bullhorn"></i> <span class="nav-label">Adverts</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse">
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
                    <li>
                        <a  href="#"><i class="fa fa-thumb-tack "></i> <span class="nav-label">Parker</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li>
                              <a href="/parker">View Parker</a>
                          </li>
                        </ul>
                    </li>
                    <li class="active">
                        <a  href="#"><i class="fa fa-university"></i> <span class="nav-label">Bank</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li  class="active">
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

                <div class="col-lg-12">
                    <!-- <div class="input-group" style="margin-bottom: 20px">
                        <a href="/customers/add" class="btn btn-w-m btn-success">Add Customer</a>
                    </div> -->
                </div>
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5>Banks</h5>
                            </div>
                            <div class="ibox-content">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover dataTables-example">
                                        <thead>
                                            <tr>
                                                <th data-hide="phone,tablet">id(s)</th>
                                                <th data-hide="phone,tablet">Name</th>
                                                <th data-hide="phone,tablet">Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <span v-show="banks == 0" style="font-size: 20px;">{{message}}</span>
                                            <tr v-for="b in banks" :key="cus" class="gradeX">
                                                <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewBank(b.id)">{{'Bank: ' + b.id || 'Unknown'}}</a></td>
                                                <td class="center">{{b.name || 'Unknown'}}</td>
                                                <td class="center">{{b.image || 'Unknown'}}</td>
                                            </tr>
                                        </tbody>
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

import axios from "axios";

export default {
    name: "Customer",
    data() {
        return {
            banks: null,
            bankName: null,
            bankDate: null,
            selectedBank: null,
            token: localStorage.getItem("token"),
            isLoggedIn: localStorage.getItem("isLogged"),
            message: null
        };
    },
    methods: {
      viewBank(value) {
          axios
              .get(
                  `https://sys2.parkaidemobile.com/api/banks/${value}`, {
                      headers: {
                          "x-access-token": JSON.parse(this.token)
                      }
                  }
              )
              .then(response => {
                  this.selectedBank = response.data;

                  if (this.selectedBank.length === 0) {
                      this.message = "Banks Not Found";
                  }
              });
              var date;
              var hours;
              var minutes;
              var seconds;
              var formattedTime;
              this.banks.forEach((el) => {
                 if(el.id === value) {
                   date = new Date(el.createDate*1000);
                   hours = date.getHours();
                   minutes = "0" + date.getMinutes();
                   seconds = "0" + date.getSeconds();
                   formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                   this.bankDate = formattedTime
                 }
              })
              this.banks.forEach((el) => {
                    if(value === el.id) {
                      this.bankName = el.name
                    }
              })
      },
      logout() {
        localStorage.removeItem('isLogged');
        localStorage.removeItem('token');
      }
    },
    mounted() {
      axios
          .get(
              `https://sys2.parkaidemobile.com/api/banks`, {
                  headers: {
                      "x-access-token": JSON.parse(this.token)
                  }
              }
          )
          .then(response => {
              this.banks = response.data;

              if (this.banks.length === 0) {
                  this.message = "Banks Are Not Found";
              }
          });
    }
};

</script>
