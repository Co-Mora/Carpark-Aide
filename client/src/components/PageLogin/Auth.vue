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
                    <input type="email" v-model="email" class="form-control" placeholder="Email Address" required="">
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" class="form-control" placeholder="Password" required="">
                </div>
                <button class="btn btn-primary block full-width m-b" @click="auth">Login</button>
                <a href="#"><small>Forgot password?</small></a>
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
  name: 'Level',

  data () {
    return {
      Image,
      isLoggedIn: false,
      token: null,
      email: null,
      password: null,
      message: null,
    }
  },

  methods: {

    auth() {
        axios({
        method: 'post',
        url: 'https://sys2.parkaidemobile.com/api/auth/login',
        data: qs.stringify({
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
                        title: 'Your Email or password is wrong',
                        icon: 'error'
                    })
                }, 200)
            }

        });
    },
  },
  mounted() {
    if(localStorage.getItem("token")) {
      window.location.href = '/'
    }
  }


}

</script>
