<template>
    <div v-show="isLoggedIn">
        <NavSide />
        <div id="page-wrapper" class="gray-bg">

        <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
          </div>
        <div class="navbar-header">
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome {{email}}</span>
                    </li>
                      <li class="dropdown">
                    <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                        <i style="font-size: 22px" class="fa fa-qrcode"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <div class="dropdown-messages-box">
                                <a class="dropdown-item float-left" href="/">
                                    <img alt="image" class="rounded-circle" :src="Image">
                                </a>
                                <div>
                                    <strong>Park Bill</strong> . <br>
                                    <small class="text-muted">Authorized - 11.06.2014</small>

                                </div>
                            </div>
                        </li>
                        <li style="margin: 1rem 0" class="dropdown-divider"></li>
                        <li>
                            <div class="dropdown-messages-box">
                                <a class="dropdown-item float-left" href="/">
                                    <img alt="image" class="rounded-circle" :src="Image">
                                </a>
                                <div>
                                    <strong>Park Aide </strong>. <br>
                                    <small class="text-muted">Authorized - 11.06.2014</small>
                                </div>
                            </div>
                        </li>
                    </ul>
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

          <dashboard />


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
</template>

<script>
import axios from 'axios'
import NavSide from './NavSide'
import CarPark from '../PageCarPark/CarPark'
import Dashboard from './Dashboard'
import Image from '../../../static/img/icon.png'

export default {
  name: 'MainChart',
  data () {
    return {
      Image,
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
      email: localStorage.getItem('email')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },
  components: {
    NavSide,
    CarPark,
    Dashboard
  },

  mounted() {
    axios({
    method: 'get',
    url: 'https://sys2.parkaidemobile.com/api/auth/me',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
         'x-access-token': JSON.parse(this.token)
    },
    }).then(response => {
        if(response.data.status == 200) {
            window.location.href = '/'
        }

    })
    .catch(error => {
        if(error.message == 'Request failed with status code 500') {
            window.location.href = '/login'
        }

    });
  }
}


</script>
