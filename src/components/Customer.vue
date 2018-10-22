

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
                        <a href="#"><i class="fa fa-globe"></i> <span class="nav-label">Cities</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse">
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
                    <li class="active">
                        <a  href="#"><i class="fa fa-address-book "></i> <span class="nav-label">Customers</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li class="active">
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

                <div class="col-lg-12">
                    <div class="input-group" style="margin-bottom: 20px">
                        <a href="/customers/add" class="btn btn-w-m btn-success">Add Customer</a>
                    </div>
                </div>
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5>Customers</h5>
                            </div>
                            <div class="ibox-content">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover dataTables-example">
                                        <thead>
                                            <tr>
                                                <th data-hide="phone,tablet">id(s)</th>
                                                <th data-hide="phone,tablet">Name</th>
                                                <th data-hide="phone,tablet">Contact</th>
                                                <th data-hide="phone,tablet">National ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <span v-show="customers == 0" style="font-size: 20px;">{{message}}</span>
                                            <tr v-for="cus in customers" :key="cus" class="gradeX">
                                                <td class="center">{{cus.id}}</td>
                                                <td class="center">{{cus.name || 'Unknown'}}</td>
                                                <td class="center">{{cus.contact1 || 'Unknown'}}</td>
                                                <td class="center">{{cus.nationalID || 'Unknown'}}</td>
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
    name: "Customer",
    data() {
        return {
            customers: null,
            selectedCustomer: null,
            token: localStorage.getItem("token"),
            isLoggedIn: localStorage.getItem("isLogged"),
            message: null
        };
    },
    methods: {
        addCustomer() {

            },
            logout() {
                localStorage.removeItem('isLogged');
                localStorage.removeItem('token');
            }
    },
    mounted() {
      axios
          .get(
              `https://sys2.parkaidemobile.com/api/customers`, {
                  headers: {
                      "x-access-token": JSON.parse(this.token)
                  }
              }
          )
          .then(response => {
              this.customers = response.data;
              if (this.customers.length === 0) {
                  this.message = "Threre's no carpark";
              }
          });
    }
};

</script>
