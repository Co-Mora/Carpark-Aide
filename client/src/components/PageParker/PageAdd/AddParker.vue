<template>
    <div>
         <div id="wrapper">
           <NavSide :classParker="classParker"/>
             <div id="page-wrapper" class="gray-bg">
            <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome {{username}}</span>
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
                            <h4>Add Parker</h4>
                        </div>
                        <div class="ibox-content">
                               <div class="col-lg-12">
                                    <div class="form-group row">
                                        <select v-model="customerID" class="form-control m-b" >
                                            <option disabled selected value="null" key="null">Please Select Customer Name</option>
                                            <option v-for="cus in customers" :value="cus.id" :key="cus">{{cus.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Car1 Name</label>
                                    <div class="col-sm-10"><input v-model="car1"  placeholder="" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Car2 Name</label>
                                    <div class="col-sm-10"><input v-model="car2"  placeholder="" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">mobile Number</label>
                                    <div class="col-sm-10"><input v-model="mobile"  placeholder="" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10"><input v-model="name"  placeholder="" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10"><input v-model="email"  placeholder="" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-primary btn-sm" @click="addParker" :disabled="validated == true">Add</button>
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
import qs from 'qs'
import NavSide from '../../App/NavSide'
export default {
  name: 'AddLevel',
  data () {
    return {
      validated: false,
      customerID: 'null',
      customers: null,
      name: null,
      classParker: true,
      car1: null,
      car2: null,
      email: null,
      mobile: null,
      errors: [],
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
      username: localStorage.getItem('email')
    }
  },
  methods: {
    addParker() {
         setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)
      if (!this.name && !this.car1 && !this.car2 && !this.mobile && !this.email) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.name) {
        this.errors.push('Please fill up the Parker Name')
      }if (!this.car1) {
        this.errors.push('Please fill up the Car1 Name')
      }if (!this.car2) {
        this.errors.push('Please fill up the Car2 Name')
      }if (!this.mobile) {
        this.errors.push('Please fill up the Mobile Name')
      } if (!this.email) {
        this.errors.push('Please fill up the Email image')
      } else {
        this.errors = []
        this.validated = true
        axios({
        method: 'post',
        url: `https://sys2.parkaidemobile.com/api/customers/${this.customerID}/parkers`,
        data: qs.stringify({
            name: this.name,
            car1: this.car1,
            car2: this.car2,
            email: this.email,
            mobile: this.mobile,
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-access-token': JSON.parse(this.token)
        },
        }).then(response => {
           if(response.status == 200) {
                setTimeout(() => {
                    swal({
                        title: 'Add it successfully',
                        icon: 'success'
                    })
                }, 200)
                setTimeout(() => {
                     window.location.href = '/parker'
                }, 1000)
            }

        })
        .catch(error => {
            if(error.message == 'Request failed with status code 401') {
                 setTimeout(() => {
                    swal({
                        title: 'Your or password is wrong',
                        icon: 'error'
                    })
                }, 300)
            }

        });
      }
    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },
  components: {
    NavSide
  },
 mounted () {
    axios
      .get('https://sys2.parkaidemobile.com/api/customers',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.customers = response.data
        this.customerID = response.data[0].id
      })


  }
}


</script>
