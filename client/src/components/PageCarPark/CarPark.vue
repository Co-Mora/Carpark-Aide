<template>
    <div v-show="isLoggedIn">
      <div class="modal inmodal" id="myModalUpdate" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content animated bounceInRight">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
              <h4 class="modal-title">{{carparkName}}</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Carpark Name</label>
                <input type=" text" v-model="name" placeholder="Enter Carpark Name" class="form-control">
              </div>
              <div class="form-group">
                <label>Image Name</label>
                <input type="file" ref="file" @change="handleFileUpload()" class="form-control">
                <img style="width: 10%" :src="image" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="updateCarpark(carparkID)" :disabled="validated == true" class="btn btn-primary">Update changes</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal inmodal " id="myModal5"  role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{carparkName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="table-responsive">
                          <table class="table table-bordered">
                              <thead>
                                  <tr>
                                      <th>name</th>
                                      <th>City Name</th>
                                      <th>Delete</th>
                                      <th>Update</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="car in selectedCarpark" :key="car" class="gradeX">
                                      <td class="center">{{car.name || 'Unknown'}}</td>
                                      <td class="center">{{cityName}}</td>
                                      <td><button class="pull-right btn btn-danger btn-sm" :value="car.id" @click="deleteCarpark(car.id)">Delete</button></td>
                                        <td>
                                          <button class="pull-right btn btn-primary btn-sm" :value="car.id" @click="viewCarparkUpdate(car.id)">Update</button>
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
      <div class="ibox-title">
        <p>Home / Car Park</p>
      </div>
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
                  <div class="col-lg-12">
                      <div class="ibox ">
                          <div class="ibox-content">
                            <div class="row">
                                <div class="col-lg-6">
                                  <div class="input-group" style="margin-bottom: 20px">
                                        <a href="/carparks/add" class="btn btn-rounded btn-w-m btn-outline-primary">Create New Car Park</a>
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  <div class="input-group" style="margin-bottom: 20px">
                                      <input v-model="searchResult" @change="getSearchResult" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
                                        <button type="button"  @click="getSearchResult()" class="btn btn-sm btn-primary">Search</button></span>
                                  </div>
                                </div>
                              </div>
                              <div class="table-responsive">
                                <table v-show="!messageCar > 0 && !message" class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>ID(s)</th>
                                        <th >image</th>
                                        <th>Is Enable</th>
                                        <th>Car Park</th>
                                        <th>Total Bay</th>
                                        <th>contract Type</th>
                                        <th>DateCreated</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="car in carpark" :key="car" class="gradeX" v-if="result == true && errorResult === false">
                                            <td class="center"><a  data-toggle="modal" data-target="#myModal5" @click="viewCarpark(car.id)">{{car.id}}</a></td>
                                            <td class="center-orientation"><a  :href="car.image"><img style="width: 10%" :src="car.image"></a></td>
                                            <td class="center"><span :class="{ 'label-primary': car.isEnable == 1, 'label-danger': car.isEnable == 0 }" class="float-right label">{{car.isEnable == 1 ? 'Enable' : 'Disable'}}</span></td>
                                            <td class="center">{{car.name   || 'Unknown'}}</td>
                                            <td class="center">{{car.bay}}</td>
                                            <td class="center">{{parseInt(car.contractType) === 1 ? 'Lease'  : 'Manage'}}</td>
                                            <td class="center">{{car.createDate}}</td>
                                        </tr>

                                    </tbody>
                                  <tfoot>
                                    <tr v-show="carpark.length > 0">
                                      <td colspan="3">
                                        <ul class="pagination float-lg-left"></ul>
                                      </td>
                                    </tr>
                                  </tfoot>
                                </table>
                                <div class="alert alert-warning col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageCar" role="alert">{{messageCar}}</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

      </div>
    </div>


</template>

<script>
import axios from 'axios'
import CarParkService from '@/services/CarParkService'

