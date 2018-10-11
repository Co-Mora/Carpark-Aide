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
                                        <li><router-link class="dropdown-item" to="/">Logout</router-link></li>
                                    </ul>
                                </div>
                                <div class="logo-element">
                                    IN+
                                </div>
                            </li>
                            <li>
                                <a href="/carparks"><i class="fa fa-ticket"></i> <span class="nav-label">All Carparks</span></a>
                            </li>
                            <li class="active">
                                <a  href=""><i class="fa fa-car"></i> <span class="nav-label">CarPark</span><span class="fa arrow"></span></a>
                                    <ul class="nav nav-second-level collapse" >
                                        <li><router-link to="/carparks/zone">Zone</router-link></li>
                                        <li><router-link to="/carparks/level">Level</router-link></li>
                                        <li><router-link to="/carparks/street">Street</router-link></li>
                                        <li class="active"><router-link to="/carparks/bay">Bay</router-link></li>
                                    </ul>
                            </li>
                             <li>
                                    <a  href=""><i class="fa fa-bandcamp"></i> <span class="nav-label">Wheel</span><span class="fa arrow"></span></a>
                                    <ul class="nav nav-second-level collapse" >
                                        <li><router-link to="/wheel/master">Master</router-link></li>
                                        <li><router-link to="/wheel/lock">Lock</router-link></li>
                                        <li><router-link to="/wheel/pole">Pole</router-link></li>
                                    </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            <div id="page-wrapper" class="gray-bg">
            <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
                <form role="search" class="navbar-form-custom" action="search_results.html">
                    <div class="form-group">
                        <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
                    </div>
                </form>
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome to INSPINIA+ Admin Theme.</span>
                    </li>

                    <li>
                        <a href="login.html">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>

            </nav>
            </div>
                <div class="ibox-content">
                    
                      <div class="col-lg-6">
                           <div class="input-group" style="margin-bottom: 20px">
                                <select v-model="carparkID" class="form-control m-b" >
                                    <option disabled value="">Please Select Carpark name</option>
                                    <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                                </select>
                                <button class="btn btn-primary btn-sm" @click="filterZone">Filter by Zone</button>
                            </div>
                            <div class="input-group" style="margin-bottom: 20px">
                                <select v-model="zoneID" class="form-control m-b" >
                                    <option disabled value="">Please Select Zone name</option>
                                    <option v-for="z in zone" :value="z.id" :key="z">{{z.name}}</option>
                                </select>
                                <button class="btn btn-primary btn-sm" @click="filterZoneByBay">Filter by Bay</button>
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

                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#" class="dropdown-item">Your come</a>
                                    </li>
                                    <li><a href="#" class="dropdown-item">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <input type="text" class="form-control form-control-sm m-b-xs" id="filter"
                                   placeholder="Search in table">

                             <table class="footable table table-stripped" data-page-size="8" data-filter=#filter>
                                <thead>
                                <tr>
                                    <th data-hide="phone,tablet">id(s)</th>
                                    <th data-hide="phone,tablet">streetID</th>
                                    <th data-hide="phone,tablet">image</th>
                                    <th data-hide="phone,tablet">name</th>
                                </tr>
                                </thead>
                                <tbody>
                                     <span v-show="bays == 0" style="font-size: 20px;">{{message}}</span>
                                    <tr v-for="b in bays" :key="b" class="gradeU">
                                        <td>{{b.id || 'Unknown'}}</td>
                                        <td>{{b.streetID || 'Unknown'}}</td>
                                        <td>{{b.image || 'Unknown'}}</td>
                                         <td>{{b.name || 'Unknown'}}</td>
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
import axios from 'axios'

export default {
  name: 'Zone',
  data () {
    return {
      carpark: null,
      zone: null,
      bays: null,
      zoneID: null,
      carparkID: null,
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
      message: null
    }
  },
  methods: {
    filterZone() {
       axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.zone = response.data
            console.log(this.zone)
        })
    },
    filterZoneByBay() {
        axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones/${this.zoneID}/bays`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.bays = response.data
            if(this.bays.length === 0) {
                  this.message = "Threre's no carpark";
            }
        })
    }
  },
  mounted () {
    axios
      .get('https://sys2.parkaidemobile.com/api/carparks/',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data
      })
    }

    


}

</script>
