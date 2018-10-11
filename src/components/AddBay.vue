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
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Bay Name</label>
                                    <div class="col-sm-10"><input v-model="bayName"  placeholder="type your bayName" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Bay Lat</label>
                                    <div class="col-sm-10"><input v-model="bayLat" type="text" placeholder="type your bayLat" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Bay Lon</label>
                                    <div class="col-sm-10"><input  v-model="bayLon" type="text" placeholder="type your bayLon" class="form-control"></div>
                                </div>
                                  <div class="form-group row"><label class="col-sm-2 col-form-label">Bay Level</label>
                                    <div class="col-sm-10"><input  v-model="bayLevel" type="text" placeholder="type your bayLevel" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Bay Oku</label>
                                    <div class="col-sm-10"><input  v-model="bayOku" type="text" placeholder="type your bayOku" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Bay Female</label>
                                    <div class="col-sm-10"><input  v-model="bayFemale" type="text" placeholder="type your bayFemale" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Bay Env</label>
                                    <div class="col-sm-10"><input  v-model="bayEv" type="text" placeholder="type your bayEnv" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-primary btn-sm" type="submit" v-on:click.prevent="addBay">Submit</button>
                                    </div>
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

      bayName: null,
      bayLat: null,
      bayLon: null,
      bayLevel: null,
      bayFemale: null,
      bayOku: null,
      bayEv: null,
      errors: []
    }
  },
  components: {
    NavSide
  },
  methods: {

    addBay () {
      setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)

      if (!this.bayName && !this.bayLat && !this.bayLon && !this.bayLevel && !this.bayFemale && !this.bayOku && !this.bayEv) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.bayName) {
        this.errors.push('Please fill up the Bay Name')
      } if (!this.bayLat) {
        this.errors.push('Please fill up the Bay Lat')
      } if (!this.bayLon) {
        this.errors.push('Please fill up Bay Lon')
      } if (!this.bayLevel) {
        this.errors.push('Please fill up Bay Level')
      } if (!this.bayFemale) {
        this.errors.push('Please fill up Bay Female')
      } if (!this.bayOku) {
        this.errors.push('Please fill up Bay Oku')
      } if (!this.bayEv) {
        this.errors.push('Please fill up Bay Env')
      } else {
        this.errors = []
        axios.post('api/biz/f69b0999-2043-48bb-8216-28306ada469a/operator/5628788a-d084-4ee1-975f-45f5680a2c5a/carpark/459bb0b4-e967-422c-9da9-0f172682e552/zone/3500fc40-ae6d-43a6-bc11-50d15b05b66e/street/54bcb6c4-4e97-415a-b8ab-98485b5c0129/bay',
          {
            BayName: this.bayName,
            BayLat: this.bayLat,
            BayLon: this.bayLon,
            BayLevel: this.bayLevel,
            BayOku: this.bayOku,
            BayFemale: this.bayFemale,
            BayEV: this.bayEv

          },
          // access-control-expose-headers
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
          window.location.href = '/bay'
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
