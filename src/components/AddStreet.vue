<template>
    <div>
         <div id="wrapper">
             <NavSide />
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
                        <a href="login.html">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>

            </nav>
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
                        <div class="ibox-title">
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#" class="dropdown-item">Config option 1</a>
                                    </li>
                                    <li><a href="#" class="dropdown-item">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ibox-content">
                                <!-- class for error message has-error -->
                                <form method="post" action="https://carpark.parkingnetworksystems.com/biz/f69b0999-2043-48bb-8216-28306ada469a/operator/5628788a-d084-4ee1-975f-45f5680a2c5a/carpark/459bb0b4-e967-422c-9da9-0f172682e552/zone/3500fc40-ae6d-43a6-bc11-50d15b05b66e/street">
                                  <div class="form-group row"><label class="col-sm-2 col-form-label">Street Name</label>
                                      <div class="col-sm-10"><input v-model="StreetName"  placeholder="Street Name" type="text" class="form-control"></div>
                                  </div>
                                  <div class="hr-line-dashed"></div>
                                  <div class="form-group row"><label class="col-sm-2 col-form-label">Street Image</label>
                                      <div class="col-sm-10"><input  @change="processFile($event)" type="file" placeholder="type here bay count1" class="form-control"></div>
                                  </div>
                                   <div class="form-group row"><label class="col-sm-2 col-form-label">Street URL</label>
                                      <div class="col-sm-10"><input  v-model="streetUrl" type="text" placeholder="type your street url" class="form-control"></div>
                                  </div>

                                   <div class="hr-line-dashed"></div>
                                  <div class="form-group row">
                                      <div class="col-sm-4 col-sm-offset-2">
                                          <button class="btn btn-primary btn-sm" type="submit" v-on:click.prevent="addStreet">Submit</button>
                                      </div>
                                  </div>
                                </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
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
// import $ from 'jquery'
// window.$ = window.jQuery = $
export default {
  name: 'AddZone',
  data () {
    return {

      streetName: null,
      streetImage: null,
      streetUrl: null,
      errors: []
    }
  },
  components: {
    NavSide
  },
  methods: {

    processFile (event) {
      this.streetImage = event.target.files[0]
    },
    addStreet () {
      setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)

      if (!this.streetName && !this.streetImage && !this.streetUrl) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.streetName) {
        this.errors.push('Please fill up the Street Name')
      } if (!this.streetImage) {
        this.errors.push('Please fill up the street image')
      } if (!this.streetUrl) {
        this.errors.push('Please fill up street url')
      } else {
        this.errors = []
        axios.post('api/biz/f69b0999-2043-48bb-8216-28306ada469a/operator/5628788a-d084-4ee1-975f-45f5680a2c5a/carpark/459bb0b4-e967-422c-9da9-0f172682e552/zone/3500fc40-ae6d-43a6-bc11-50d15b05b66e/street',
          {
            StreetName: this.streetName,
            StreetImage: this.streetImage,
            StreetURL: this.streetUrl
          },
          { headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
          }).then(response => console.log(response))

        setTimeout(() => {
          swal({
            title: 'Add it successfully',
            icon: 'success'
          })
        }, 1000)
        setTimeout(() => {
          window.location.href = '/street'
        }, 2000)

        return true
      }
    }
  }

}

</script>

<style scoped>
    input-placeholder {
        font-style: italic;
    }
</style>
