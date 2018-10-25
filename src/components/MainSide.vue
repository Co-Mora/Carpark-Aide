<template>
    <div>
        <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome to {{username}}</span>
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

          <CarPark :selected="selected" />

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
import CarPark from './CarPark'
export default {
  name: 'MainSide',
  data () {
    return {
      biz: null,
      selected: '',
      username: localStorage.getItem('email')

    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },
  components: {
    CarPark,
  },
}


</script>
