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
                                          <button class="pull-right btn btn-primary btn-sm" :value="lock.id" @click="viewLockUpdate(lock.id)">Update</button>
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
            <nav-side :classLock="classLock"/>
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
               <div class="ibox-title">
                 <p>Home / Wheel / Lock</p>
               </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">

                        <div class="ibox-content">
                          <div class="row">
                              <div class="col-lg-6">
                                  <div class="input-group" style="margin-bottom: 20px">
                                      <a href="/wheel/lock/add" class="btn btn-w-m btn-rounded btn-outline-primary">Create New Lock</a>
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
                                <div class="input-group" style="margin-bottom: 20px">
                                  <input v-model="searchResult" @change="getSearchResult" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
                                      <button type="button"  @click="getSearchResult()" class="btn btn-sm btn-success">Search</button></span>
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
                                      <tr v-for="lock in locks" :key="lock" class="gradeX" v-if="result == true && errorResult === false">
                                          <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewLock(lock.id)">{{'Lock: ' + lock.id || 'Unknown'}}</a></td>
                                          <td>{{lock.name || 'Unknown'}}</td>
                                          <td>{{lock.remark || 'Unknown'}}</td>
                                          <td>{{lock.lastSeen || 'Unknown'}}</td>
                                          <td>{{wheelMastersName || 'Unknown'}}</td>
                                          <td><button class="pull-right btn btn-primary btn-sm" value="lock.id" @click="addTrigger(lock.id)">Trigger</button></td>
                                      </tr>
                                  </tbody>
                              </table>
                              <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                              <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageLock" role="alert">{{messageLock}}</div>

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
import NavSide from '../components/NavSide'

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
      messageLock: null,
      searchResult: '',
      errorResult: false,
      classLock: true

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
                  this.message = "No data available.";
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
                }, 100)
        })
              .catch(error => {
                if (error) {
                  setTimeout(() => {
                    swal({
                      title: 'No Data Found',
                      icon: 'error'
                    })
                  }, 100)
                }

              });
    },
    filterMaster() {
         axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.wheelMasters = response.data;
            this.wheelMastersID = response.data[0].id;
            this.filterLock();
            console.log(response)
        })
    },
    filterLock() {

        axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/wheelmasters/${this.wheelMastersID}/wheellocks`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.locks = response.data;
            this.messageLock = '';
            if(this.locks.length === 0) {
              this.messageLock = "No data available.";

            }
        });
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
                $("#myModal5").modal("hide");
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
        $("#myModal5").modal("hide");
        $("#myModalUpdate").modal("show");
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
  components: {
    NavSide
  },
  mounted () {
    axios
      .get('https://sys2.parkaidemobile.com/api/carparks/',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data;
        this.carparkID = response.data[0].id;
        this.filterMaster()
      })
    },

}

</script>
