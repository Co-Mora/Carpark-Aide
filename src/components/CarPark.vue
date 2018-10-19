<template>
    <div v-show="isLoggedIn">
        <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>CarParks</h5>
                        </div>
                        <div class="ibox-content">
                            <div class="table-responsive">
                              <table class="table table-striped table-bordered table-hover dataTables-example">
                                  <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">bay(s)</th>
                                      <th data-hide="phone,tablet">carparkCode</th>
                                      <th data-hide="phone,tablet">image</th>
                                      <th data-hide="phone,tablet">cityID</th>
                                      <th data-hide="phone,tablet">lat</th>
                                      <th data-hide="phone,tablet">lon</th>
                                      <th data-hide="phone,tablet">name</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <tr v-for="car in carpark" :key="car" class="gradeX">
                                          <td class="center">{{car.bay || 'Unknown'}}</td>
                                          <td class="center">{{car.carparkCode || 'Unknown'}}</td>
                                          <td class="center"><a :href="car.image"><img style="width: 10%" :src="car.image"></a></td>
                                          <td class="center">{{car.cityID   || 'Unknown'}}</td>
                                          <td class="center">{{car.lat   || 'Unknown'}}</td>
                                          <td class="center">{{car.lon   || 'Unknown'}}</td>
                                          <td class="center">{{car.name   || 'Unknown'}}</td>
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

</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters} from 'vuex';

export default {
 name: 'CarPark',
  data () {
    return {
      carpark: null,
      isLoggedIn: localStorage.getItem('isLogged'),
      token: localStorage.getItem('token')
    }

  },
  methods: {
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },
  mounted () {
    axios
      .get('https://sys2.parkaidemobile.com/api/carparks/',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data
      })


  }

}


</script>
