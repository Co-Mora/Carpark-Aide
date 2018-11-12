<template>
  <div v-show="isLoggedIn">
    <div id="wrapper">
      <nav-side :classUsers="classUsers"/>
      <div id="page-wrapper" class="gray-bg">
        <NavBar />
        <div class="ibox-title">
          <p>Home / Location / Countries</p>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
          <div class="row">
            <div class="col-lg-12">
              <div class="ibox ">

                <div class="ibox-content">
                  <div class="row">
                    <div class="col-sm-12">
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
                        <th data-hide="phone,tablet">operatorID</th>
                        <th data-hide="phone,tablet">email</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="user in users" :key="user" class="gradeU" v-if="result == true && errorResult === false">
                        <td class="center">{{user.id}}</td>
                        <td class="center">{{user.name || 'Unknown'}}</td>
                        <td class="center">{{user.operatorID || 'Unknown'}}</td>
                        <td class="center">{{user.email || 'Unknown'}}</td>
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
                    <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageUsers" role="alert">{{messageUsers}}</div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
       <main-footer />

      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import NavSide from '../components/NavSide'
  import NavBar from '../components/NavBar'
  import MainFooter from '../components/MainFooter'
  export default {
    name: "Users",
    data() {
      return {
        users: null,
        token: localStorage.getItem("token"),
        isLoggedIn: localStorage.getItem("isLogged"),

        result: true,
        message: '',
        messageUsers: null,
        searchResult: '',
        errorResult: false,
        classUsers: true
      };
    },
    methods: {
      getSearchResult() {
        if(this.searchResult.length === 0) {
          this.errorResult = false;
          this.message = "";
          axios
            .get(
              `https://sys2.parkaidemobile.com/api/users`,
              { headers: { "x-access-token": JSON.parse(this.token) } }
            )
            .then(response => {
              this.users = response.data;


              this.messageUsers = '';
              if (this.users.length === 0) {
                this.message = "No data available.";
              }
            });
        }
        axios
          .get(`https://sys2.parkaidemobile.com/api/users?search=${this.searchResult}`, {
            headers: {
              'x-access-token': JSON.parse(this.token)
            }
          })
          .then(response => {
            this.users = response.data;
            this.errorResult = false;
            this.message = "";
            this.result = true;
            if (this.users.length === 0) {
              this.errorResult = true;
              this.result = true;
              this.message = "No data available.";
            }
          })


      },
      logout() {
        localStorage.removeItem('isLogged');
        localStorage.removeItem('token');
      }
    },
    components: {
      NavSide,
      NavBar,
      MainFooter
    },
    mounted() {
      axios
        .get(
          `https://sys2.parkaidemobile.com/api/users`,
          { headers: { "x-access-token": JSON.parse(this.token) } }
        )
        .then(response => {
          this.users = response.data;
          this.messageUsers = '';
          if (this.users.length === 0) {
            this.messageUsers = "No data available.";
          }
        });
    }
  };
</script>
