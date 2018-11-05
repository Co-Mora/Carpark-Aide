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
import CarPark from '../components/CarPark'
import Dashboard from '../components/Dashboard'

export default {
  name: 'MainChart',
  data () {
    return {
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
        console.log(response)
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
