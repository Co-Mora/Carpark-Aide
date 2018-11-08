<template>
  <div class="gray-bg" style="height: 1200px">
    <div class="middle-box text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <img alt="image" class="-square-full" :width="100" :src="Image" />

          <h1 class="logo-name"></h1>

        </div>
        <h2>Park Aide</h2>
        <p>Welcome to Car Park Aide.</p>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name" required="">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" required="">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" required="">
        </div>
        <div class="form-group">
          <div class="checkbox i-checks"><label> <input type="checkbox" v-model="checked"><i></i> Agree the terms and policy </label></div>
        </div>
        <button type="submit" class="btn btn-primary block full-width m-b">Register</button>

        <p class="text-muted text-center"><small>Already have an account?</small></p>
        <a class="btn btn-sm btn-white btn-block" href="/login">Login</a>
        <p class="m-t"> <small>Car Park Aide web app &copy; 2018</small> </p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import Image from '../../static/img/icon.png'

  export default {
    name: 'Register',

    data () {
      return {
        Image,
        isLoggedIn: false,
        token: null,
        name: null,
        email: null,
        checked: false,
        password: null,
        message: null,
      }
    },

    methods: {

      auth() {
        axios({
          method: 'post',
          url: 'https://sys2.parkaidemobile.com/api/auth/register',
          data: qs.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }).then(response => {
          if(response.data.auth == true) {
            this.token = response.data.token
            this.isLoggedIn = true
            const parsed = JSON.stringify(this.token);
            localStorage.setItem('token', parsed);
            let loggedIn = JSON.stringify(this.isLoggedIn)
            localStorage.setItem('isLogged', loggedIn);
            localStorage.setItem('email', this.email);
            window.location.href = '/'
          }

        })
          .catch(error => {
            if(error.message) {
              setTimeout(() => {
                swal({
                  title: 'Name Is Required',
                  icon: 'error'
                })
              }, 200)
            }

          });
      },
    },


  }

</script>
