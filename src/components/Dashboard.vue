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
          <div class="col-lg-2">
            <div class="ibox ">
              <div class="ibox-title">
                <span class="label label-primary float-right">Monthly</span>
                <h5>CustomerPersonal</h5>
              </div>
              <div class="ibox-content">
                <h1 class="no-margins">{{totalCP}}</h1>
                <div class="stat-percent font-bold text-success">{{viewCP.length}}% <i class="fa fa-bolt"></i></div>
                <small>Total CP</small>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="ibox ">
              <div class="ibox-title">
                <span class="label label-primary float-right">Monthly</span>
                <h5>CustomerCompany</h5>
              </div>
              <div class="ibox-content">
                <h1 class="no-margins">{{totalCC}}</h1>
                <div class="stat-percent font-bold text-success">{{viewCC.length}}% <i class="fa fa-bolt"></i></div>
                <small>Total CC</small>
              </div>
            </div>
          </div>
        </div>
        <!--  CHART JS HERE  -->
        <div class="row  border-bottom white-bg dashboard-header">
          <div class="col-md-6">
            <div class="flot-chart dashboard-chart">
              <div class="flot-chart-content" id="flot-dashboard-chart"></div>
            </div>
            <div class="row text-left">
              <div class="col">
                <div class=" m-l-md">
                  <span class="h5 font-bold m-t block">$ 406,100</span>
                  <small class="text-muted m-b block">Sales marketing report</small>
                </div>
              </div>
              <div class="col">
                <span class="h5 font-bold m-t block">$ 150,401</span>
                <small class="text-muted m-b block">Annual sales revenue</small>
              </div>
              <div class="col">
                <span class="h5 font-bold m-t block">$ 16,822</span>
                <small class="text-muted m-b block">Half-year revenue margin</small>
              </div>

            </div>
          </div>
          <div class="col-md-3">
            <div class="statistic-box">
              <h4>
                Project Beta progress
              </h4>
              <p>
                You have two project with not compleated task.
              </p>
              <div class="row text-center">
                <div class="col-lg-6">
                  <canvas id="doughnutChart2" width="80" height="80" style="margin: 18px auto 0"></canvas>
                  <h5 >Kolter</h5>
                </div>
                <div class="col-lg-6">
                  <canvas id="doughnutChart" width="80" height="80" style="margin: 18px auto 0"></canvas>
                  <h5 >Maxtor</h5>
                </div>
              </div>
              <div class="m-t">
                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
              </div>

            </div>
          </div>
        </div>

        <!-- End Chartjs -->
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
          <strong>Copyright</strong> CarPark Company &copy; 2018
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
            viewCP: [],
            totalCP: 0,
            viewCC: [],
            totalCC: 0,
            isLoggedIn: localStorage.getItem('isLogged'),
            token: localStorage.getItem('token'),
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
                  if(month - 1 === new Date().getMonth()) {
                    this.viewVoucherBuy.push(el.VoucherBuy);
                    this.viewVoucher.push(el.Voucher);
                    this.viewTenant.push(el.Tenant);
                    this.viewLicense.push(el.License);
                    this.viewCP.push(el.CustomerPersonal);
                    this.viewCC.push(el.CustomerCompany);
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
                  this.viewCP.forEach((el) => {
                    this.totalCP += el;
                  });
                  this.viewCC.forEach((el) => {
                    this.totalCC += el;
                  });
                  formattedTime = year + '-' + month + '-' + day + '  ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                  el.createDate = formattedTime

                });
                this.diagramResult()
              });


          },
          diagramResult() {

            var totalVouchers = this.totalVouchers;
            var  totalCC = this.totalCC;
            var totalCP = this.totalCP;
            var totalVouchersBuy = this.totalVouchersBuy;
            var totalLicenses = this.totalLicenses;
            var totalTenants = this.totalTenants;

            var email = localStorage.getItem('email');

            $(document).ready(function() {
              setTimeout(function() {
                toastr.options = {
                  closeButton: true,
                  progressBar: true,
                  showMethod: 'slideDown',
                  timeOut: 4000
                };
                toastr.success(`Carpark-Aide CRM', 'Welcome ${email}`);

              }, 1300);


              var data1 = [
                [0,4],[1,8],[2,5],[3,10],[4,4],[5,16],[6,5],[7,11],[8,6],[9,11],[10,30],[11,10],[12,13],[13,4],[14,3],[15,3],[16,6]
              ];
              var data2 = [
                [0,1],[1,0],[2,2],[3,0],[4,1],[5,3],[6,1],[7,5],[8,2],[9,3],[10,2],[11,1],[12,0],[13,2],[14,8],[15,0],[16,0]
              ];
              $("#flot-dashboard-chart").length && $.plot($("#flot-dashboard-chart"), [
                  data1, data2
                ],
                {
                  series: {
                    lines: {
                      show: false,
                      fill: true
                    },
                    splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.4
                    },
                    points: {
                      radius: 0,
                      show: true
                    },
                    shadowSize: 2
                  },
                  grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: "#d5d5d5",
                    borderWidth: 1,
                    color: '#d5d5d5'
                  },
                  colors: ["#1ab394", "#1C84C6"],
                  xaxis:{
                  },
                  yaxis: {
                    ticks: 4
                  },
                  tooltip: false
                }
              );

              var doughnutData = {
                labels: ["Voucher","Customer Company","Customer Personal" ],
                datasets: [{
                  data: [totalVouchers,totalCC,totalCP],
                  backgroundColor: ["#a3e1d4","#dedede","#9CC3DA"]
                }]
              } ;


              var doughnutOptions = {
                responsive: false,
                legend: {
                  display: false
                }
              };


              var ctx4 = document.getElementById("doughnutChart").getContext("2d");
              new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

              var doughnutData = {
                labels: ["Vouchers Buy","Licenses","Tenants" ],
                datasets: [{
                  data: [totalVouchersBuy, totalLicenses,totalTenants],
                  backgroundColor: ["#a3e1d4","#dedede","#9CC3DA"]
                }]
              } ;


              var doughnutOptions = {
                responsive: false,
                legend: {
                  display: false
                }
              };


              var ctx4 = document.getElementById("doughnutChart2").getContext("2d");
              new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

            });
          }

        },
        mounted() {
          this.dashboard();
        }
    }

</script>

<style scoped>

</style>
