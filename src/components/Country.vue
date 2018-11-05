<template>
    <div v-show="isLoggedIn">
         <div id="wrapper">
             <nav-side :classCountry="classCountry"/>
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
                            <h5>Countries</h5>
                        </div>
                        <div class="ibox-content">
                          <div class="row">
                              <div class="col-sm-6">
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
                                     <th data-hide="phone,tablet">image</th>
                                     <th data-hide="phone,tablet">name</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                    <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                     <tr v-for="s in country" :key="s" class="gradeU" v-if="result == true && errorResult === false">
                                         <td class="center">{{s.id || 'Unknown'}}</td>
                                         <td class="center"><a :href="s.image"><img style="width: 10%" :src="s.image"></a></td>
                                         <td class="center">{{s.name || 'Unknown'}}</td>
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
import NavSide from '../components/NavSide'

export default {
  name: "Zone",
  data() {
    return {
      country: null,
      countryID: null,
      stateID: null,
      state: null,
      carparkID: 'null',
      token: localStorage.getItem("token"),
      isLoggedIn: localStorage.getItem("isLogged"),
      carparkID: null,

      result: true,
      message: '',
      searchResult: '',
      errorResult: false,
      classCountry: true
    };
  },
  methods: {
    getSearchResult() {
      if(this.searchResult.length === 0) {
        this.errorResult = false
        this.message = "";
        axios
          .get(
            `https://sys2.parkaidemobile.com/api/country`,
            { headers: { "x-access-token": JSON.parse(this.token) } }
          )
          .then(response => {
            this.country = response.data;
            this.countryID = response.data[0].id
            if (this.country.length === 0) {
              this.message = "No Data Found";
            }
          });
      }
        axios
            .get(`https://sys2.parkaidemobile.com/api/country?search=${this.searchResult}`, {
                headers: {
                    'x-access-token': JSON.parse(this.token)
                }
            })
            .then(response => {
                this.country = response.data
                this.errorResult = false
                this.message = "";
                this.result = true;
                if (this.country.length === 0) {
                        this.errorResult = true;
                        this.result = true;
                        this.message = "No Data Avaliable";
                }
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
      .get(
        `https://sys2.parkaidemobile.com/api/country`,
        { headers: { "x-access-token": JSON.parse(this.token) } }
      )
      .then(response => {
        this.country = response.data;
        this.countryID = response.data[0].id
        if (this.country.length === 0) {
          this.message = "Threre's no carpark";
        }
      });
  }
};
</script>
