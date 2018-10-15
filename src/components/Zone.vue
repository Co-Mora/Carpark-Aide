<template>
    <div v-show="isLoggedIn">
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
                        <li class="active">
                            <a  href="#"><i class="fa fa-car"></i> <span class="nav-label">CarPark</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse" >
                                 <li>
                                    <a href="/carparks">All Carparks</a>
                                </li>
                                <li class="active">

                                    <a href="#">Zone<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li class="active">
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
                        <a  href="#"><i class="fa fa-bandcamp"></i> <span class="nav-label">Wheel</span><span class="fa arrow"></span></a>
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
                        <a  href="#"><i class="fa fa-globe"></i> <span class="nav-label">Cities</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li class="active">
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

                      <div class="col-lg-6">
                          <div class="input-group" style="margin-bottom: 20px">
                            <a href="/carparks/zone/add" class="btn btn-w-m btn-success">Add Zone</a>
                          </div>

                          <div class="input-group">
                            <select v-model="carparkID" class="form-control m-b" @change="addZone">
                                <option disabled selected value="null" key="null">Please Select Carpark Name</option>
                                <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                            </select>
                          </div>

                    </div>
                    <div class="col-lg-2">

                    </div>
                </div>
         <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>Zone (Carpark)</h5>
                        </div>
                        <div class="ibox-content">
                            <input type="text" class="form-control form-control-sm m-b-xs" id="filter"
                                   placeholder="Search in table">

                             <table class="footable table table-stripped" data-page-size="8" data-filter=#filter>
                                <thead>
                                <tr>
                                    <th data-hide="phone,tablet">id(s)</th>
                                    <th data-hide="phone,tablet">carparkID</th>
                                    <th data-hide="phone,tablet">image</th>
                                    <th data-hide="phone,tablet">name</th>
                                </tr>
                                </thead>
                                <tbody>
                                     <span v-show="zone == 0" style="font-size: 20px;">{{message}}</span>
                                    <tr v-for="z in zone" :key="z" class="gradeU">
                                        <td>{{z.id || 'Unknown'}}</td>
                                        <td>{{z.carparkID || 'Unknown'}}</td>
                                         <td>{{z.name || 'Unknown'}}</td>
                                         <td><a :href="z.image">{{z.image || 'Unknown'}}</a></td>
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
  name: "Zone",
  data() {
    return {
      carpark: null,
      zone: null,
      carparkID: 'null',
      token: localStorage.getItem("token"),
      isLoggedIn: localStorage.getItem("isLogged"),
      carparkID: null,
      message: null
    };
  },
  methods: {
    addZone() {
      axios
        .get(
          `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones`,
          { headers: { "x-access-token": JSON.parse(this.token) } }
        )
        .then(response => {
          this.zone = response.data;
          if (this.zone.length === 0) {
            this.message = "Threre's no carpark";
          }
        });
    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },
  mounted() {
    axios
      .get("https://sys2.parkaidemobile.com/api/carparks/", {
        headers: { "x-access-token": JSON.parse(this.token) }
      })
      .then(response => {
        this.carpark = response.data;
      });
  }
};
</script>
