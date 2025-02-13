import Highcharts from 'highcharts';
// import HighchartsStock from 'highcharts/modules/stock';

// HighchartsStock(Highcharts);

export default defineNuxtPlugin(nuxtApp => {
  // Expose Highcharts globally so you can use it in your components
  nuxtApp.provide('highcharts', Highcharts);

  const defaultChartOptions = {
    chart: {
      type: 'column',         // line / bar / area
      backgroundColor: 'transparent', // Optional background color
      height: "500px",
    },
    title: {
      text: '', // Sample chart title
      align: 'center',   // alignment, default center (left/right/center)
      useHTML: true,        // Set to true to use HTML, default is false
    },
    subtitle: {
      text: '', // Sample chart sub-title
      align: 'center',   // alignment, default center (left/right/center)
      useHTML: true,        // Set to true to use HTML, default is false
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Sample chart categories
    },
    yAxis: {
      title: {
        text: 'Value',  // Sample chart y-axis
      },
    },
    series: [{
      name: 'Sample Series',    // Sample chart series
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],    // Sample chart data
    }],
    plotOptions: {
      series: {
        borderWidth: 0,
      },
    },
    
    credits: {
        enabled: false,
      },
  };

  const createChart = (containerId, customOptions = {}) => {
    const chartOptions = {
      ...defaultChartOptions, // Default options
      ...customOptions, // Provided options
      chart: {
        ...defaultChartOptions.chart, // Merge chart settings
        ...customOptions.chart, // Merge custom chart type or settings
      },
      title: {
        ...defaultChartOptions.title, // Merge title
        ...customOptions.title, // Merge custom title
      },
      xAxis: {
        ...defaultChartOptions.xAxis, // Merge xAxis categories
        ...customOptions.xAxis, // Merge custom xAxis settings
      },
      yAxis: {
        ...defaultChartOptions.yAxis, // Merge yAxis title
        ...customOptions.yAxis, // Merge custom yAxis settings
      },
      series: customOptions.series || defaultChartOptions.series, // Merge series data
    };
    
    return Highcharts.chart(containerId, chartOptions);
  };

//   const createStockChart = (containerId, customOptions = {}) => {
//     const chartOptions = {
//       ...defaultChartOptions, // Default options
//       ...customOptions, // Provided options
//       chart: {
//         ...defaultChartOptions.chart, // Merge chart settings
//         ...customOptions.chart, // Merge custom chart type or settings
//       },
//       title: {
//         ...defaultChartOptions.title, // Merge title
//         ...customOptions.title, // Merge custom title
//       },
//       xAxis: {
//         ...defaultChartOptions.xAxis, // Merge xAxis categories
//         ...customOptions.xAxis, // Merge custom xAxis settings
//       },
//       yAxis: {
//         ...defaultChartOptions.yAxis, // Merge yAxis title
//         ...customOptions.yAxis, // Merge custom yAxis settings
//       },
//       series: customOptions.series || defaultChartOptions.series, // Merge series data
//     };
    
//     return Highcharts.stockChart(containerId, chartOptions);
//   };

  nuxtApp.provide('createChart', createChart);

//   nuxtApp.provide('createStockChart', createStockChart);
});
