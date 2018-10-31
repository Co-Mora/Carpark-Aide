<template>
    <div v-show="isLoggedIn">
      <div class="modal inmodal" id="myModalUpdate" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content animated bounceInRight">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{wheelMastersName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="form-group">
                          <label>Lock Name</label>
                          <input type="text" v-model="name" placeholder="Enter Lock Name" class="form-control">
                      </div>
                      <div class="form-group">
                          <label>Remark Count</label>
                          <input type=" text"  v-model="remark" placeholder="Enter Remark Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>Remark Count</label>
                        <input type=" text"  v-model="bayID" placeholder="Enter BayID Name" class="form-control">
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" @click="updateLock(lockID)" :disabled="validated == true" class="btn btn-primary">Update changes</button>
                  </div>
              </div>
          </div>
      </div>
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
                                      <th data-hide="phone,tablet">Bay ID</th>
                                      <th data-hide="phone,tablet">mac</th>
                                      <th data-hide="phone,tablet">Delete</th>
                                      <th data-hide="phone,tablet">Update</th>

                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedLock == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="lock in selectedLock" :key="z" class="gradeX">
                                      <td class="center">{{wheelMastersName || 'Unknown'}}</td>
                                      <td class="center">{{lock.name || 'Unknown'}}</td>
                                      <td>{{lock.bayID || 'Unknown'}}</td>
                                      <td>{{lock.mac || 'Unknown'}}</td>
                                      <td><button class="pull-right btn btn-danger btn-sm" :value="lock.id" @click="deleteLock(lock.id)">Delete</button></td>
                                      <td>
                                          <button class="pull-right btn btn-primary btn-sm" :value="lock.id" @click="viewLockUpdate(lock.id)" data-toggle="modal" data-target="#myModalUpdate">Update</button>
                                      </td>
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
                                    <li><a class="dropdown-item" href="login.html">Logout</a></li>
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
                            <li class="active">
                                <a href="#">Lock<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li class="active">
                                            <a href="/wheel/lock">View Lock</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Pole<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li >
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
                    <li>
                        <a  href="#"><i class="fa fa-thumb-tack "></i> <span class="nav-label">Parker</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li>
                              <a href="/parker">View Parker</a>
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
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>Wheel Lock</h5>
                        </div>
                        <div class="ibox-content">
                          <div class="row">
                              <div class="col-lg-6">
                                  <div class="input-group" style="margin-bottom: 20px">
                                      <a href="/wheel/lock/add" class="btn btn-w-m btn-success">Add Lock</a>
                                  </div>
                              </div>
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="carparkID" class="form-control m-b" @change="addMaster">
                                    <option disabled selected value="null" key="null">Please Select Carpark Name</option>
                                    <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                                </select>
                              </div>
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="wheelMastersID" class="form-control m-b" @change="filterLock">
                                  <option disabled selected value="null" key="null">Please select your wheel master</option>
                                  <option v-for="wheel in wheelMasters" :value="wheel.id" :key="wheel">{{wheel.name}}</option>
                                </select>
                              </div>
                              <div class="col-sm-3">
                                  <div class="input-group">
                                      <input v-model="searchResult" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
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
                                      <th data-hide="phone,tablet">remark</th>
                                      <th data-hide="phone,tablet">lastSeen</th>
                                      <th data-hide="phone,tablet">Wheelmaster Name</th>
                                      <th data-hide="phone,tablet">Trigger Lock</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                      <tr v-for="lock in locks" :key="lock" class="gradeX" v-if="result == true && errorResult === false">
                                          <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewLock(lock.id)">{{'Lock: ' + lock.id || 'Unknown'}}</a></td>
                                          <td>{{lock.name || 'Unknown'}}</td>
                                          <td>{{lock.remark || 'Unknown'}}</td>
                                          <td>{{lock.lastSeen || 'Unknown'}}</td>
                                          <td>{{wheelMastersName || 'Unknown'}}</td>
                                          <td><button class="pull-right btn btn-primary btn-sm" value="lock.id" @click="addTrigger(lock.id)">Trigger</button></td>
                                      </tr>
                                  </tbody>
                                  <tfoot>
                                  <!-- <tr>
                                      <td colspan="5">
                                          <ul class="pagination float-right"></ul>
                                      </td>
                                  </tr> -->
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
  name: 'Lock',

  data () {
    return {
      carpark: null,
      wheelMasters: null,
      Istrigger: null,
      locks: null,
      lockID: null,

      name: null,
      remark: null,
      bayID: null,

      selectedLock: null,
      selected: null,
      carparkID: null,
      wheelMastersID: null,
      wheelMastersName: null,
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),

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
        this.errorResult = false
        this.message = "";
        this.filterLock();
      }
      axios
          .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheellocks?search=${this.searchResult}`, {
              headers: {
                  'x-access-token': JSON.parse(this.token)
              }
          })
          .then(response => {
              this.locks = response.data
              console.log('Search Result: ', this.locks)
              this.errorResult = false
              this.message = "";
              this.result = true;
              if (this.locks.length === 0) {
                  this.errorResult = true;
                  this.result = true;
                  this.message = "No Data Avaliable";
              }
          })
    },
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
                }, 300)
        })
    },
    filterMaster() {
         axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.wheelMasters = response.data
            this.wheelMastersID = response.data[0].id
            this.filterLock()
            console.log(response)
        })
    },
    filterLock() {

        axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheellocks`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.locks = response.data
            if(this.Istrigger == 200 && this.locks.length > 0) {


            }
        })
        this.wheelMasters.forEach((el) => {
           if(el.id === this.wheelMastersID) {
             this.wheelMastersName = el.name
           }
        })

    },
    viewLock(value) {
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheellocks/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedLock = response.data;
            });

    },
    deleteLock(value) {
      axios
          .delete(
              `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheellocks/${value}`, {
                  headers: {
                      "x-access-token": JSON.parse(this.token)
                  }
              }
          )
          .then(response => {
              if(response.status == 200) {
                 document.getElementById('myModal5').style.display = "none";
                setTimeout(() => {
                    swal({
                        title: 'Delete it successfully',
                        icon: 'success'
                    })
                }, 200)
                setTimeout(() => {
                     window.location.href = '/wheel/lock'
                }, 1000)
              }
          });
    },
    viewLockUpdate(value) {
      document.getElementById('myModal5').style.display = "none";
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheellocks/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedLock = response.data;
                this.showSelectedLock()
            });

    },
    updateLock(value) {
        this.validated = true;
        document.getElementById('myModalUpdate').style.display = "none";
        axios({
                method: 'put',
                url: `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheellocks/${value}`,
                data: qs.stringify({
                    name: this.name,
                    remark: this.remark,
                    bayID: this.bayID,
                    wheelmasterID: this.wheelMastersID
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-access-token': JSON.parse(this.token)
                },
            }).then(response => {
                if (response.status == 200) {
                    console.log(response.data)
                    setTimeout(() => {
                        swal({
                            title: 'Update it successfully',
                            icon: 'success'
                        })
                    }, 200)
                    setTimeout(() => {
                        window.location.href = '/wheel/lock'
                    }, 1000)
                }


            })
            .catch(error => {
                if (error.message == 'Request failed with status code 401') {
                    setTimeout(() => {
                        swal({
                            title: 'Your or password is wrong',
                            icon: 'error'
                        })
                    }, 1000)
                }

            });

    },
    showSelectedLock() {
      this.selectedLock.forEach((el) => {
          this.name = el.name;
          this.remark = el.remark;
          this.lockID = el.id;
          this.bayID = el.bayID

      })
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
