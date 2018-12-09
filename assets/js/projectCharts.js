$(document).ready(function () {

        // bar Chart
        var bar_canvas_element = document.getElementById('bar-chart');
        var bar_ctx = bar_canvas_element.getContext('2d');
        const bar_data = JSON.parse(bar_canvas_element.parentElement.dataset.values);
        const bar_labels = [ "نسبة الإنجاز الحالية", "نسبة الإنجاز السابقة"];
        gradient1 = bar_ctx.createLinearGradient(0, 0, 0, 600);

        gradient1.addColorStop(0, '#BE72FF');
        gradient1.addColorStop(1, '#7B0ED9');

        gradient2 = bar_ctx.createLinearGradient(0, 0, 0, 600);

        gradient2.addColorStop(0, '#FF95DA');
        gradient2.addColorStop(1, '#E50497');
        
        Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
        // Chart.defaults.global.defaultFontSize = 12;
        
        var myChart = new Chart(bar_ctx, {
            type: 'bar',
            data: {
                labels: bar_labels,
                datasets: [{
                    // label: '# of Votes',
                    data: bar_data,
                    backgroundColor: [ 
                        gradient2,gradient1
                    ], 
                    hoverBackgroundColor: [
                        gradient2,gradient1
                    ],

                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowBlur: 20,
                    shadowColor: ['#FF07A9','#850CED']
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 30,
                        bottom: 10
                    }
                },
                legend: {
                    display : false
                },
                plugins: {
                    
                },
                "animation": {
                    "duration": 1,
                    "onComplete": function() {
                      var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
              
                      ctx.font = Chart.helpers.fontString(25, 700, Chart.defaults.global.defaultFontFamily);
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = "white";
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(bar, index) {
                          var data = dataset.data[index]+'%';
                          ctx.fillText(data, bar._model.x, bar._model.y + 35);
                        });
                      });
                    }
                  },
                scales: {
                    pointLabels :{
                        fontColor: "red",
                    },
                    yAxes: [{
                        ticks: {
                            display: false,
                            beginAtZero:true
                        },
                        gridLines: {
                            color: '#E2E2E2',
                            zeroLineColor: '#707070',
                            zeroLineWidth: 1
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: ['#FF07A9']
                        },
                        gridLines: {
                            display:false,
                            zeroLineWidth: 4,
                        },
                        barPercentage: 1.0,
                        categoryPercentage: 0.3
                    }]
                },
                tooltips: {
                    enabled: false
                }          
            }
        });


    // line Chart
        var line_canvas_element = document.getElementById('line-chart');
        var line_ctx = line_canvas_element.getContext('2d');
        const line_data = JSON.parse(line_canvas_element.parentElement.dataset.values);
        const line_labels = [ "", "نسبة الإنجاز الحالية","", "نسبة الإنجاز السابقة",""];

        gradient2 = line_ctx.createLinearGradient(0, 0, 800, 800);

        gradient2.addColorStop(000, '#00BA81');
        gradient2.addColorStop(0.1, '#9102FC');
        gradient2.addColorStop(0.2, '#45C19C');
        gradient2.addColorStop(0.3, '#FFD062');
        gradient2.addColorStop(0.4, '#005EF7');
        gradient2.addColorStop(0.5, '#C7521F');
        gradient2.addColorStop(0.6, '#FF95DA');
        gradient2.addColorStop(0.7, '#7B8AFF');
        gradient2.addColorStop(0.8, '#FF8B58');
        gradient2.addColorStop(0.9, '#BE72FF');
        gradient2.addColorStop(1.0, '#44F2BD');


        gradient3 = line_ctx.createLinearGradient(0, 0, 0, 600);

        gradient3.addColorStop(1, 'rgba(59,134,255,0)');
        gradient3.addColorStop(0, '#3B86FF');

        Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var chart = new Chart(line_ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: line_labels,
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: gradient3,
                    borderColor: gradient2,
                    borderWidth: 15,
                    data: line_data,
                    lineTension : 0.3
                }]
            },
        
            // Configuration options go here
            options: {
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
                legend: {
                    display : false
                },
                plugins: {
                    
                },
                "animation": {
                    "duration": 1,
                    "onComplete": function() {
                      var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
              
                      ctx.font = Chart.helpers.fontString(25, 700, Chart.defaults.global.defaultFontFamily);
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = "white";
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[index]+'%';
                          ctx.fillText(data, line._model.x, line._model.y + 35);
                        });
                      });
                    }
                  },
                scales: {
                    pointLabels :{
                        fontColor: "red",
                    },
                    yAxes: [{
                        ticks: {
                            display: false,
                            beginAtZero:true
                        },
                        gridLines: {
                            color: '#E2E2E2',
                            zeroLineColor: '#707070',
                            zeroLineWidth: 1
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: ['#FF07A9']
                        },
                        gridLines: {
                            display:false,
                            zeroLineWidth: 4,
                        },
                    }]
                },
                tooltips: {
                enabled: false
                }          
            }
        });


    // half Chart no 1
    (function(){
        var ctx = document.getElementById("prev-half-chart").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#A341F7');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [50,100-50],
                    text: "ff",
                    backgroundColor: [
                        gradient1,'#F0F2F8'
                    ],
                    hoverBackgroundColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 1,
                    shadowOffsetX: 0,
                    shadowOffsetY: 6,
                    shadowBlur: 6,
                    shadowColor: '#A341F7'
                }]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
                "animation": {
                    "duration": 1,
                    "onComplete": function() {
                      var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
              
                      ctx.font = Chart.helpers.fontString(28, 700, Chart.defaults.global.defaultFontFamily);
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#A341F7';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0]+'%';
                          ctx.fillText(data, line._model.x, line._model.y + 5);
                        });
                      });
                    }
                  },
                legend: {
                    display : false
                },
                tooltips: {
                    enabled: false
                }
            }
        })
    })();

    // Half Chart no2
    (function(){
        var ctx = document.getElementById("next-half-chart").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#FF07A9');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [88,100-88],
                    text: "ff",
                    backgroundColor: [
                        gradient1,'#F0F2F8'
                    ],
                    hoverBackgroundColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 1,
                    shadowOffsetX: 0,
                    shadowOffsetY: 6,
                    shadowBlur: 6,
                    shadowColor: '#FF07A9'
                }]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
                "animation": {
                    "duration": 1,
                    "onComplete": function() {
                      var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
              
                      ctx.font = Chart.helpers.fontString(28, 700, Chart.defaults.global.defaultFontFamily);
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#FF07A9';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0]+'%';
                          ctx.fillText(data, line._model.x, line._model.y + 5);
                        });
                      });
                    }
                  },
                legend: {
                    display : false
                },
                tooltips: {
                    enabled: false
                }
            }
        })
     })();

     // circle Chart no1
     (function(){
        $('#prev-circle-body').circleProgress({
            value: 0.5,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(133,12,237,0.2)',
            animationStartValue: 0.5,
            fill: "#850CED"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();

    // circle Chart no2
    (function(){
        $('#next-circle-body').circleProgress({
            value: 0.88,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(255,7,169,0.2)',
            animationStartValue: 0.5,
            fill: "#FF07A9"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();
});