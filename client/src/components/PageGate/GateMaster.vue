<template>
    <div v-show="isLoggedIn">
      <div class="modal inmodal" id="myModalUpdate" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content animated bounceInRight">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
              <h4 class="modal-title">{{carparkName}}</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Pole Name</label>
                <input type="text" v-model="name" placeholder="Enter Pole Name" class="form-control">
              </div>
              <div class="form-group">
              <label>Remark Name</label>
              <input type=" text" v-model="remark" placeholder="Enter Remark Name" class="form-control">
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="updateMaster(gateMasterID)" :disabled="validated == true" class="btn btn-primary">Update changes</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{carparkName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="table-responsive">
                          <table class="table table-striped table-bordered table-hover dataTables-example">
                              <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">Delete</th>
                                      <th data-hide="phone,tablet">Update</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedMaster == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="master in selectedMaster" :key="master" class="gradeX">
                                      <td class="center">{{master.name || 'Unknown'}}</td>
                                      <td><button class="pull-right btn btn-danger btn-sm" :value="master.id" @click="deleteGateMaster(master.id)">Delete</button></td>
                                      <td><button class="pull-right btn btn-primary btn-sm" :value="master.id" @click="viewUpdateMaster(master.id)" >Update</button></td>
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
           <nav-side :classGateMaster="classGateMaster"/>
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
                <p>Home / Gate / Master</p>
              </div>
         <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">

                        <div class="ibox-content">
                          <div class="table-responsive">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="input-group" style="margin-bottom: 20px">
                                  <a href="/get-master/add" class="btn btn-w-m btn-outline-primary btn-rounded">Create New GateMaster</a>
                                </div>
                              </div>
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="carparkID" class="form-control m-b" @change="addGateMaster">
                                  <option disabled selected value="null" key="null">Please Select Carpark Name</option>
                                  <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
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
                              <table v-show="!messageGate  && !message" class="table table-striped table-bordered table-hover dataTables-example">
                                <thead>
                                <tr>
                                  <th data-hide="phone,tablet">id(s)</th>
                                  <th data-hide="phone,tablet">name</th>
                                  <th data-hide="phone,tablet">remark</th>
                                  <th data-hide="phone,tablet">carpark Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="m in getMaster" :key="m" class="gradeX" v-if="result == true && errorResult === false">
                                  <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewMaster(m.id)">{{'Master: ' + m.id || 'Unknown'}}</a></td>
                                  <td class="center">{{m.name || 'Unknown'}}</td>
                                  <td class="center">{{m.remark || 'Unknown'}}</td>
                                  <td class="center">{{carparkName || 'Unknown'}}</td>
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
                              <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                              <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageGate" role="alert">{{messageGate}}</div>

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
import axios from "axios";
import NavSide from '../App/NavSide'
import qs from 'qs'

export default {
  name: "GateMaster",
  data() {
    return {
      name: '',
      remark: '',
      carpark: null,
      getMaster: null,
      carparkID: 'null',
      gateMasterID: null,
      validated: false,
      carparkName: null,
      selectedMaster: null,
      token: localStorage.getItem("token"),
      isLoggedIn: localStorage.getItem("isLogged"),

      result: true,
      message: '',
      messageGate: null,
      searchResult: '',
      errorResult: false,
      mySearch: [],
      classGateMaster: true,
    };
  },
  methods: {
    getSearchResult() {
      if(this.searchResult.length === 0) {
        this.errorResult = false
        this.message = "";
        this.addGateMaster();
      }
      axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/gatemasters?search=${this.searchResult}`, {
          headers: {
            'x-access-token': JSON.parse(this.token)
          }
        })
        .then(response => {
          this.getMaster = response.data;
          this.errorResult = false;
          this.message = "";
          this.result = true;
          if (this.getMaster.length === 0) {
            this.errorResult = true;
            this.result = true;
            this.message =  "No data available.";
          }
        })

    },
    addGateMaster() {
      axios
        .get(
          `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/gatemasters`,
          { headers: { "x-access-token": JSON.parse(this.token) } }
        )
        .then(response => {
          this.getMaster = response.data;
          this.messageGate = '';
          if (this.getMaster.length === 0) {
            this.messageGate =  "No data available.";
          }
        });
        this.carpark.forEach((el) => {
           if(el.id === this.carparkID) {
             this.carparkName = el.name
           }
        })
    },
    viewMaster(value) {
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/gatemasters/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedMaster = response.data;
                this.messageGate = '';
                if (this.selectedMaster.length === 0) {
                    this.messageGate =  "No data available.";
                }
            });

    },
    deleteGateMaster(value) {
      axios
          .delete(
              `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/gatemasters/${value}`, {
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
                }, 200);
                setTimeout(() => {
                     window.location.href = '/get-master'
                }, 1000)
              }
          });
    },
    viewUpdateMaster(value) {
      $("#myModal5").modal("hide");
      $("#myModalUpdate").modal("show");
      axios
        .get(
          `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/gatemasters/${value}`, {
            headers: {
              "x-access-token": JSON.parse(this.token)
            }
          }
        )
        .then(response => {
          this.selectedMaster = response.data;
          this.showSelectedMaster()
        });

    },
    updateMaster(value) {
      this.validated = true;
      document.getElementById('myModalUpdate').style.display = "none";
      axios({
        method: 'put',
        url: `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/gatemasters/${value}`,
        data: qs.stringify({
          name: this.name,
          remark: this.remark,
          carparkID: this.carparkID
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
          }, 200);
          setTimeout(() => {
            window.location.href = '/get-master'
          }, 1000)
        }
      })
        .catch(error => {
          if (error.message == 'Request failed with status code 500') {
            setTimeout(() => {
              swal({
                title: 'No Data Found',
                icon: 'error'
              })
            }, 400);
            setTimeout(() => {
              window.location.href = '/get-master'
            }, 1000)
          }
        });

    },
    showSelectedMaster() {
      this.selectedMaster.forEach((el) => {
        this.name = el.name;
        this.remark = el.remark;
        this.gateMasterID = el.id;

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
  mounted() {
    axios
      .get("https://sys2.parkaidemobile.com/api/carparks/", {
        headers: { "x-access-token": JSON.parse(this.token) }
      })
      .then(response => {
        this.carpark = response.data;
        this.messageGate = '';
        if (this.carpark.length === 0) {
          this.messageGate =  "No data available.";
        } else {
          this.carparkID = response.data[0].id;
          this.addGateMaster()
        }

      });
  }
};
</script>
