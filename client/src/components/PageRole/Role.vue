

<template>

<div v-show="isLoggedIn">
    <div id="wrapper">
       <NavSide :classRoles="classRoles"/>
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
              <p>Home / Role</p>
            </div>
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="input-group" style="margin: 0 0 20px 16px">
                        <a href="/role/add" class="btn btn-rounded btn-w-m btn-outline-primary">Create New Role</a>
                    </div>
                    <div class="col-lg-12">
                        <div class="ibox ">
                            <div class="ibox-content">
                                <div class="table-responsive">
                                    <table v-show="!messageRoles  && !message" class="table table-striped table-bordered table-hover dataTables-example">
                                        <thead>
                                            <tr>
                                                <th data-hide="phone,tablet">id(s)</th>
                                                <th data-hide="phone,tablet">Roles</th>
                                                <th data-hide="phone,tablet">Roles</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="role in roles" :key="role" class="gradeX" v-if="result == true && errorResult === false">
                                                <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewBank(b.id)">{{role.id}}</a></td>
                                                <td class="center">{{role.title || 'Unknown'}}</td>
                                                <td class="center">{{role.rules || 'Unknown'}}</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="alert alert-warning col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                  <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageRoles" role="alert">{{messageRoles}}</div>

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


export default {
    name: "Role",
    data() {
        return {
            roles: null,
            token: localStorage.getItem("token"),
            isLoggedIn: localStorage.getItem("isLogged"),
            result: true,
            message: '',
            errorResult: false,
            classRoles: true,
            messageRoles: null
        };
    },
    methods: {
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
          .get(
              `https://sys2.parkaidemobile.com/api/roles`, {
                  headers: {
                      "x-access-token": JSON.parse(this.token)
                  }
              }
          )
          .then(response => {
              this.roles = response.data;
              this.messageRoles = '';
              if (this.roles.length === 0) {
                  this.messageRoles = "No data available.";
              }
          });
    }
};

</script>
