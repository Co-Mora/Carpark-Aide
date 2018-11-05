

<template>

  <div v-show="isLoggedIn">
    <div id="wrapper">
      <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
          <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
              <div class="dropdown profile-element">
                <img alt="image" class="rounded-circle" :src="Image" />
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
                  <h5>VoucherBuy</h5>
                </div>
                <div class="ibox-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <div class="input-group" style="margin-bottom: 20px">
                        <input v-model="searchResult" @change="getSearchResult" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
                                      <button type="button"  @click="getSearchResult()" class="btn btn-sm btn-primary">Search</button></span>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover dataTables-example">
                      <thead>
                      <tr>
                        <th data-hide="phone,tablet">id(s)</th>
                        <th data-hide="phone,tablet">Mobile</th>
                        <th data-hide="phone,tablet">Name</th>
                        <th data-hide="phone,tablet">Email</th>
                        <th data-hide="phone,tablet">Voucher Name</th>
                        <th data-hide="phone,tablet">Image</th>

                      </tr>
                      </thead>
                      <tbody>
                      <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                      <tr v-for="voucher in voucherBuy" :key="voucher" class="gradeX"  v-if="result == true && errorResult === false">
                        <td class="center">{{voucher.voucherID || 'Unknown'}}</td>
                        <td class="center">{{voucher.mobile || 'Unknown'}}</td>
                        <td class="center">{{voucher.SubscriberName || 'Unknown'}}</td>
                        <td class="center">{{voucher.email || 'Unknown'}}</td>
                        <td class="center">{{voucher.VoucherName || 'Unknown'}}</td>
                        <td class="center">{{voucher.image || 'Unknown'}}</td>
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

  export default {
    name: "VoucherBuy",
    data() {
      return {
        voucherBuy: null,
        token: localStorage.getItem("token"),
        isLoggedIn: localStorage.getItem("isLogged"),
        result: true,
        message: '',
        searchResult: '',
        errorResult: false,
      };
    },
    methods: {
      getSearchResult() {
        if(this.searchResult.length === 0) {
          this.errorResult = false;
          this.message = "";
          axios
            .get(
              `https://sys2.parkaidemobile.com/api/voucherBuy`, {
                headers: {
                  "x-access-token": JSON.parse(this.token)
                }
              }
            )
            .then(response => {
              this.voucherBuy = response.data;
            });
        }
        axios
          .get(`https://sys2.parkaidemobile.com/api/voucherBuy?search=${this.searchResult}`, {
            headers: {
              'x-access-token': JSON.parse(this.token)
            }
          })
          .then(response => {
            this.voucherBuy = response.data;
            this.errorResult = false;
            this.message = "";
            this.result = true;
            if (this.voucherBuy.length === 0) {
              this.errorResult = true;
              this.result = true;
              this.message = "No Data Available";
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
          `https://sys2.parkaidemobile.com/api/voucherBuy`, {
            headers: {
              "x-access-token": JSON.parse(this.token)
            }
          }
        )
        .then(response => {
          this.voucherBuy = response.data;
          console.log(response)
          if (this.voucherBuy.length === 0) {
            this.message = "voucherBuy Not Found";
          }
        });
    }
  };

</script>
