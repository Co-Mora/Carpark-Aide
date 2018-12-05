<template>
  <div>
    <div>
      <div id="wrapper">
        <NavSide />
        <div id="page-wrapper" class="gray-bg">
          <NavBar />
          <div class="ibox-title">
            <p>Home / Settings / Reset Password</p>
          </div>
          <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-6" v-for="error in errors" :key="error">
                  <div class=" alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    {{error}}
                  </div>
                </div>
              </div>
              <div class="passwordBox animated fadeInDown">
                <div class="row">

                  <div class="col-md-12">
                    <div class="ibox-content">

                      <h2 class="font-bold">Forgot password</h2>

                      <p>
                        Enter your email address and your password will be reset and emailed to you.
                      </p>

                      <div class="row">

                        <div class="col-lg-12">
                            <div class="form-group">
                              <input type="email" v-model="email" class="form-control" placeholder="Email address" required="">
                            </div>
                          <button class="btn btn-primary block full-width m-b" :disabled="validated === true"  @click="fogotPassword()">Send new password</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <MainFooter />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import NavSide from '../App/NavSide'
  import NavBar from '../App/NavBar'
  import MainFooter from '../App/MainFooter'
  export default {
    name: 'forgot-password',

    data () {
      return {
        validated: false,
        token: localStorage.getItem('token'),
        email: null,
        errors: []
      }
    },
    components: {
      NavSide,
      NavBar,
      MainFooter
    },
    methods: {

      fogotPassword() {
        setTimeout(() => {
          $('.alert').alert('close')
        }, 500);
        if (!this.email) {
          this.errors.push('Please fill up the Email Form');
        } else  {
          axios({
            method: 'post',
            url: 'https://sys2.parkaidemobile.com/api/auth/forgot',
            data: qs.stringify({
              email: this.email,
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'x-access-token': JSON.parse(this.token)
            },
          }).then(response => {
            console.log(response);
            this.validated = true;
            setTimeout(() => {
              swal({
                title: 'New Password Is (aaaaaaaa)',
                icon: 'success'
              })
            }, 200);
            this.password = null;
          })
            .catch(error => {
              if(error.message) {
                setTimeout(() => {
                  swal({
                    title: 'Error Found',
                    icon: 'error'
                  })
                }, 200)
              }

            });
        }

      },
    }


  }

</script>
