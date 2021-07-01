<template>
    <div>
        <b-container>
            <b-row >
                <b-col >
                    <canvas id="myChart" width="300" height="300"></canvas>

                </b-col>
                <!-- <b-col>

                        <h4>Trouble Umbrellas</h4>
                <div>
                        <b-button class="d-block" variant="white">Miami High 104913 <b-icon icon="arrow-right-circle" class=""></b-icon>   </b-button>
                        <b-button class="d-block" variant="white">California Bears 391031 <b-icon icon="arrow-right-circle" class=""></b-icon>   </b-button>
                        <b-button  class="d-block" variant="white">New York Middle 13019 <b-icon icon="arrow-right-circle" class=""></b-icon>   </b-button>

                </div>
                </b-col> -->
            <!-- </b-row>
            <b-row> -->
                <b-col>

                        <h4>Top Trouble Umbrellas</h4>
                <!-- <row class="d-flex justify-content-center"> -->
                    <!-- <b-col>

                        <b-button class="d-block" variant="white">Miami High 104913 <b-icon icon="arrow-right-circle" class=""></b-icon>   </b-button>
                    </b-col>
                    <b-col>
                        <b-button class="d-block" variant="white">California Bears 391031 <b-icon icon="arrow-right-circle" class=""></b-icon>   </b-button>

                    </b-col>
                    <b-col>
                        <b-button  class="d-block" variant="white">New York Middle 13019 <b-icon icon="arrow-right-circle" class=""></b-icon>   </b-button>

                    </b-col> -->

                <!-- </row> -->
<b-list-group class="mb-2">
    <b-list-group-item href="#">Miami High 104913 <b-icon icon="arrow-right-circle" class=""></b-icon>  </b-list-group-item>
    <b-list-group-item  href="#">New York Middle 13019 <b-icon icon="arrow-right-circle" class=""></b-icon>   </b-list-group-item>
    <b-list-group-item href="#">California Bears 391031 <b-icon icon="arrow-right-circle" class=""></b-icon>   </b-list-group-item>

</b-list-group>


            <h4>Common Issues</h4>
                <b-table selectable :items="errorTypes" class="" :fields="[...Object.keys(errorTypes[0]), 'exploreError']">
                    
      <!-- A virtual composite column -->
      <template #cell(exploreError)="">
        <b-button  variant="outline"><b-icon icon="arrow-right-circle" class=""></b-icon></b-button>
      </template>
                </b-table>
                </b-col>
            </b-row>
        </b-container>
        <div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'
const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}

export const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};
const datapoints = [0, 20, 20, 60, 60, 120, 0, 180, 120, 125, 105, 110, 170];
const days = ["Sunday" ,"Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"];
const data = {
  labels: days.slice(new Date().getUTCDay()+1).concat(days.slice(0, new Date().getUTCDay()+1)),
  datasets: [
    {
      label: 'Errors',
      data: datapoints,
      borderColor: CHART_COLORS.red,
      backgroundColor: '#ff638475',
      fill: true,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
  ]
};
      const config = {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'SSO Errors This week'
              },
            },
            interaction: {
              intersect: false,
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Value'
                },
                suggestedMin: 0,
                suggestedMax: 200
              }
            }
          },
        };
    export default {
        data() {
            return {
                myChart: {},
                errorTypes: [
                    {
                        ErrorMessage:"Could not map LtiUserIDField{name='lis_person_sourcedid', custom=false} to ltiResource", count: 14
                    },
                    { ErrorMessage: "Lti is currently disabled for your school.  Please contact your portal Administrator.", count:10,
                        },
                        {ErrorMessage:"Could not map LtiUserIDField{name='user_id', custom=false} to ltiResource", count: 5},
                        {ErrorMessage:"Invalid field: username", count: 2}
                ]
            }
        },
  methods: {
    createSSOChart() {
      var ctx = document.getElementById("myChart");

      this.myChart = new Chart(ctx, config);
    },
  },
  mounted () {
    this.createSSOChart();
  },
  destroyed () {
      console.log("DESTROYING CHSRT");
      this.myChart.destroy();
  },
    }
</script>

<style lang="scss" scoped>

</style>