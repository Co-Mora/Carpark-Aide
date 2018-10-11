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
                        <span class="m-r-sm text-muted welcome-message">Welcome to INSPINIA+ Admin Theme.</span>
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
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Name</label>
                                    <div class="col-sm-10"><input v-model="zoneName"  placeholder="Zone Name" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Bay Count1</label>
                                    <div class="col-sm-10"><input  v-model="zoneBayCount1" type="text" placeholder="type here bay count1" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Bay Count2</label>
                                    <div class="col-sm-10"><input  v-model="zoneBayCount2" type="text" placeholder="type here bay count2" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Bay Count3</label>
                                    <div class="col-sm-10"><input v-model="zoneBayCount3" type="text" placeholder="type here bay count3" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Bay Count4</label>
                                    <div class="col-sm-10"><input v-model="zoneBayCount4" type="text" placeholder="type here bay count4" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Bay Count5</label>
                                    <div class="col-sm-10"><input v-model="zoneBayCount5" type="text" placeholder="type here bay count5" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Bay Count6</label>
                                    <div class="col-sm-10"><input v-model="zoneBayCount6" type="text" placeholder="type here bay count6" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Bay Count7</label>
                                    <div class="col-sm-10"><input v-model="zoneBayCount7" type="text" placeholder="type here bay count7" class="form-control"></div>
                                </div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Zone Bay Count8</label>
                                    <div class="col-sm-10"><input v-model="zoneBayCount8" type="text" placeholder="type here bay count8" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-primary btn-sm" type="submit" v-on:click.prevent="addZone">Submit</button>
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

      zoneName: null,
      zoneBayCount1: null,
      zoneBayCount2: null,
      zoneBayCount3: null,
      zoneBayCount4: null,
      zoneBayCount5: null,
      zoneBayCount6: null,
      zoneBayCount7: null,
      zoneBayCount8: null,
      carpark: null,
      zone: null,
      errors: []
    }
  },
  components: {
    NavSide
  },
  methods: {
    addZone () {
      setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)

      if (!this.zoneName && !this.zoneBayCount1 && !this.zoneBayCount2 && !this.zoneBayCount3 && !this.zoneBayCount4 && !this.zoneBayCount5 && !this.zoneBayCount6 && !this.zoneBayCount7 && !this.zoneBayCount8) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.zoneName) {
        this.errors.push('Please fill up the ZONE Name')
      } if (!this.zoneBayCount1) {
        this.errors.push('Please fill up the zoneBayCount1')
      } if (!this.zoneBayCount2) {
        this.errors.push('Please fill up thezoneBayCount2')
      } if (!this.zoneBayCount3) {
        this.errors.push('Please fill up the zoneBayCount3')
      } if (!this.zoneBayCount4) {
        this.errors.push('Please fill up the zoneBayCount4')
      } if (!this.zoneBayCount5) {
        this.errors.push('Please fill up the zoneBayCount5')
      } if (!this.zoneBayCount6) {
        this.errors.push('Please fill up the zoneBayCount6')
      } if (!this.zoneBayCount7) {
        this.errors.push('Please fill up the zoneBayCount7')
      } if (!this.zoneBayCount8) {
        this.errors.push('Please fill up the zoneBayCount8')
      } else {
        this.errors = []
        axios.post('api/biz/f69b0999-2043-48bb-8216-28306ada469a/operator/5628788a-d084-4ee1-975f-45f5680a2c5a/carpark/459bb0b4-e967-422c-9da9-0f172682e552/zone',
          {
            zoneName: this.zoneName,
            zoneBayCount1: this.zoneBayCount1,
            zoneBayCount2: this.zoneBayCount2,
            zoneBayCount3: this.zoneBayCount3,
            zoneBayCount4: this.zoneBayCount4,
            zoneBayCount5: this.zoneBayCount5,
            zoneBayCount6: this.zoneBayCount6,
            zoneBayCount7: this.zoneBayCount7,
            zoneBayCount8: this.zoneBayCount8
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
          window.location.href = '/zone'
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
