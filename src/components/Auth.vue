<template>
    <div class="gray-bg" style="height: 1200px">
         <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">CA</h1>

            </div>
            <h3>Welcome to IN+</h3>
            <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
                <!--Continually expanded and constantly improved Inspinia Admin Them (IN+)-->
            </p>
            <p>Login in. To see it in action.</p>
                <div class="form-group">
                    <input type="email" v-model="email" class="form-control" placeholder="Email Address" required="">
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" class="form-control" placeholder="Password" required="">
                </div>
                <button class="btn btn-primary block full-width m-b" @click="auth">Login</button>
            <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
    </div>
        <Carpark v-show="false" :loggedIn="loggedIn" />
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

import NavSide from './NavSide'
import Carpark from './Carpark'
export default {
  name: 'Level',
  
  data () {
    return {
      isLoggedIn: false,
      token: null,
      email: null,
      password: null,
      message: null,
    }
  },
  components: {
      Carpark
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
                 const parsed = JSON.stringify(this.token)
                localStorage.setItem('token', parsed);
                 let loggedIn = JSON.stringify(this.isLoggedIn)
                localStorage.setItem('isLogged', loggedIn);
                window.location.href = '/'
            }
            
        })
        .catch(error => {
            if(error.message == 'Request failed with status code 401') {
                 setTimeout(() => {
                    swal({
                        title: 'Your Email or password is wrong',
                        icon: 'error'
                    })
                }, 1000)
            }
           
        });
    },
  },

  mounted() {
       
    },
}

</script>
