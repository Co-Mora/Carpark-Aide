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
                                    <li><a class="dropdown-item" href="login.html">Logout</a></li>
                                </ul>
                            </div>
                            <div class="logo-element">
                                IN+
                            </div>
                        </li>
                        <li>
                            <a href="/carparks"><i class="fa fa-ticket"></i> <span class="nav-label">All Carparks</span></a>
                        </li>
                        <li >
                            <a  href="#"><i class="fa fa-car"></i> <span class="nav-label">CarPark</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse" >
                                <li>
                                    <a href="#">Zone<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/zone">View Zone</a>
                                            </li>
                                            <li>
                                                <a href="/carparks/zone/add">Add Zone</a>
                                            </li>
                                        </ul>
                                </li>
                                <li>
                                    <a href="#">Level<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/level">View Level</a>
                                            </li>
                                            <li>
                                                <a href="/carparks/level/add">Add Level</a>
                                            </li>
                                        </ul>
                                </li>         
                                <li>
                                    <a href="#">Street<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/street">View Street</a>
                                            </li>
                                            <li>
                                                <a href="/carparks/street/add">Add Street</a>
                                            </li>
                                        </ul>
                                </li>
                                <li >
                                    <a href="#">Bay<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li>
                                                <a href="/carparks/bay">View Bay</a>
                                            </li>
                                            <li>
                                                <a href="/carparks/bay/add">Add Bay</a>
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
                                        <li>
                                            <a href="/wheel/master/add">Add Master</a>
                                        </li>
                                    </ul>
                            </li>
                            <li class="active">
                                <a href="#">Lock<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li class="active">
                                            <a href="/wheel/lock">View Lock</a>
                                        </li>
                                        <li>
                                            <a href="/wheel/lock/add">Add Lock</a>
                                        </li>
                                    </ul>
                            </li>         
                            <li>
                                <a href="#">Pole<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li >
                                            <a href="/wheel/pole">View Pole</a>
                                        </li>
                                        <li>
                                            <a href="/wheel/pole/add">Add Pole</a>
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
                <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
                <form role="search" class="navbar-form-custom" action="search_results.html">
                    <div class="form-group">
                        <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
                    </div>
                </form>
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome to Carpark Aide.</span>
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
                            <button class="pull-right btn btn-primary btn-sm" @click="filterMaster">Filter By Master</button>
                        </div>
                        <div class="input-group" style="margin-bottom: 20px">
                            <select v-model="wheelMastersID" class="form-control m-b" >
                            <option disabled value="">Please select your wheel master</option>
                            <option v-for="wheel in wheelMasters" :value="wheel.id" :key="wheel">{{wheel.name}}</option>
                        </select>
                        <button class="btn btn-primary btn-sm" @click="filterLock">Filter</button>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">

                    </div>
                </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>Wheel Lock</h5>
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#" class="dropdown-item">Config option 1</a>
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
                                    <th data-hide="phone,tablet">name</th>
                                    <th data-hide="phone,tablet">remark</th>
                                    <th data-hide="phone,tablet">lastSeen</th>
                                    <th data-hide="phone,tablet">qrcode</th>
                                    <th data-hide="phone,tablet">bayID</th>
                                    <th data-hide="phone,tablet">mac</th>
                                    <th data-hide="phone,tablet">wheelmasterID</th>
                                    <th data-hide="phone,tablet">Trigger Lock</th>
                                </tr>
                                </thead>
                                <tbody>
                                     <span v-show="locks == 0" style="font-size: 20px;">{{message}}</span>
                                    <tr v-for="lock in locks" :key="lock" class="gradeU">
                                        <td>{{lock.id || 'Unknown'}}</td>
                                        <td>{{lock.name || 'Unknown'}}</td>
                                        <td>{{lock.remark || 'Unknown'}}</td>
                                        <td>{{lock.lastSeen || 'Unknown'}}</td>
                                        <td>{{lock.qrcode || 'Unknown'}}</td>
                                        <td>{{lock.bayID || 'Unknown'}}</td>
                                        <td>{{lock.mac || 'Unknown'}}</td>
                                        <td>{{lock.wheelmasterID || 'Unknown'}}</td>
                                        <td><button class="pull-right btn btn-primary btn-sm" value="lock.id" @click="addTrigger(lock.id)">Trigger</button></td>

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
import qs from 'qs'

import NavSide from './NavSide'
export default {
  name: 'Level',
  
  data () {
    return {
      carpark: null,
      wheelMasters: null,
      Istrigger: null,
      locks: null,
      selected: null,
      carparkID: null,
      wheelMastersID: null,
      message: null,
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },
  
  methods: {

    addTrigger(value) {
            axios
        .post(`https://sys2.parkaidemobile.com/api/wheellocks/${value}/trigger`, {
            fact: "hello"
        }, {headers: { 'x-access-token': JSON.parse(this.token), 'Content-Type': 'application/x-www-form-urlencoded',}})
        .then(response => {
            console.log(response)
            this.Istrigger = response.status
             setTimeout(() => {
                    swal({
                        title: `Trigger is success ${response.status}`,
                        icon: 'success'
                    })
                }, 400)
        })
    },
    filterMaster() {
         axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.wheelMasters = response.data
            console.log(response)
        })
    },
    filterLock() {
        
        axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheellocks`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.locks = response.data
            if(this.locks.length === 0) {
                  this.message = "Threre's no carpark";
            }
            if(this.Istrigger == 200 && this.locks.length > 0) {
           

            }
        })
        
    }

  },
  created() {
    
   
  },
  mounted () {
    
   
    axios
      .get('https://sys2.parkaidemobile.com/api/carparks/',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data
      })

   
    },
    
}

</script>
