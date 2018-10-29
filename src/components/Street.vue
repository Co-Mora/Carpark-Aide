<template>
    <div v-show="isLoggedIn">
      <div class="modal inmodal" id="myModalUpdate" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content animated bounceInRight">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{zoneName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="form-group">
                          <label>Street Name</label>
                          <input type=" text" v-model="name" placeholder="Enter Street Name" class="form-control">
                      </div>
                      <div class="form-group">
                          <label>Image Name</label>
                          <input type="file" ref="file" @change="handleFileUpload()"  class="form-control">
                          <img style="width: 10%" :src="image" />
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" @click="updateStreet(streetID)" :disabled="validated == true" class="btn btn-primary">Update changes</button>
                  </div>
              </div>
          </div>
      </div>
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
                                      <th data-hide="phone,tablet">image</th>
                                      <th data-hide="phone,tablet">Carpark Name</th>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">Delete</th>
                                      <th data-hide="phone,tablet">Update</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedStreet == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="street in selectedStreet" :key="z" class="gradeX">
                                      <td class="center">
                                          <a :href="street.image"><img style="width: 10%" :src="street.image"></a>
                                      </td>
                                      <td class="center">{{zoneName || 'Unknown'}}</td>
                                      <td class="center">{{street.name || 'Unknown'}}</td>
                                      <td><button class="pull-right btn btn-danger btn-sm" :value="street.id" @click="deleteStreet(street.id)">Delete</button></td>
                                      <td>
                                          <button class="pull-right btn btn-primary btn-sm" :value="street.id" @click="viewStreetUpdate(street.id)" data-toggle="modal" data-target="#myModalUpdate">Update</button>
                                      </td>
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
                                <li class="active">
                                    <a href="#">Street<span class="fa arrow"></span></a>
                                        <ul class="nav nav-third-level">
                                            <li class="active">
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
                    <li>
                        <a  href="#"><i class="fa fa-thumb-tack "></i> <span class="nav-label">Parker</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li>
                              <a href="/parker">View Parker</a>
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
                            <h5>Street (Carpark)</h5>
                        </div>
                        <div class="ibox-content">
                            <div class="row">
                              <div class="input-group" style="margin: 0 0 20px 16px">
                                  <a href="/carparks/street/add" class="btn btn-w-m btn-success" style="border-radius: 6px">Add Street</a>
                              </div>
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="carparkID" class="form-control m-b" @change="filterZone">
                                    <option disabled value="null" key="null">Please Select Carpark Name</option>
                                    <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                                </select>
                              </div>
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="zoneID" class="form-control m-b" @change="filterZoneByStreet">
                                    <option disabled  selected value="null" key="null">Please Select Zone Name</option>
                                    <option v-for="z in zone" :value="z.id" :key="z">{{z.name}}</option>
                                </select>
                              </div>
                              <div class="col-sm-3">
                                  <div class="input-group"><input :value="searchResult" ref="my_search" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
                                    <button type="button"  @click.prevent="getSearchResult()" class="btn btn-sm btn-primary">Search</button></span>
                                  </div>
                             </div>
                            </div>
                            <div class="table-responsive">
                              <table class="table table-striped table-bordered table-hover dataTables-example">
                                 <thead>
                                 <tr>
                                     <th data-hide="phone,tablet">id(s)</th>
                                     <th data-hide="phone,tablet">image</th>
                                     <th data-hide="phone,tablet">Zone Name</th>
                                     <th data-hide="phone,tablet">Street Name</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                     <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                     <tr v-for="s in streets" :key="s" class="gradeX" v-if="result == false && errorResult === false">
                                         <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewStreet(s.id)">{{'Level: ' + s.id || 'Unknown'}}</a></td>
                                         <td class="center"><a :href="s.image"><img style="width: 10%" :src="s.image"></a></td>
                                         <td class="center">{{zoneName || 'Unknown'}}</td>
                                         <td class="center">{{s.name || 'Unknown'}}</td>
                                     </tr>
                                     <tr v-for="search in mySearch" :key="search" class="gradeX" v-show="mySearch.length > 0">
                                         <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewStreet(search.id)">{{'Level: ' + search.id || 'Unknown'}}</a></td>
                                         <td class="center"><a :href="search.image"><img style="width: 10%" :src="search.image"></a></td>
                                         <td class="center">{{zoneName || 'Unknown'}}</td>
                                         <td class="center">{{search.name || 'Unknown'}}</td>
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
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Street',
  data () {
    return {
      carpark: null,
      zone: [],
      name: null,
      image: null,
      file: null,
      streets: null,
      streetID: null,
      zoneID: 'null',
      selectedStreet: null,
      carparkID: 'null',
      validated: false,
      zoneName: null,

      result: false,
      message: '',
      searchResult: null,
      errorResult: false,
      mySearch: [],

      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },
  methods: {
    getSearchResult() {
      this.searchResult = this.$refs.my_search.value
      if(!this.searchResult) {
        this.result = false;
        this.mySearch = [];
        this.errorResult = false;
        this.message = ''
        return false
      }
      console.log(this.levels)
      this.streets.forEach((el) => {
        if(this.searchResult.length === 0) {
            return false
        }
        if(this.searchResult.toLowerCase() === el.name.toLowerCase() || this.searchResult.toUpperCase() === el.name.toUpperCase()) {
          this.mySearch.push(el)
          console.log(this.mySearch)
          this.result = true;
          this.errorResult = false;
          //window.location.href=`/carparks?search=${this.searchResult}`

        } else {
          this.errorResult = true;
          this.message = 'No Avaliable Data'
          return false;
        }
      })
      this.mySearch.forEach((el) => {
        if(this.searchResult.toLowerCase() !== el.name.toLowerCase() || this.searchResult.toUpperCase() !== el.name.toUpperCase()) {
          this.mySearch = [];
          this.errorResult = true;
          this.message = "No Avaliable Data"
        } else {
          this.message = ""
          this.errorResult = false;
        }
      })

    },
    processFile() {
      let formData = new FormData();
      formData.append('imgUploader', this.file);
      axios.post( 'https://sys2.parkaidemobile.com/api/images/upload',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': JSON.parse(this.token)
                }
              }
            ).then(response => {
              this.image = response.data
              console.log('SUCCESS!!', response.data);
        })
        .catch(function(ex){
          console.log(ex);
        });

    },
    handleFileUpload() {
       this.file = this.$refs.file.files[0];
       console.log("File:", this.file)
       this.processFile();
    },
    filterZone() {
       axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.zone = response.data
            this.zoneID = response.data[0].id
            this.filterZoneByStreet()
        })
        console.log('worked')
    },
    filterZoneByStreet() {
        axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones/${this.zoneID}/streets`,{headers: { 'x-access-token': JSON.parse(this.token)}})
        .then(response => {
            this.streets = response.data
            // if(this.streets.length === 0) {
            //       this.message = "Threre's no carpark";
            // }
        })
        this.zone.forEach((el) => {
           if(el.id === this.zoneID) {
             this.zoneName = el.name
           }
        })
    },
    viewStreet(value) {
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones/${this.zoneID}/streets/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedStreet = response.data;
                // if (this.selectedStreet.length === 0) {
                //     this.message = "Threre's no carpark";
                // }
            });

    },
    deleteStreet(value) {
      axios
          .delete(
              `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones/${this.zoneID}/streets/${value}`, {
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
                     window.location.href = '/carparks/street'
                }, 1000)
              }
          });
    },
    viewStreetUpdate(value) {
      document.getElementById('myModal5').style.display = "none";
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones/${this.zoneID}/streets/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedStreet = response.data;
                this.showSelectedStreet()
            });
    },
    updateStreet(value) {
        this.validated = true;
        document.getElementById('myModalUpdate').style.display = "none";
        axios({
                method: 'put',
                url: `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/zones/${this.zoneID}/streets/${value}`,
                data: qs.stringify({
                    name: this.name,
                    image: this.image,
                    zoneID: this.zoneID
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
                        window.location.href = '/carparks/street'
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
    showSelectedStreet() {
      this.selectedStreet.forEach((el) => {
          this.name = el.name;
          this.image = el.image;
          this.streetID = el.id;

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
        this.filterZone()
      })
    }
}
</script>
