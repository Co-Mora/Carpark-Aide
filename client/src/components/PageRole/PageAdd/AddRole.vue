<template>
    <div>
         <div id="wrapper">
             <div class="modal inmodal fade" id="myModal4" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Add Role</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Role Name</label>
                                <input type=" text" placeholder="Enter Role Name" v-model="title" class="form-control">
                            </div>
                        </div>
                    <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                            <button class="btn btn-success" @click="addRole" data-dismiss="modal">Add</button>

                        </div>
                    </div>
                </div>
            </div>
             <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Permission</h4>
                        </div>
                        <div class="modal-body">
                              <div  class="form-group row"><label class="col-sm-2 col-form-label">Rules / Permission<br/></label>
                                    <div class="col-sm-12">
                                        <div class="row">
                                             <div class="col-sm-6">
                                                    <div><label> <input type="checkbox" v-model="checkedNames"> Add Carpark</label></div>
                                                    <div><label> <input type="checkbox"> Edit Carpark</label></div>
                                                    <div><label> <input type="checkbox"> Delete Carpark</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="modal-footer">
                                <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                                <button class="btn btn-success" @click="test" data-dismiss="modal">Edit</button>
                            </div>
                        </div>
                </div>
              </div>
              <NavSide :classZone="classZone"/>
              
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
                            <h5>Add Role</h5>
                        </div>
                        <div class="ibox-content">
                                <div  class="form-group row"><label class="col-sm-2 col-form-label">Rules<br/></label>
                                    <div class="col-sm-12">
                                      <div class="row">
                                        <div class="col-sm-6" v-for="role in roles" :key="role">
                                            <div><label> <input type="radio" @change="checkedHandleNames"  :id="role.id" :value="role.id" v-model="picked">{{' ' + role.title || 'Unknown'}}</label></div>
                                        </div>
                                      </div>

                                    </div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-white btn-sm" type="submit">Cancel</button>
                                        <button class="btn btn-primary btn-sm" @click="addRuleName">Add</button>
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
import NavSide from '../../App/NavSide'
import RoleService from '@/services/RoleService'

import qs from 'qs'
export default {
  name: 'AddRole',
  data () {
    return {
      validated: false,
      roles: null,
      title: null,
      picked: 'null',
      parsedRules: null,
      parsedData: {editCarpark: 0, addCarpark: 0, deleteCarpark: 0},
      errors: [],
      checkedNames: null,
      addCheeckedObject: [],
      classRoles: true,
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },
  components: {
    NavSide

  },
  methods: {
    addRole() {

         setTimeout(() => {
        $('.alert').alert('close')
      }, 600)
         if (!this.title) {
        this.errors.push('Please Select One of Roles')
        return false
      } else {
        this.errors = []
        this.validated = true;
        RoleService.createData(JSON.parse(this.token), `roles`, qs.stringify({
            title: this.title,
            rules: this.parsedData
        }));

      }
    },
    addRuleName() {
        $("#myModal4").modal("show");
        RoleService.fetchAllData(JSON.parse(this.token), `roles/${this.picked}`).then(response => {
            this.parsedRules = response.data
            console.log('Parsed', this.parsedRules)
        });
    },
    checkedHandleNames() {
        $("#myModal5").modal("show");
        

    },
    test() {
        alert(this.checkedNames)
         this.roles.forEach(element => {
         if(element.title === 'SysAna')
            console.log('EL', element.rules);

     });
    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    },
    loadData() {
        RoleService.fetchAllData(JSON.parse(this.token), 'roles').then(response => {
            this.roles = response.data
        });
    },
  },
 mounted () {
     this.loadData()
    
  }
}
</script>
