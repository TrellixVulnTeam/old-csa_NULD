<template>
    <div class="p-2">
        <canvas id="productChart" width="300" height="300"></canvas>
    </div>
</template>

<script>
    import Chart from "chart.js/auto";
    import { numbers } from "../../misc/JSChartUtils";
    const reflexGreen = "#72bf4b";
    const gizmoGreen = "#01a1e4";
    const fraxPurple = "#8e5ba6";
    const s4usYellow = "#f2bb13";

    const DATA_COUNT = 4;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const data = {
        labels: ["Frax", "Reflex", "Science4Us", "Gizmos"],
        datasets: [
            {
                label: "Order Products",
                data: numbers(NUMBER_CFG).map(Math.round),
                backgroundColor: [fraxPurple, reflexGreen, s4usYellow, gizmoGreen],
            },
        ],
    };
    const config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
            },
        },
    };

    export default {
        data() {
            return {
                myChart: {},
            };
        },
        methods: {
            createSSOPie() {
                var ctx = document.getElementById("productChart");

                this.myChart = new Chart(ctx, config);
            },
        },
        mounted() {
            this.createSSOPie();
        },
        destroyed() {
            console.log("DESTROYING CHART");
            this.myChart.destroy();
        },
    };
</script>

<style lang="scss" scoped>
</style>