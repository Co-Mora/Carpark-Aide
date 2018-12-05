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
              <div class="col-lg-12">
                <div class="ibox ">

                  <div class="ibox-content">
                    <div class="form-group row"><label class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10"><input v-model="password"  placeholder="password" type="password" class="form-control"></div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group row">
                      <div class="col-sm-4 col-sm-offset-2">
                        <button class="btn btn-primary btn-sm" @click="resetPassword()" :disabled="validated === true">Reset</button>
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
    name: 'reset-password',

    data () {
      return {
        validated: false,
        token: localStorage.getItem('token'),
        password: null,
        errors: []
      }
    },
    components: {
      NavSide,
      NavBar,
      MainFooter
    },
    methods: {

      resetPassword() {
        setTimeout(() => {
          $('.alert').alert('close')
        }, 500);
        if (!this.password) {
          this.errors.push('Please fill up the Reset Password');
        } else  {
          axios({
            method: 'post',
            url: 'https://sys2.parkaidemobile.com/api/auth/reset',
            data: qs.stringify({
              password: this.password,
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
                  title: 'Reset it successfully',
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
