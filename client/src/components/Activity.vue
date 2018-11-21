
<template>

  <div v-show="isLoggedIn">

    <div id="wrapper">
      <nav-side :classActivity="classActivity"/>
      <div id="page-wrapper" class="gray-bg">
        <NavBar />
        <div class="ibox-title">
          <p>Home / Car Park / Zone</p>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
          <div class="row">
            <div class="col-lg-12">
              <div class="ibox-content">
                <div class="ibox-content">
                  <div class="row">
                    <div class="input-group" style="margin: 0 0 20px 16px">
                      <a href="/carparks/zone/add" class="btn btn-rounded btn-w-m btn-outline-primary">Create New Zone</a>
                    </div>
                    <div class="col-sm-9 m-b-xs">
                      <select v-model="userID" class="form-control m-b" @change="getActivity">
                        <option disabled value="null" key="null">Please Select User Name</option>
                        <option v-for="user in users" :value="user.id" :key="user">{{user.name}}</option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <div class="input-group" style="margin-bottom: 20px">
                        <input v-model="searchResult" @change="getSearchResult" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
                                      <button type="button"  @click="getSearchResult()" class="btn btn-sm btn-primary">Search</button></span>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table v-show="!messageActivity" class="table table-striped">
                      <thead>
                      <tr>
                        <th data-hide="phone,tablet">id(s)</th>
                        <th data-hide="phone,tablet">api</th>
                        <th data-hide="phone,tablet">action</th>
                        <th data-hide="phone,tablet">createDate</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="act in activity" :key="act" class="gradeX" v-if="result == true && errorResult === false">
                        <td class="center">{{act.id || 'Unknown'}}</td>
                        <td class="center">{{act.api || 'Unknown'}}</td>
                        <td class="center">{{act.action || "Unknown"}}</td>
                        <td class="center">{{act.createDate}}</td>
                      </tr>
                      </tbody>
                    </table>
                    <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageActivity" role="alert">{{messageActivity}}</div>
                    <div class="alert alert-warning col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <MainFooter />

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
    name: "Activity",
    data() {
      return {

        activity: null,
        userID: null,
        createdDate: null,
        users: null,
        token: localStorage.getItem("token"),
        isLoggedIn: localStorage.getItem("isLogged"),

        result: true,
        message: '',
        messageActivity: null,
        searchResult: '',
        errorResult: false,
        classActivity: true,
      };
    },
    methods: {
      getSearchResult() {
        if(this.searchResult.length === 0) {
          this.errorResult = false;
          this.message = "";
          this.getActivity()
        }
        axios
          .get(`https://sys2.parkaidemobile.com/api/users/${this.userID}/activity?search=${this.searchResult}`, {
            headers: {
              'x-access-token': JSON.parse(this.token)
            }
          })
          .then(response => {
            this.activity = response.data;
            this.errorResult = false
            this.message = "";
            this.result = true;
            if (this.activity.length === 0) {
              this.errorResult = true;
              this.result = true;
              this.message = "No data available.";
            }
          })

      },
      getActivity() {
        axios
          .get(
            `https://sys2.parkaidemobile.com/api/users/${this.userID}/activity`, {
              headers: {
                "x-access-token": JSON.parse(this.token)
              }
            }
          )
          .then(response => {
            this.activity = response.data;
            this.messageActivity = "";
            if (this.activity.length === 0) {
              this.messageActivity = "No data available.";
            }
            var date;
            var day;
            var month;
            var year;
            var hours;
            var minutes;
            var seconds;
            var formattedTime;
            this.activity.forEach((el) => {

              date = new Date(el.createDate * 1000);
              day = date.getDay();
              month = date.getMonth();
              year = date.getFullYear();
              hours = date.getHours();
              minutes = "0" + date.getMinutes();
              seconds = "0" + date.getSeconds();
              formattedTime = year + '-' + month + '-' + day + '  ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
              el.createDate = formattedTime
            });
            this.messageActivity = '';
            if (this.activity.length === 0) {
              this.messageActivity = "No data available.";
            }
          });

      },

    },
    components: {
      NavSide,
      NavBar,
      MainFooter
    },
    mounted() {
      auth()
      axios
        .get("https://sys2.parkaidemobile.com/api/users", {
          headers: {
            "x-access-token": JSON.parse(this.token)
          }
        })
        .then(response => {
          this.users = response.data;
          this.messageActivity = "";
          if (this.users.length === 0) {
            this.messageActivity = "No data available.";
          } else {
            this.userID = response.data[0].operatorID;
            this.getActivity()
          }


        });

    },
  };



</script>