import qs from 'qs'
export default {
 name: 'CarPark',
  data () {
    return {
      carpark: null,
      carparkID: null,
      carparkName: null,
      validated: false,
      selectedCarpark: null,
      messageCar: null,
      name: null,
      file: null,
      image: null,

      city: null,
      cityName: null,

      result: true,
      message: '',
      searchResult: '',
      errorResult: false,
      mySearch: [],

      isLoggedIn: localStorage.getItem('isLogged'),
      token: localStorage.getItem('token'),
      getResult: localStorage.getItem('searchResult'),

    }

  },
  methods: {
   
    processFile() {
      let formData = new FormData();
      formData.append('imgUploader', this.file);
      axios.post('https://sys2.parkaidemobile.com/api/images/upload',
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-access-token': JSON.parse(this.token)
          }
        }
      ).then(response => {
        this.image = response.data
        console.log('SUCCESS!!', response.data);
      })
        .catch(function(ex) {
          console.log(ex);
        });

    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log("File:", this.file)
      this.processFile();
    },
    getSearchResult() {
      if(this.searchResult.length === 0) {
        this.errorResult = false;
        this.message = "";
        axios
          .get(
            `https://sys2.parkaidemobile.com/api/carparks`,
            { headers: { "x-access-token": JSON.parse(this.token) } }
          )
          .then(response => {
            this.carpark = response.data;
            if (this.carpark.length === 0) {
              this.message = "No data available.";
            }
          });
      }
        axios
            .get(`https://sys2.parkaidemobile.com/api/carparks?search=${this.searchResult}`, {
                headers: {
                    'x-access-token': JSON.parse(this.token)
                }
            })
            .then(response => {
                this.carpark = response.data
                this.errorResult = false
                this.message = "";
                this.result = true;
                if (this.carpark.length === 0) {
                        this.errorResult = true;
                        this.result = true;
                        this.message = "No data available.";
                }
            })

    },
    viewCarpark(value) {
      axios
          .get(
              `https://sys2.parkaidemobile.com/api/carparks/${value}`, {
                  headers: {
                      "x-access-token": JSON.parse(this.token)
                  }
              }
          )
          .then(response => {
              this.selectedCarpark = response.data;
              this.selectedCarpark.forEach((el) => {
                this.carparkName = el.name
                axios
                  .get(`https://sys2.parkaidemobile.com/api/city`,{headers: { 'x-access-token': JSON.parse(this.token)}})
                  .then(response => {
                    this.city = response.data
                    this.city.forEach((e) => {
                        if(el.cityID === e.id) {
                          this.cityName = e.name
                      }
                    })
                  });

              })

          });


    },
    deleteCarpark(value) {
      axios
          .delete(
              `https://sys2.parkaidemobile.com/api/carparks/${value}`, {
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
                     window.location.href = '/carparks'
                }, 1000)
              }
          });
    },
    viewCarparkUpdate(value) {
      $("#myModal5").modal("hide");
      $("#myModalUpdate").modal("show");

      axios
        .get(
          `https://sys2.parkaidemobile.com/api/carparks/${value}`, {
            headers: {
              "x-access-token": JSON.parse(this.token)
            }
          }
        )
        .then(response => {
          this.selectedCarpark = response.data;

          this.showSelectedCarpark()

        });
    },
    updateCarpark(value) {
      this.validated = true;
      axios({
        method: 'put',
        url: `https://sys2.parkaidemobile.com/api/carparks/${value}`,
        data: qs.stringify({
          name: this.name,
          image: this.image,
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
          }, 200);
          setTimeout(() => {
            window.location.href = '/carparks'
          }, 1000)
        }


      })
        .catch(error => {
          if (error) {
            setTimeout(() => {
              swal({
                title: 'Error occurred',
                icon: 'error'
              })
            }, 100)
          }

        });

    },
    showSelectedCarpark() {
      this.selectedCarpark.forEach((el) => {
        this.name = el.name;
        this.carparkID = el.id;
        this.image = el.image
      })
    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');

    },
    loadData() {
        CarParkService.fetchAllData(JSON.parse(this.token), 'carparks').then(response => {
        this.carpark = response.data
        var date;
        var day;
        var month;
        var year;
        var hours;
        var minutes;
        var seconds;
        var formattedTime;
        this.carpark.forEach((el) => {
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
        this.messageCar = '';
        if(this.carpark.length === 0 ){
          this.messageCar = "No data available.";
        }
      });

    },
    
  },

  mounted () {
    this.loadData()
  },

}


</script>
