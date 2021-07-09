<template>
    <div class="p-2">
        <p class="mb-2 font-weight-bold">This Week</p>
        <canvas id="ordersChart" width="300" height="300"></canvas>
    </div>
</template>

<script>
    import Chart from "chart.js/auto";
    import { CHART_COLORS,  } from "../../misc/JSChartUtils";

    const DATA_COUNT = 12;
    const labels = [];
    for (let i = 0; i < DATA_COUNT; ++i) {
        labels.push(i.toString());
    }

    const datapoints = [0, 20, 80, 90, 100, 102, 110];
    const datapoints2 = [20, 40, 80, 90, 120, 130, 140];
    const days = [
        "Su",
        "M",
        "T",
        "W",
        "Th",
        "F",
        "Sa",
    ];
    const data = {
        labels: days,
        datasets: [
            {
                label: "Renewal Orders",
                data: datapoints,
                borderColor: CHART_COLORS.blue,
                backgroundColor: (CHART_COLORS.blue),
                fill: true,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
            },
            {
                label: "New Orders",
                data: datapoints2,
                backgroundColor: (CHART_COLORS.green),
                fill: true,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
            },
        ],
    };
    const config = {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            plugins: {},
            scales: {
                x: {
                    ticks: {
                        font: function(context) {
                            console.log(context);
                            if (context.index === new Date().getDay()) {
                                return {
                                    weight: 'bold',
                                };
                            }
                        }
                    }
                }
            }
            // interaction: {
            //     intersect: false,
            // },
            // scales: {
            //     x: {
            //         display: true,
            //         title: {
            //             display: true,
            //         },
            //     },
            //     y: {
            //         display: true,
            //         // title: {
            //         //     display: true,
            //         //     text: "# Orders",
            //         // },
            //         suggestedMin: 0,
            //         suggestedMax: 200,
            //     },
            // },
        },
    };
    export default {
        data() {
            return {
                myChart: {},
            };
        },
        methods: {
            createSSOChart() {
                var ctx = document.getElementById("ordersChart");

                this.myChart = new Chart(ctx, config);
            },
        },
        mounted() {
            this.createSSOChart();
        },
        destroyed() {
            console.log("DESTROYING CHART");
            this.myChart.destroy();
        },
    };
</script>

<style lang="scss" scoped>
</style>