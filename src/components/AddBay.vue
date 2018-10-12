<template>
   <div>
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
                        <li class="active">
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
                                <li  class="active">
                                    <a href="#">Bay<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li >
                                                <a href="/carparks/bay">View Bay</a>
                                            </li>
                                            <li  class="active">
                                                <a href="/carparks/bay/add">Add Bay</a>
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
                                        <li>
                                            <a href="/wheel/master/add">Add Master</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Lock<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
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
                                        <li>
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
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome to Carpark Aide.</span>
                    </li>

                    <li>
                        <a href="/login">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-md-12">
                <div class="col-md-6" v-for="error in errors" :key="error">
                <div class=" alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {{error}}
                </div>
                </div>
            </div>
                <!-- <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h4>Add Bay</h4>
                        </div>
                        <div class="ibox-content">
                                <div class="col-lg-6">
                                    <div class="form-group row">
                                        <select v-model="carparkID" class="form-control m-b" >
                                            <option disabled selected value="null" key="null">Please Select Carpark Name</option>
                                            <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Level Name</label>
                                    <div class="col-sm-10"><input v-model="name"  placeholder="Name" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Image</label>
                                    <div class="col-sm-10"><input v-model="image"  placeholder="Image" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-primary btn-sm" @click="addStreetCarpark">Add by Carpark</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
         <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-md-12">
                <div class="col-md-6" v-for="error in errors" :key="error">
                <div class=" alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {{error}}
                </div>
                </div>
            </div>
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h4>Filter by Zone</h4>
                        </div>
                        <div class="ibox-content">
                                <div class="col-lg-6">
                                    <div class="input-group" style="margin-bottom: 20px">
                                        <select v-model="carparkID" class="form-control m-b" @change="filterByZone">
                                            <option disabled selected value="null" key="null">Please Select Carpark Name</option>
                                            <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                                        </select>
                                    </div>
                                    <div class="input-group" style="margin-bottom: 20px">
                                        <select v-model="zoneID" class="form-control m-b" @change="filterByStreet">
                                            <option disabled selected value="null" key="null">Please Select Zone Name</option>
                                            <option v-for="z in zone" :value="z.id" :key="z">{{z.name}}</option>
                                        </select>
                                    </div>
                                    <div class="input-group" style="margin-bottom: 20px">
                                        <select v-model="streetID" class="form-control m-b" >
                                        <option disabled selected value="null" key="null">Please Select Street Name</option>
                                            <option v-for="s in street" :value="s.id" :key="s">{{s.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Level Name</label>
                                    <div class="col-sm-10"><input v-model="name"  placeholder="Name" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Image</label>
                                    <div class="col-sm-10"><input v-model="image"  placeholder="Image" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-primary btn-sm" @click="addStreetBay" :disabled="validated == true">Add by Street</button>
                                    </div>
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
import NavSide from './NavSide'
import qs from 'qs'

export default {
  name: 'AddStreet',
  data () {
    return {

      carparkID: 'null',
      carpark: null,
      zone: null,
      zoneID: 'null',
      street: null,
      streetID: null,
      validated: false,
      name: null,
      image: null,
      errors: [],
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },
  components: {
    NavSide
  },
  methods: {

    addStreetCarpark() {
         setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)
         if (!this.name && !this.image) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.name) {
        this.errors.push('Please fill up the Level Name')
      } if (!this.image) {
        this.errors.push('Please fill up the level image')
      } else {
        this.errors = []
        this.validated = true
        axios({
        method: 'post',
        url: `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/streets`,
        data: qs.stringify({
            name: this.name,
            image: this.image,
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-access-token': JSON.parse(this.token)
        },
        }).then(response => {
            console.log(response, this.carparkID)
           if(response.status == 200) {
                setTimeout(() => {
                    swal({
                        title: 'Add it successfully',
                        icon: 'success'
                    })
                }, 200)
                setTimeout(() => {
                     window.location.href = '/carparks/bay'
                }, 1000)
            }
            
        })
        .catch(error => {
            if(error.message == 'Request failed with status code 401') {
                 setTimeout(() => {
                    swal({
                        title: 'Your or password is wrong',
                        icon: 'error'
                    })
                }, 1000)
            }
           
        });
      }
    },
    addStreetBay() {
         setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)
         if (!this.name && !this.image) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.name) {
        this.errors.push('Please fill up the Level Name')
      } if (!this.image) {
        this.errors.push('Please fill up the level image')
      } else {
        this.errors = []
        this.validated = true
        axios({
        method: 'post',
        url: `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones/${this.zoneID}/streets/${this.streetID}/bays`,
        data: qs.stringify({
            name: this.name,
            image: this.image,
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-access-token': JSON.parse(this.token)
        },
        }).then(response => {
            console.log(response)
            if(response.status == 200) {
                setTimeout(() => {
                    swal({
                        title: 'Add it successfully',
                        icon: 'success'
                    })
                }, 200)
                setTimeout(() => {
                     window.location.href = '/carparks/bay'
                }, 1000)
            }
            
        })
        .catch(error => {
            if(error.message == 'Request failed with status code 401') {
                 setTimeout(() => {
                    swal({
                        title: 'Your or password is wrong',
                        icon: 'error'
                    })
                }, 1000)
            }
           
        });
      }
    },
    // filterByBay() {
    //      axios
    //     .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/bays`,{headers: { 'x-access-token': JSON.parse(this.token)}})
    //     .then(response => {
    //         this.zone = response.data
    //         if(this.zone.length === 0) {
    //               this.message = "Threre's no carpark";
    //         }
    //     })
    // },
    filterByStreet() {
         axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/streets`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.street = response.data
            if(this.street.length === 0) {
                  this.message = "Threre's no carpark";
            }
        })
    },
    filterByZone() {
         axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.zone = response.data
            if(this.zone.length === 0) {
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


<style scoped>
    input-placeholder {
        font-style: italic;
    }
</style>
