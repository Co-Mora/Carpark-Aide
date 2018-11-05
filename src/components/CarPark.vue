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
                          <table class="table table-striped table-bordered table-hover dataTables-example">
                              <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">City Name</th>
                                      <th data-hide="phone,tablet">Delete</th>
                                      <th data-hide="phone,tablet">Update</th>
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
        <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>CarParks</h5>
                        </div>
                        <div class="ibox-content">
                          <div class="row">
                              <div class="col-lg-6">
                                <div class="input-group" style="margin-bottom: 20px">
                                      <a href="/carparks/add" class="btn btn-w-m btn-success">Add Carpark</a>
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
                              <table class="footable table table-stripped" data-page-size="6">
                                  <thead>
                                  <tr>
                                      <th data-toggle="true">ID(s)</th>
                                      <th >image</th>
                                      <th>isEnable</th>
                                      <th>name</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                      <tr v-for="car in carpark" :key="car" class="gradeX" v-if="result == true && errorResult === false">
                                          <td class="center"><a  data-toggle="modal" data-target="#myModal5" @click="viewCarpark(car.id)">{{'Car: ' + car.id || 'Unknown'}}</a></td>
                                          <td class="center"><a :href="car.image"><img style="width: 10%" :src="car.image"></a></td>
                                          <td class="center"><span :class="{ 'label-primary': car.isEnable == 1, 'label-danger': car.isEnable == 0 }" class="float-right label">{{car.isEnable == 1 ? 'Enable' : 'Disable'}}</span></td>
                                          <td class="center">{{car.name   || 'Unknown'}}</td>
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
                            </div>

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
 name: 'CarPark',
  data () {
    return {
      carpark: null,
      carparkID: null,
      carparkName: null,
      validated: false,
      selectedCarpark: null,

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
              this.message = "No Data Found";
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
                        this.message = "No Data Avaliable";
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
  },
  mounted () {

    axios
      .get(`https://sys2.parkaidemobile.com/api/carparks/`,{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data
      });



  },

}


</script>
