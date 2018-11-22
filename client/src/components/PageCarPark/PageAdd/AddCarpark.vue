<template>
    <div>
         <div id="wrapper">
             <NavSide />
             <div id="page-wrapper" class="gray-bg">
            <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
           <div class="navbar-header">
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome to Carpark Aide.</span>
                    </li>

                    <li>
                        <a @click="logout" href="/login">
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
                            <h4>Add Carpark</h4>
                        </div>
                        <div class="ibox-content">
                          <div class="col-sm-9 m-b-xs">
                            <select v-model="cityID" class="form-control m-b">
                              <option disabled selected value="null" key="null">Please Select City Name</option>
                              <option v-for="c in city" :value="c.id" :key="c">{{c.name}}</option>
                            </select>
                          </div>
                          <div class="col-sm-3">
                          </div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Carpark Name</label>
                                    <div class="col-sm-10"><input v-model="name"  placeholder="Name" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Lat Name</label>
                                    <div class="col-sm-10"><input v-model="lat"  placeholder="Lat Name" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Lon Name</label>
                                    <div class="col-sm-10"><input v-model="lon"  placeholder="Lon Name" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Carpark Image</label>
                                    <div class="col-sm-10"><input placeholder="Image" type="file" ref="file" @change="handleFileUpload()" class="form-control">
                                      <img style="width: 10%" :src="image" />
                                    </div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-primary btn-sm" @click="addCarpark()" :disabled="validated == true">Add</button>
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
import NavSide from '../NavSide'
import CarParkService from '@/services/CarParkService'

import qs from 'qs'
export default {
  name: 'AddCarpark',
  data () {
    return {
      lat: null,
      lon: null,
      name: null,
      file: null,
      image: null,
      validated: false,
      errors: [],
      city: null,
      cityID: 'null',
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },
  components: {
    NavSide
  },
  methods: {
    processFile() {
      let formData = new FormData();
      formData.append('imgUploader', this.file);
      axios.post( 'https://sys2.parkaidemobile.com/api/images/upload',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': JSON.parse(this.token)
                }
              }
            ).then(response => {
              this.image = response.data
              console.log('SUCCESS!!', response.data);
        })
        .catch(function(ex){
          console.log(ex);
        });

    },
    handleFileUpload() {
       this.file = this.$refs.file.files[0];
       console.log("File:", this.file)
       this.processFile();
    },
    addCarpark() {
         setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)
         if (!this.name && !this.image && !this.lon && !this.lat) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.name) {
        this.errors.push('Please fill up the Level Name')
      } if (!this.lon) {
        this.errors.push('Please fill up the Lon Name')
      } if (!this.lat) {
        this.errors.push('Please fill up the Lat Name')
      } if (!this.file) {
        this.errors.push('Please fill up the Carpark image')
      } if (!this.cityID) {
        this.errors.push('Please Select City')
      }else {
        this.errors = [];
        this.validated = true;
        CarParkService.createData(JSON.parse(this.token), `carparks`, qs.stringify({
            name: this.name,
            image: this.image,
            cityID: this.cityID,
            lat: this.lat,
            lon: this.lon
        }));
      }

    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    },
    loadData() {
        CarParkService.fetchAllData(JSON.parse(this.token), 'city').then(response => {
            this.city = response.data
        });
    },
    
  },
 mounted () {
     this.loadData();
  }
}
</script>