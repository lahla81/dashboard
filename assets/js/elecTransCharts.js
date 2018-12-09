$(document).ready(function () {

    var employeStatistics = document.getElementById("electronicStatistics");
    const values = JSON.parse(employeStatistics.parentElement.dataset.values);
    const data = JSON.parse(employeStatistics.parentElement.dataset.values);

    var count = 0;
    for(var i=0, n=data.length; i < n; i++) 
    { 
        count += data[i]; 
    }
    const week = [data[0],data[1],data[2],data[3],data[4],data[5],count];

    const labels = ["السبت", "الأحد","الإثنين",
                    "الثلاثاء","الأربعاء","الخميس","المجموع"];
    
   // bar Chart
   (function(){
    
        var bar_canvas_element = document.getElementById("elecStatBarChart");
        var bar_ctx =  bar_canvas_element.getContext('2d');
        
        gradient1 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient1.addColorStop(0, '#FF95DA');
        gradient1.addColorStop(1, '#E50497');

        gradient2 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient2.addColorStop(0, '#45C19C');
        gradient2.addColorStop(1, '#10523D');

        gradient3 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient3.addColorStop(0, '#FFD062');
        gradient3.addColorStop(1, '#D59704');

        gradient4 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient4.addColorStop(0, '#BE72FF');
        gradient4.addColorStop(1, '#7B0ED9');

        gradient5 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient5.addColorStop(0, '#7B8AFF');
        gradient5.addColorStop(1, '#2F44E3');

        gradient6 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient6.addColorStop(0, '#FF8B58');
        gradient6.addColorStop(1, '#C7521F');

        gradient7 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient7.addColorStop(0, '#FA9F9F');
        gradient7.addColorStop(1, '#F06161');
        
        Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
        // Chart.defaults.global.defaultFontSize = 12;
        
        var myChart = new Chart(bar_ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    // label: '# of Votes',
                    data: week,
                    backgroundColor: [ 
                        gradient1,gradient2,gradient3,
                        gradient4,gradient5,gradient6,
                        gradient7
                    ], 
                    hoverBackgroundColor: [
                        gradient1,gradient2,gradient3,
                        gradient4,gradient5,gradient6,
                        gradient7
                    ],

                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowBlur: 20,
                    shadowColor: ['#FF07A9','#1A8162','#E5A100',
                                  '#850CED','#3349F0','#D9581F',
                                  '#FF6A6A']
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 35,
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
            
                    ctx.font = Chart.helpers.fontString(35, 700, Chart.defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillStyle = "#850CED";
            
                    this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(bar, index) {
                        var data = dataset.data[index];
                        ctx.fillText(data, bar._model.x, bar._model.y + 5);
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
                            fontColor: '#FF07A9'
                        },
                        gridLines: {
                            display:false,
                            zeroLineWidth: 4,
                        },
                        barPercentage: 1.0,
                        categoryPercentage: 0.4
                    }]
                },
                tooltips: {
                    enabled: false
                }          
            }
        });

    })();

    // line chart
    (function(){
    
        var line_canvas_element = document.getElementById("elecStatLineChart");
        var line_ctx =  line_canvas_element.getContext('2d');

        gradient1 = line_ctx.createLinearGradient(0, 0, 0, 600);
        gradient1.addColorStop(1, 'rgba(59,134,255,0.19)');
        gradient1.addColorStop(0, '#005EF7');

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

        Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
        // Chart.defaults.global.defaultFontSize = 20;
        
        var myChart = new Chart(line_ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    // label: '# of Votes',
                    data: week,
                    backgroundColor: gradient1,
                    borderColor: gradient2,
                    borderWidth: 15,
                    lineTension : 0.1
                }]
            },
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
            
                    ctx.font = Chart.helpers.fontString(35, 700, Chart.defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillStyle = "#10523D";
            
                    this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                        var data = dataset.data[index];
                        ctx.fillText(data, line._model.x, line._model.y + 50);
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
                            fontColor: '#FF07A9'
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

    })();

    // half Chart no1
    (function(){
        var ctx = document.getElementById("elecStatHalfChartNo1").getContext('2d');
        const labele = labels[0];
        const data1 = week[0];
        const data2 = 100 - data1;
        document.getElementById("elecStatHalfTitleNo1").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#00BA81');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2],
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
                    shadowColor: '#00BA81'
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
                      ctx.fillStyle = '#00BA81';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0];
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
        var ctx = document.getElementById("elecStatHalfChartNo2").getContext('2d');
        const labele = labels[1];
        const data1 = week[1];
        const data2 = 100 - data1;
        document.getElementById("elecStatHalfTitleNo2").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#3B86FF');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2],
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
                    shadowColor: '#3B86FF'
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
                      ctx.fillStyle = '#3B86FF';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0];
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

    // half Chart no3
    (function(){
        var ctx = document.getElementById("elecStatHalfChartNo3").getContext('2d');

        const labele = labels[2];
        const data1 = week[2];
        const data2 = 100 - data1;
        document.getElementById("elecStatHalfTitleNo3").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#FF6A6A');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2],
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
                    shadowColor: '#FF6A6A'
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
                      ctx.fillStyle = '#FF6A6A';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0];
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

    // Half Chart no4
    (function(){
        var ctx = document.getElementById("elecStatHalfChartNo4").getContext('2d');

        const labele = labels[3];
        const data1 = week[3];
        const data2 = 100 - data1;
        document.getElementById("elecStatHalfTitleNo4").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#D9581F');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2],
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
                    shadowColor: '#D9581F'
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
                      ctx.fillStyle = '#D9581F';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0];
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

    // half Chart no5
    (function(){
        var ctx = document.getElementById("elecStatHalfChartNo5").getContext('2d');

        const labele = labels[4];
        const data1 = week[4];
        const data2 = 100 - data1;
        document.getElementById("elecStatHalfTitleNo5").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#3349F0');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2],
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
                    shadowColor: '#3349F0'
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
                      ctx.fillStyle = '#3349F0';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0];
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

    // Half Chart no6
    (function(){
        var ctx = document.getElementById("elecStatHalfChartNo6").getContext('2d');

        const labele = labels[5];
        const data1 = week[5];
        const data2 = 100 - data1;
        document.getElementById("elecStatHalfTitleNo6").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#850CED');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2],
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
                    shadowColor: '#850CED'
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
                      ctx.fillStyle = '#850CED';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0];
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

    // half Chart no7
    (function(){
        var ctx = document.getElementById("elecStatHalfChartNo7").getContext('2d');
        
        const labele = labels[6];
        const data1 = week[6];
        const data2 = 100 - data1;
        document.getElementById("elecStatHalfTitleNo7").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#E5A100');

        Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2],
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
                    shadowColor: '#E5A100'
                }]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 0.6 * Math.PI,
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
                      ctx.fillStyle = '#E5A100';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[0];
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
        const labele = labels[0];
        document.getElementById("elecStatTitleNo1").innerHTML = labele;
        $('#elecStatCircleChartNo1').circleProgress({
            value: week[0]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(0,186,129,0.2)',
            animationStartValue: 0.5,
            fill: "#00BA81"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100));
        });
    })();

    // circle Chart no2
    (function(){
        const labele = labels[1];
        document.getElementById("elecStatTitleNo2").innerHTML = labele;
        $('#elecStatCircleChartNo2').circleProgress({
            value: week[1]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(59,134,255,0.2)',
            animationStartValue: 0.5,
            fill: "#3B86FF"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100));
        });
    })();

    // circle Chart no3
    (function(){
        const labele = labels[2];
        document.getElementById("elecStatTitleNo3").innerHTML = labele;
        $('#elecStatCircleChartNo3').circleProgress({
            value: week[2]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(255,106,106,0.2)',
            animationStartValue: 0.5,
            fill: "#FF6A6A"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100));
        });
    })();

    // circle Chart no4
    (function(){
        const labele = labels[3];
        document.getElementById("elecStatTitleNo4").innerHTML = labele;
        $('#elecStatCircleChartNo4').circleProgress({
            value: week[3]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(217,88,31,0.2)',
            animationStartValue: 0.5,
            fill: "#D9581F"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100));
        });
    })();

    // circle Chart no5
    (function(){
        const labele = labels[4];
        document.getElementById("elecStatTitleNo5").innerHTML = labele;
        $('#elecStatCircleChartNo5').circleProgress({
            value: week[4]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(51,73,240,0.2)',
            animationStartValue: 0.5,
            fill: "#3349F0"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100));
        });
    })();

    // circle Chart no6
    (function(){
        const labele = labels[5];
        document.getElementById("elecStatTitleNo6").innerHTML = labele;
        $('#elecStatCircleChartNo6').circleProgress({
            value: week[5]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(133,12,237,0.2)',
            animationStartValue: 0.5,
            fill: "#850CED"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100));
        });
    })();

    // circle Chart no7
    (function(){
        const labele = labels[6];
        document.getElementById("elecStatTitleNo7").innerHTML = labele;
        $('#elecStatCircleChartNo7').circleProgress({
            value: week[6]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(229,161,0,0.2)',
            animationStartValue: 0.5,
            fill: {gradient: [['#FFD062', .8], ['#9102FC', .3]], gradientAngle: Math.PI / 3},
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100));
        });
    })();

});