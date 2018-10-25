<template>
    <div v-show="isLoggedIn">
      <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{gateMasterName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="table-responsive">
                          <table class="table table-striped table-bordered table-hover dataTables-example">
                              <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">Delete</th>
                                      <th data-hide="phone,tablet">Update</th>


                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedCarpark == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="car in selectedCarpark" :key="car" class="gradeX">
                                      <td class="center">{{car.name || 'Unknown'}}</td>
                                      <td><button class="pull-right btn btn-danger btn-sm" :value="car.id" @click="deleteCarpark(car.id)">Delete</button></td>
                                      <td><button class="pull-right btn btn-primary btn-sm" :value="car.id" @click="updateCarpark(car.id)">Update</button></td>

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
                          <div class="col-lg-6">
                              <div class="input-group" style="margin-bottom: 20px">
                                <a href="/carparks/add" class="btn btn-w-m btn-success">Add Carpark</a>
                              </div>
                        </div>
                            <div class="table-responsive">
                              <table class="table table-striped table-bordered table-hover dataTables-example">
                                  <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">ID(s)</th>
                                      <th data-hide="phone,tablet">carparkCode</th>
                                      <th data-hide="phone,tablet">image</th>
                                      <th data-hide="phone,tablet">cityID</th>
                                      <th data-hide="phone,tablet">lat</th>
                                      <th data-hide="phone,tablet">lon</th>
                                      <th data-hide="phone,tablet">name</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <span v-show="carpark == 0" style="font-size: 20px;">{{message}}</span>
                                      <tr v-for="car in carpark" :key="car" class="gradeX">
                                          <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewCarpark(car.id)">{{'Car: ' + car.id || 'Unknown'}}</a></td>
                                          <td class="center">{{car.carparkCode || 'Unknown'}}</td>
                                          <td class="center"><a :href="car.image"><img style="width: 20%" :src="car.image"></a></td>
                                          <td class="center">{{car.cityID   || 'Unknown'}}</td>
                                          <td class="center">{{car.lat   || 'Unknown'}}</td>
                                          <td class="center">{{car.lon   || 'Unknown'}}</td>
                                          <td class="center">{{car.name   || 'Unknown'}}</td>
                                      </tr>
                                  </tbody>
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
import { mapActions, mapGetters} from 'vuex';

export default {
 name: 'CarPark',
  data () {
    return {
      carpark: null,
      selectedCarpark: null,
      isLoggedIn: localStorage.getItem('isLogged'),
      token: localStorage.getItem('token'),

    }

  },
  methods: {
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
              if (this.selectedCarpark.length === 0) {
                  this.message = "Threre's no carpark";
              }
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
                 document.getElementById('myModal5').style.display = "none";
                setTimeout(() => {
                    swal({
                        title: 'Delete it successfully',
                        icon: 'success'
                    })
                }, 200)
                setTimeout(() => {
                     window.location.href = '/carparks'
                }, 1000)
              }
          });
    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');

    },
  },
  mounted () {
    axios
      .get('https://sys2.parkaidemobile.com/api/carparks/',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data
        if (this.carpark.length === 0) {
            this.message = "No Carpark Found";
        }
      })

  },

}


</script>
