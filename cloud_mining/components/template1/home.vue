<template lang="pug">
template(v-if="is_client")
    Template1UxContentTop(title="home")
    Template1UxBanner
    .announcement-wrapper
        .announcement-content(data-bs-toggle='modal' data-bs-target='#annModal' role="button")
            .announcement-left
                i.fa-solid.fa-bullhorn
                i.fa-solid.fa-bell
            .announcement-right
                NuxtMarquee(direction="left" pauseOnHover=true pauseOnClick=true speed=10 delay=0 autoFill=false) {{ $t("sample") }}


    //- Template1UxContent

    //- canvas#myChart(style="width:100%;max-width:700px")
    
    //- NuxtLink(to="/about") {{ $t("about") }}
    

    //- #lineChartContainer(style="width:100%;max-width:600px")

    //- CommonUiTemplateImage(item="" :sharedOrCustomTemplate="true" type="banner").w-100

    Template1UxFooter
</template>

<script>
// import Highcharts from "highcharts";
import { mapState } from "pinia";
import { useLayoutStore } from "~/stores/layout";


export default {

    setup() {
        const is_client = ref(false);

        return {
            is_client,
        }
    },
    components: {},
    data() {
        return {
            displayChart: null,
            chartData: {},
        };
    },
    computed: {
        ...mapState(useLayoutStore, ['template']),
    },
    mounted() {
        this.is_client = true;
        // this.getChartData();
    },
    methods: {
        async getChartData(){
            const setting = useSetting()
            let chartDataResponse = await setting.getChartData()
            
            if (chartDataResponse.statusCode == 1) {
                this.chartData = chartDataResponse.data;
            }

            // const { $createChart } = useNuxtApp();
            console.log(this.chartData.data)

            // $createChart('lineChartContainer', {
            //     chart: {
            //         type: 'line',
            //         backgroundColor: 'rgba(255, 255, 255, 0.5)',
            //         // width: '100%',
            //         // height: '300px',
            //     },
            //     title: {
            //         text: 'Line Chart',
            //     },
            //     xAxis: {
            //         categories: this.chartData.categories,
            //     },
            //     yAxis: {
            //         title: {
            //             text: 'Y-Axis',
            //         },
            //     },
            //     series: [{
            //         name: 'Series 1',
            //         data: this.chartData.series1,
            //     }, {
            //         name: 'Series 2',
            //         data: this.chartData.series2,
            //     }],
            //     responsive: true,
            // });





            this.drawChart();
        },

        drawChart(){
            
            if (Object.keys(this.chartData).length === 0) {
                console.log("No chart data")
            }
            
            if (this.chartData) {

            }

            console.log(this.chartData)
        }
    },
}
</script>

<style scoped>
/* Base styles for the announcement wrapper */
.announcement-wrapper {
  display: flex-start;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  background-color: #f8f9fa;  /* Light background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.announcement-wrapper:hover {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); 
}

/* Announcement content layout */
.announcement-content {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.announcement-content:hover {
  background-color: #e2e6ea;
}

.announcement-left {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #007bff; /* Blue color for icons */
  margin-left: 5px;
  margin-right: 5px;
}

.announcement-right {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  font-size: 16px;
  color: #333;
  max-width: 100%;
  overflow: hidden;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .announcement-content {
    padding: 10px 5px;
  }
}

</style>