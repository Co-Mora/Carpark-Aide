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
import CarPark from './CarPark'
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
        window.location.href = '/carparks'
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
