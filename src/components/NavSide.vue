<template>
    <div v-show="isLoggedIn">
          <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <img alt="image" class="rounded-circle" :src="Image" />
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="block m-t-xs font-bold">Admin</span>
                                <span class="text-muted text-xs block">Art Director <b class="caret"></b></span>
                            </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                                <li><a class="dropdown-item" href="contacts.html">Contacts</a></li>
                                <li><a class="dropdown-item" href="mailbox.html">Mailbox</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="login.html">Logout</a></li>
                            </ul>
                        </div>
                        <div class="logo-element">
                            IN+
                        </div>
                    </li>
                    <li v-bind:class="{ active: classZone }">
                        <a  href="#"><i class="fa fa-car"></i> <span class="nav-label">CarPark</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">Zone<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/carparks/zone">View Zone</a>
                                        </li>
                                        <li>
                                            <a href="/carparks/zone/add">Add Zone</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Level<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/carparks/level">View Level</a>
                                        </li>
                                        <li>
                                            <a href="/carparks/level/add">Add Level</a>
                                        </li>
                                    </ul>
                            </li>         
                            <li>
                                <a href="#">Street<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/carparks/street">View Street</a>
                                        </li>
                                        <li>
                                            <a href="/carparks/street/add">Add Street</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Bay<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/carparks/bay">View Bay</a>
                                        </li>
                                        <li>
                                            <a href="/carparks/bay/add">Add Bay</a>
                                        </li>
                                    </ul>
                            </li>                                        
                        </ul>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-bandcamp"></i> <span class="nav-label">Wheel</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                                <a href="#">Master<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/wheel/master">View Master</a>
                                        </li>
                                        <li>
                                            <a href="/wheel/master/add">Add Master</a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Lock<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/wheel/lock">View Lock</a>
                                        </li>
                                        <li>
                                            <a href="/wheel/lock/add">Add Lock</a>
                                        </li>
                                    </ul>
                            </li>         
                            <li>
                                <a href="#">Pole<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="/wheel/pole">View Pole</a>
                                        </li>
                                        <li>
                                            <a href="/wheel/pole/add">Add Pole</a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </nav>
    </div>
</template>

<script>

import Image from '../../static/img/profile_small.jpg'

export default {
  name: 'NavSide',
  aria: false,
  
  methods: {
  },
  data () {
    return {
      Image,
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  }
}

</script>
