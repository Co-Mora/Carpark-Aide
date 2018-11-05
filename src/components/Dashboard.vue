<template>
  <div>
    <div>
      <div class="wrapper wrapper-content">
        <div class="row">
          <div class="col-lg-2">
            <div class="ibox ">
              <div class="ibox-title">
                <span class="label label-success float-right">Monthly</span>
                <h5>BuyVouchers</h5>
              </div>
              <div class="ibox-content">
                <h1 class="no-margins">{{totalVouchersBuy}}</h1>
                <div class="stat-percent font-bold text-success">{{viewVoucherBuy.length}}% <i class="fa fa-bolt"></i></div>
                <small>Total Vouchers</small>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="ibox ">
              <div class="ibox-title">
                <span class="label label-success float-right">Monthly</span>
                <h5>Vouchers</h5>
              </div>
              <div class="ibox-content">
                <h1 class="no-margins">{{totalVouchers}}</h1>
                <div class="stat-percent font-bold text-success">{{viewVoucher.length}}% <i class="fa fa-bolt"></i></div>
                <small>Total Vouchers</small>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="ibox ">
              <div class="ibox-title">
                <span class="label label-success float-right">Monthly</span>
                <h5>Tenants</h5>
              </div>
              <div class="ibox-content">
                <h1 class="no-margins">{{totalTenants}}</h1>
                <div class="stat-percent font-bold text-success">{{viewTenant.length}}% <i class="fa fa-bolt"></i></div>
                <small>Total Tenants</small>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="ibox ">
              <div class="ibox-title">
                <span class="label label-primary float-right">Monthly</span>
                <h5>Licenses</h5>
              </div>
              <div class="ibox-content">
                <h1 class="no-margins">{{totalLicenses}}</h1>
                <div class="stat-percent font-bold text-success">{{viewLicense.length}}% <i class="fa fa-bolt"></i></div>
                <small>Total Licenses</small>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="ibox ">
              <div class="ibox-title">
                <h5>Monthly income</h5>
                <div class="ibox-tools">
                  <span class="label label-primary">Updated 12.2015</span>
                </div>
              </div>
              <div class="ibox-content no-padding">
                <div class="flot-chart m-t-lg" style="height: 55px;">
                  <div class="flot-chart-content" id="flot-chart1"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="ibox ">
              <div class="ibox-content">
                <div>
                                        <span class="float-right text-right">
                                        <small>Average value of sales in the past month in: <strong>United states</strong></small>
                                            <br/>
                                            All sales: 162,862
                                        </span>
                  <h3 class="font-bold no-margins">
                    Half-year revenue margin
                  </h3>
                  <small>Sales marketing.</small>
                </div>

                <div class="m-t-sm">

                  <div class="row">
                    <div class="col-md-8">
                      <div>
                        <canvas id="lineChart" height="114"></canvas>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <ul class="stat-list m-t-lg">
                        <li>
                          <h2 class="no-margins">2,346</h2>
                          <small>Total orders in period</small>
                          <div class="progress progress-mini">
                            <div class="progress-bar" style="width: 48%;"></div>
                          </div>
                        </li>
                        <li>
                          <h2 class="no-margins ">4,422</h2>
                          <small>Orders in last month</small>
                          <div class="progress progress-mini">
                            <div class="progress-bar" style="width: 60%;"></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div class="m-t-md">
                  <small class="float-right">
                    <i class="fa fa-clock-o"> </i>
                    Update on 16.07.2015
                  </small>
                  <small>
                    <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.
                  </small>
                </div>

              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="ibox ">
              <div class="ibox-title">
                <span class="label label-warning float-right">Data has changed</span>
                <h5>User activity</h5>
              </div>
              <div class="ibox-content">
                <div class="row">
                  <div class="col-4">
                    <small class="stats-label">Pages / Visit</small>
                    <h4>236 321.80</h4>
                  </div>

                  <div class="col-4">
                    <small class="stats-label">% New Visits</small>
                    <h4>46.11%</h4>
                  </div>
                  <div class="col-4">
                    <small class="stats-label">Last week</small>
                    <h4>432.021</h4>
                  </div>
                </div>
              </div>
              <div class="ibox-content">
                <div class="row">
                  <div class="col-4">
                    <small class="stats-label">Pages / Visit</small>
                    <h4>643 321.10</h4>
                  </div>

                  <div class="col-4">
                    <small class="stats-label">% New Visits</small>
                    <h4>92.43%</h4>
                  </div>
                  <div class="col-4">
                    <small class="stats-label">Last week</small>
                    <h4>564.554</h4>
                  </div>
                </div>
              </div>
              <div class="ibox-content">
                <div class="row">
                  <div class="col-4">
                    <small class="stats-label">Pages / Visit</small>
                    <h4>436 547.20</h4>
                  </div>

                  <div class="col-4">
                    <small class="stats-label">% New Visits</small>
                    <h4>150.23%</h4>
                  </div>
                  <div class="col-4">
                    <small class="stats-label">Last week</small>
                    <h4>124.990</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="ibox ">
              <div class="ibox-title">
                <h5>Result</h5>
              </div>
              <div class="ibox-content">
                <div class="table-responsive">
                  <table class="footable table table-stripped" data-page-size="6">
                    <thead>
                    <tr>
                      <th>createDate</th>
                      <th>Buy</th>
                      <th>Voucher</th>
                      <th>Tenant</th>
                      <th>License1</th>
                      <th>License2</th>
                      <th>License2</th>
                      <th>CP</th>
                      <th>CC</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr v-for="d in data" :key="d" >
                        <td class="center">{{d.createDate}}</td>
                        <td class="center">{{d.VoucherBuy}}</td>
                        <td class="center">{{d.Voucher}}</td>
                        <td class="center">{{d.Tenant}}</td>
                        <td class="center">{{d.LicenseChangePayment}}</td>
                        <td class="center">{{d.LicenseChangeProduct}}</td>
                        <td class="center">{{d.LicenseTerminate}}</td>
                        <td class="center">{{d.CustomerPersonal}}</td>
                        <td class="center">{{d.CustomerCompany}}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <td colspan="3">
                        <ul class="pagination float-lg-left"></ul>
                      </td>
                    </tr>
                    </tfoot>
                  </table>
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
          <strong>Copyright</strong> Example Company &copy; 2014-2018
        </div>
      </div>

    </div>
    <div id="right-sidebar">
      <div class="sidebar-container">

        <ul class="nav nav-tabs navs-3">
          <li>
            <a class="nav-link active" data-toggle="tab" href="#tab-1"> Notes </a>
          </li>
          <li>
            <a class="nav-link" data-toggle="tab" href="#tab-2"> Projects </a>
          </li>
          <li>
            <a class="nav-link" data-toggle="tab" href="#tab-3"> <i class="fa fa-gear"></i> </a>
          </li>
        </ul>

        <div class="tab-content">


          <div id="tab-1" class="tab-pane active">

            <div class="sidebar-title">
              <h3> <i class="fa fa-comments-o"></i> Latest Notes</h3>
              <small><i class="fa fa-tim"></i> You have 10 new message.</small>
            </div>

            <div>

              <div class="sidebar-message">
                <a href="#">
                  <div class="float-left text-center">
                    <img alt="image" class="rounded-circle message-avatar" src="img/a1.jpg">

                    <div class="m-t-xs">
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                    </div>
                  </div>
                  <div class="media-body">

                    There are many variations of passages of Lorem Ipsum available.
                    <br>
                    <small class="text-muted">Today 4:21 pm</small>
                  </div>
                </a>
              </div>
              <div class="sidebar-message">
                <a href="#">
                  <div class="float-left text-center">
                    <img alt="image" class="rounded-circle message-avatar" src="img/a2.jpg">
                  </div>
                  <div class="media-body">
                    The point of using Lorem Ipsum is that it has a more-or-less normal.
                    <br>
                    <small class="text-muted">Yesterday 2:45 pm</small>
                  </div>
                </a>
              </div>
              <div class="sidebar-message">
                <a href="#">
                  <div class="float-left text-center">
                    <img alt="image" class="rounded-circle message-avatar" src="img/a3.jpg">

                    <div class="m-t-xs">
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    Mevolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    <br>
                    <small class="text-muted">Yesterday 1:10 pm</small>
                  </div>
                </a>
              </div>
              <div class="sidebar-message">
                <a href="#">
                  <div class="float-left text-center">
                    <img alt="image" class="rounded-circle message-avatar" src="img/a4.jpg">
                  </div>

                  <div class="media-body">
                    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                    <br>
                    <small class="text-muted">Monday 8:37 pm</small>
                  </div>
                </a>
              </div>
              <div class="sidebar-message">
                <a href="#">
                  <div class="float-left text-center">
                    <img alt="image" class="rounded-circle message-avatar" src="img/a8.jpg">
                  </div>
                  <div class="media-body">

                    All the Lorem Ipsum generators on the Internet tend to repeat.
                    <br>
                    <small class="text-muted">Today 4:21 pm</small>
                  </div>
                </a>
              </div>
              <div class="sidebar-message">
                <a href="#">
                  <div class="float-left text-center">
                    <img alt="image" class="rounded-circle message-avatar" src="img/a7.jpg">
                  </div>
                  <div class="media-body">
                    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    <br>
                    <small class="text-muted">Yesterday 2:45 pm</small>
                  </div>
                </a>
              </div>
              <div class="sidebar-message">
                <a href="#">
                  <div class="float-left text-center">
                    <img alt="image" class="rounded-circle message-avatar" src="img/a3.jpg">

                    <div class="m-t-xs">
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.
                    <br>
                    <small class="text-muted">Yesterday 1:10 pm</small>
                  </div>
                </a>
              </div>
              <div class="sidebar-message">
                <a href="#">
                  <div class="float-left text-center">
                    <img alt="image" class="rounded-circle message-avatar" src="img/a4.jpg">
                  </div>
                  <div class="media-body">
                    Uncover many web sites still in their infancy. Various versions have.
                    <br>
                    <small class="text-muted">Monday 8:37 pm</small>
                  </div>
                </a>
              </div>
            </div>

          </div>

          <div id="tab-2" class="tab-pane">

            <div class="sidebar-title">
              <h3> <i class="fa fa-cube"></i> Latest projects</h3>
              <small><i class="fa fa-tim"></i> You have 14 projects. 10 not completed.</small>
            </div>

            <ul class="sidebar-list">
              <li>
                <a href="#">
                  <div class="small float-right m-t-xs">9 hours ago</div>
                  <h4>Business valuation</h4>
                  It is a long established fact that a reader will be distracted.

                  <div class="small">Completion with: 22%</div>
                  <div class="progress progress-mini">
                    <div style="width: 22%;" class="progress-bar progress-bar-warning"></div>
                  </div>
                  <div class="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="small float-right m-t-xs">9 hours ago</div>
                  <h4>Contract with Company </h4>
                  Many desktop publishing packages and web page editors.

                  <div class="small">Completion with: 48%</div>
                  <div class="progress progress-mini">
                    <div style="width: 48%;" class="progress-bar"></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="small float-right m-t-xs">9 hours ago</div>
                  <h4>Meeting</h4>
                  By the readable content of a page when looking at its layout.

                  <div class="small">Completion with: 14%</div>
                  <div class="progress progress-mini">
                    <div style="width: 14%;" class="progress-bar progress-bar-info"></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="label label-primary float-right">NEW</span>
                  <h4>The generated</h4>
                  <!--<div class="small float-right m-t-xs">9 hours ago</div>-->
                  There are many variations of passages of Lorem Ipsum available.
                  <div class="small">Completion with: 22%</div>
                  <div class="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="small float-right m-t-xs">9 hours ago</div>
                  <h4>Business valuation</h4>
                  It is a long established fact that a reader will be distracted.

                  <div class="small">Completion with: 22%</div>
                  <div class="progress progress-mini">
                    <div style="width: 22%;" class="progress-bar progress-bar-warning"></div>
                  </div>
                  <div class="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="small float-right m-t-xs">9 hours ago</div>
                  <h4>Contract with Company </h4>
                  Many desktop publishing packages and web page editors.

                  <div class="small">Completion with: 48%</div>
                  <div class="progress progress-mini">
                    <div style="width: 48%;" class="progress-bar"></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="small float-right m-t-xs">9 hours ago</div>
                  <h4>Meeting</h4>
                  By the readable content of a page when looking at its layout.

                  <div class="small">Completion with: 14%</div>
                  <div class="progress progress-mini">
                    <div style="width: 14%;" class="progress-bar progress-bar-info"></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="label label-primary float-right">NEW</span>
                  <h4>The generated</h4>
                  <!--<div class="small float-right m-t-xs">9 hours ago</div>-->
                  There are many variations of passages of Lorem Ipsum available.
                  <div class="small">Completion with: 22%</div>
                  <div class="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                </a>
              </li>

            </ul>

          </div>

          <div id="tab-3" class="tab-pane">

            <div class="sidebar-title">
              <h3><i class="fa fa-gears"></i> Settings</h3>
              <small><i class="fa fa-tim"></i> You have 14 projects. 10 not completed.</small>
            </div>

            <div class="setings-item">
                    <span>
                        Show notifications
                    </span>
              <div class="switch">
                <div class="onoffswitch">
                  <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example">
                  <label class="onoffswitch-label" for="example">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="setings-item">
                    <span>
                        Disable Chat
                    </span>
              <div class="switch">
                <div class="onoffswitch">
                  <input type="checkbox" name="collapsemenu" checked class="onoffswitch-checkbox" id="example2">
                  <label class="onoffswitch-label" for="example2">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="setings-item">
                    <span>
                        Enable history
                    </span>
              <div class="switch">
                <div class="onoffswitch">
                  <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example3">
                  <label class="onoffswitch-label" for="example3">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="setings-item">
                    <span>
                        Show charts
                    </span>
              <div class="switch">
                <div class="onoffswitch">
                  <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example4">
                  <label class="onoffswitch-label" for="example4">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="setings-item">
                    <span>
                        Offline users
                    </span>
              <div class="switch">
                <div class="onoffswitch">
                  <input type="checkbox" checked name="collapsemenu" class="onoffswitch-checkbox" id="example5">
                  <label class="onoffswitch-label" for="example5">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="setings-item">
                    <span>
                        Global search
                    </span>
              <div class="switch">
                <div class="onoffswitch">
                  <input type="checkbox" checked name="collapsemenu" class="onoffswitch-checkbox" id="example6">
                  <label class="onoffswitch-label" for="example6">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="setings-item">
                    <span>
                        Update everyday
                    </span>
              <div class="switch">
                <div class="onoffswitch">
                  <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="example7">
                  <label class="onoffswitch-label" for="example7">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
    import axios from 'axios';
    export default {
        name: "dashboard",
        data() {
          return {
            data: null,
            viewVoucherBuy: [],
            totalVouchersBuy: 0,
            viewVoucher: [],
            totalVouchers: 0,
            viewTenant: [],
            totalTenants: 0,
            viewLicense: [],
            totalLicenses: 0,
            isLoggedIn: localStorage.getItem('isLogged'),
            token: localStorage.getItem('token'),
            getResult: localStorage.getItem('searchResult'),
          }
        },
        methods: {
          dashboard() {
            axios
              .get(`https://sys2.parkaidemobile.com/api/dashboard`,{headers: { 'x-access-token': JSON.parse(this.token)}})
              .then(response => {
                this.data = response.data
                var date;
                var day;
                var month;
                var year;
                var hours;
                var minutes;
                var seconds;
                var formattedTime;
                this.data.forEach((el) => {

                  date = new Date(el.createDate *1000);
                  day = date.getDay();
                  month = date.getMonth();
                  year = date.getFullYear();
                  hours = date.getHours();
                  minutes = "0" + date.getMinutes();
                  seconds = "0" + date.getSeconds();

                  if(month +1 === new Date().getMonth() + 1) {
                    this.viewVoucherBuy.push(el.VoucherBuy)
                    this.viewVoucher.push(el.Voucher)
                    this.viewTenant.push(el.Tenant)
                    this.viewLicense.push(el.License)
                  }
                  this.viewVoucherBuy.forEach((el) => {
                    this.totalVouchersBuy += el;
                  });
                  this.viewVoucher.forEach((el) => {
                    this.totalVouchers += el;
                  });
                  this.viewTenant.forEach((el) => {
                    this.totalTenants += el;
                  });
                  this.viewLicense.forEach((el) => {
                    this.totalLicenses += el;
                  });
                  formattedTime = year + '-' + month + '-' + day + '  ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                  el.createDate = formattedTime
                });
              });


          }

        },
        mounted() {
          $(document).ready(function() {

            var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
            var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

            var data1 = [
              { label: "Data 1", data: d1, color: '#17a084'},
              { label: "Data 2", data: d2, color: '#127e68' }
            ];
            $.plot($("#flot-chart1"), data1, {
              xaxis: {
                tickDecimals: 0
              },
              series: {
                lines: {
                  show: true,
                  fill: true,
                  fillColor: {
                    colors: [{
                      opacity: 1
                    }, {
                      opacity: 1
                    }]
                  },
                },
                points: {
                  width: 0.1,
                  show: false
                },
              },
              grid: {
                show: false,
                borderWidth: 0
              },
              legend: {
                show: false,
              }
            });

            var lineData = {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "Example dataset",
                  backgroundColor: "rgba(26,179,148,0.5)",
                  borderColor: "rgba(26,179,148,0.7)",
                  pointBackgroundColor: "rgba(26,179,148,1)",
                  pointBorderColor: "#fff",
                  data: [48, 48, 60, 39, 56, 37, 30]
                },
                {
                  label: "Example dataset",
                  backgroundColor: "rgba(220,220,220,0.5)",
                  borderColor: "rgba(220,220,220,1)",
                  pointBackgroundColor: "rgba(220,220,220,1)",
                  pointBorderColor: "#fff",
                  data: [65, 59, 40, 51, 36, 25, 40]
                }
              ]
            };

            var lineOptions = {
              responsive: true
            };


            var ctx = document.getElementById("lineChart").getContext("2d");
            new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});

          });
          this.dashboard();
        }
    }

</script>

<style scoped>

</style>
