<template>
    <div>
          <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
            <form role="search" class="navbar-form-custom" action="search_results.html">
                <div class="form-group">
                    <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
                </div>
            </form>
        </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
                    <span class="m-r-sm text-muted welcome-message">Welcome to Carpark Aide.</span>
                </li>

                <li>
                    <router-link to="/">
                        <i class="fa fa-sign-out"></i> Log out
                    </router-link>
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
      selected: ''
    }
  },
  components: {
    CarPark,
  },
}


</script>
