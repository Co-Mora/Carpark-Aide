<template>
    <div v-show="isLoggedIn">
        <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>CarPark</h5>

                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#" class="dropdown-item">Config option 1</a>
                                    </li>
                                    <li><a href="#" class="dropdown-item">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <input type="text" class="form-control form-control-sm m-b-xs" id="filter"
                                   placeholder="Search in table">

                            <table class="footable table table-stripped" data-page-size="8" data-filter=#filter>
                                <thead>
                                <tr>
                                    <th data-hide="phone,tablet">bay(s)</th>
                                    <th data-hide="phone,tablet">carparkCode</th>
                                    <th data-hide="phone,tablet">cityID</th>
                                    <th data-hide="phone,tablet">image</th>
                                    <th data-hide="phone,tablet">lat</th>
                                    <th data-hide="phone,tablet">lon</th>
                                    <th data-hide="phone,tablet">name</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="car in carpark" :key="car" class="gradeU">
                                        <td>{{car.bay || 'Unknown'}}</td>
                                        <td>{{car.carparkCode || 'Unknown'}}</td>
                                        <td>{{car.cityID   || 'Unknown'}}</td>
                                        <td>{{car.image   || 'Unknown'}}</td>
                                        <td>{{car.lat   || 'Unknown'}}</td>
                                        <td>{{car.lon   || 'Unknown'}}</td>
                                        <td>{{car.name   || 'Unknown'}}</td>
                                        
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
  mounted () {
    axios
      .get('https://sys2.parkaidemobile.com/api/carparks/',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data
      })

    
  }

}


</script>
