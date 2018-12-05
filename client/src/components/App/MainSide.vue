<template>
    <div>
        <div id="page-wrapper" class="gray-bg">
        <NavBar />
      <div class="wrapper wrapper-content animated fadeInRight">

          <CarPark />

        </div>
        <MainFooter />

        </div>
    </div>
</template>

<script>
import CarPark from '../PageCarPark/CarPark'
import NavBar from './NavBar'
import MainFooter from './MainFooter'
export default {
  name: 'MainSide',
  data () {
    return {
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
      email: localStorage.getItem('email')
    }
  },
  components: {
    CarPark,
    NavBar,
    MainFooter
  },
  mounted() {
  }
}

</script>
