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
                          <label>Voucher Name</label>
                          <input type=" text" v-model="name" placeholder="Enter Voucher Name" class="form-control">
                      </div>
                      <div class="form-group">
                          <label>Image Name</label>
                          <input type="file" ref="file" @change="handleFileUpload()"  class="form-control">
                          <img style="width: 10%" :src="image" />
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" @click="updateVoucher(voucherID)" :disabled="validated == true" class="btn btn-primary">Update changes</button>
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
                                    <th data-hide="phone,tablet">Carpark Name</th>
                                    <th data-hide="phone,tablet">name</th>
                                    <th data-hide="phone,tablet">Delete</th>
                                    <th data-hide="phone,tablet">Update</th>

                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedVoucher == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="voucher in selectedVoucher" :key="z" class="gradeX">
                                      <td class="center">{{carparkName || 'Unknown'}}</td>
                                      <td class="center">{{voucher.name || 'Unknown'}}</td>
                                      <td><button class="pull-right btn btn-danger btn-sm" :value="voucher.id" @click="deleteVoucher(voucher.id)">Delete</button></td>
                                      <td>
                                          <button class="pull-right btn btn-primary btn-sm" :value="voucher.id" @click="viewVoucherUpdate(voucher.id)" data-toggle="modal" data-target="#myModalUpdate">Update</button>
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
                                <li class="active">
                                <a href="#">Voucher<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li class="active">
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

                <div class="ibox-content">

                      <div class="col-lg-12">
                          <div class="input-group" style="margin-bottom: 20px">
                            <a href="/carparks/voucher/add" class="btn btn-w-m btn-success">Add Vocuher</a>
                          </div>

                          <div class="input-group">
                            <select v-model="carparkID" class="form-control m-b" @change="addVocuher">
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
                            <h5>Vocuher (Carpark)</h5>
                        </div>
                        <div class="ibox-content">
                            <div class="table-responsive">
                              <table class="table table-striped table-bordered table-hover dataTables-example">
                                 <thead>
                                 <tr>
                                     <th data-hide="phone,tablet">id(s)</th>
                                     <th data-hide="phone,tablet">image</th>
                                     <th data-hide="phone,tablet">carpark Name</th>
                                     <th data-hide="phone,tablet">name</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                      <span v-show="voucher == 0" style="font-size: 20px;">{{message}}</span>
                                     <tr v-for="v in voucher" :key="v" class="gradeX">
                                       <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewVoucher(v.id)">{{'Voucher: ' + v.id || 'Unknown'}}</a></td>
                                         <td class="center"><a :href="v.image"><img style="width: 10%" :src="v.image"></a></td>
                                         <td class="center">{{carparkName || 'Unknown'}}</td>
                                         <td class="center">{{v.name || 'Unknown'}}</td>
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
import axios from "axios";
import qs from 'qs'

export default {
  name: "Zone",
  data() {
    return {

      carpark: null,
      voucher: null,
      voucherID: null,
      file: null,
      image: null,
      name: null,

      carparkID: 'null',
      carparkName: null,
      selectedVoucher: null,
      token: localStorage.getItem("token"),
      isLoggedIn: localStorage.getItem("isLogged"),
      carparkID: null,
      message: null
    };
  },
  methods: {
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
    addVocuher() {
      axios
        .get(
          `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/vouchers`,
          { headers: { "x-access-token": JSON.parse(this.token) } }
        )
        .then(response => {
          this.voucher = response.data;
          if (this.voucher.length === 0) {
            this.message = "Threre's no carpark";
          }
        });
        this.carpark.forEach((el) => {
           if(el.id === this.carparkID) {
             this.carparkName = el.name
           }
        })
    },
    viewVoucher(value) {
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/vouchers/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedVoucher = response.data;
                if (this.selectedVoucher.length === 0) {
                    this.message = "Threre's no carpark";
                }
            });

    },
    deleteVoucher(value) {
      axios
          .delete(
              `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/vouchers/${value}`, {
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
                     window.location.href = '/carparks/voucher'
                }, 1000)
              }
          });
    },
    viewVoucherUpdate(value) {
      document.getElementById('myModal5').style.display = "none";
        axios
            .get(
                `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/vouchers/${value}`, {
                    headers: {
                        "x-access-token": JSON.parse(this.token)
                    }
                }
            )
            .then(response => {
                this.selectedVoucher = response.data;
                this.showSelectedVoucher()
            });
    },
    updateVoucher(value) {
        this.validated = true;
        document.getElementById('myModalUpdate').style.display = "none";
        axios({
                method: 'put',
                url: `https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/vouchers/${value}`,
                data: qs.stringify({
                    name: this.name,
                    image: this.image,
                    carparkID: this.carparkID
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-access-token': JSON.parse(this.token)
                },
            }).then(response => {
                if (response.status == 200) {
                    setTimeout(() => {
                        swal({
                            title: 'Update it successfully',
                            icon: 'success'
                        })
                    }, 200)
                    setTimeout(() => {
                        window.location.href = '/carparks/voucher'
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
    showSelectedVoucher() {
      this.selectedVoucher.forEach((el) => {
          this.name = el.name;
          this.image = el.image;
          this.voucherID = el.id;

      })
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
        this.carparkID = response.data[0].id;
        this.addVocuher()
      });
  }
};
</script>
