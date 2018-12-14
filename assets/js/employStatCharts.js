$(document).ready(function () {

    var employeStatistics = document.getElementById("employeStatistics");
    const data = JSON.parse(employeStatistics.parentElement.dataset.values);
    const first_dat = [,,,,,,,,,,data[11]];

    const labels = ["بانتظار التعديل", "بانتظار الموافقة","رفض الكتروني",
                    "قبول الكتروني","قبول ودفع الكتروني","إجمالي عدد المعاملات",
                    "المصدقة","المتأخرة أكثر من يومين","متوسط إعتماد المعاملات","إنجاز فوق المطلوب","الإنجاز اليومي (اللون)"];
    
   // bar Chart
   (function(){
    
        var bar_canvas_element = document.getElementById("employStatBarChart");
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

        gradient8 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient8.addColorStop(0, '#7FAFFD');
        gradient8.addColorStop(1, '#3B86FF');

        gradient9 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient9.addColorStop(0, '#44F2BD');
        gradient9.addColorStop(1, '#00B27C');

        gradient10 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient10.addColorStop(0, '#FF6A6A');
        gradient10.addColorStop(1, '#9F4242');

        gradient11 = bar_ctx.createLinearGradient(0, 0, 0, 600);
        gradient11.addColorStop(0, '#767DAE');
        gradient11.addColorStop(1, '#4D4F5C');
 
        Chart.defaults.global.defaultFontSize = 12;
        ctx_font = Chart.helpers.fontString(25, 700, Chart.defaults.global.defaultFontFamily);
        if ($(window).width() < 900){
            Chart.defaults.global.defaultFontSize = 8;
            ctx_font = Chart.helpers.fontString(14, 600, Chart.defaults.global.defaultFontFamily);
        };
        
        var myChart = new Chart(bar_ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                        label: 'second',
                        data: first_dat,
                        backgroundColor: gradient11, 
                        hoverBackgroundColor: gradient11,
    
                        shadowOffsetX: 3,
                        shadowOffsetY: 3,
                        shadowBlur: 20,
                        shadowColor: '#4D4F5C',
                    
                },{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [ 
                        gradient1,gradient2,gradient3,
                        gradient4,gradient5,gradient6,
                        gradient7,gradient8,gradient9,
                        gradient10,gradient9
                    ], 
                    hoverBackgroundColor: [
                        gradient1,gradient2,gradient3,
                        gradient4,gradient5,gradient6,
                        gradient7,gradient8,gradient9,
                        gradient10,gradient9
                    ],

                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowBlur: 20,
                    shadowColor: ['#FF07A9','#1A8162','#E5A100',
                                  '#850CED','#3349F0','#D9581F',
                                  '#FF6A6A','#3B86FF','#00BA81',
                                  '#9F4242','#00BA81']
                },
            ]},
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
            
                    ctx.font = ctx_font;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillStyle = "#FF07A9";
            
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
                            fontColor: '#FF07A9',
                            stepSize: 1,
                            min: 0,
                            autoSkip: false,
                        },
                        gridLines: {
                            display:false,
                            zeroLineWidth: 4,
                        },
                        barPercentage: 1.0,
                        categoryPercentage: 0.6
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
    
        var line_canvas_element = document.getElementById("employStatLineChart");
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

        var myChart = new Chart(line_ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    // label: '# of Votes',
                    data: data,
                    backgroundColor: gradient1,
                    borderColor: gradient2,
                    borderWidth: 5,
                    lineTension : 0.1
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
                    "duration": 100,
                    "onComplete": function() {
                    var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
            
                    ctx.font = ctx_font;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillStyle = "#FF07A9";
            
                    this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                        var data = dataset.data[index];
                        ctx.fillText(data, line._model.x, line._model.y + 5);
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
                            fontColor: '#FF07A9',
                            stepSize: 1,
                            min: 0,
                            autoSkip: false,
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
        var ctx = document.getElementById("employStatHalfChartNo1").getContext('2d');
        const labele = labels[0];
        const data1 = data[0];
        const data2 = 100 - data[0];
        document.getElementById("employStatHalfTitleNo1").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#00BA81');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
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
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#00BA81';
              
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
        var ctx = document.getElementById("employStatHalfChartNo2").getContext('2d');
        const labele = labels[1];
        const data1 = data[1];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo2").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#3B86FF');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
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
              
                      ctx.font = ctx_font;
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
        var ctx = document.getElementById("employStatHalfChartNo3").getContext('2d');

        const labele = labels[2];
        const data1 = data[2];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo3").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#FF6A6A');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
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
              
                      ctx.font = ctx_font;
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
        var ctx = document.getElementById("employStatHalfChartNo4").getContext('2d');

        const labele = labels[3];
        const data1 = data[3];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo4").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#D9581F');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
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
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#D9581F';
              
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

    // half Chart no5
    (function(){
        var ctx = document.getElementById("employStatHalfChartNo5").getContext('2d');

        const labele = labels[4];
        const data1 = data[4];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo5").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#3349F0');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
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
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#3349F0';
              
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

    // Half Chart no6
    (function(){
        var ctx = document.getElementById("employStatHalfChartNo6").getContext('2d');

        const labele = labels[5];
        const data1 = data[5];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo6").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#850CED');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
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
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#850CED';
              
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

    // half Chart no7
    (function(){
        var ctx = document.getElementById("employStatHalfChartNo7").getContext('2d');
        
        const labele = labels[6];
        const data1 = data[6];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo7").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#E5A100');

        // Chart.defaults.global.defaultFontFamily " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
                    shadowOffsetX: 0,
                    shadowOffsetY: 6,
                    shadowBlur: 6,
                    shadowColor: '#E5A100'
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
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#E5A100';
              
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

    // Half Chart no8
    (function(){
        var ctx = document.getElementById("employStatHalfChartNo8").getContext('2d');

        const labele = labels[7];
        const data1 = data[7];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo8").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#1A8162');

        // Chart.defaults.global.defaultFontFamily " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
                    shadowOffsetX: 0,
                    shadowOffsetY: 6,
                    shadowBlur: 6,
                    shadowColor: '#1A8162'
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
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#1A8162';
              
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

    // Half Chart no9
    (function(){
        var ctx = document.getElementById("employStatHalfChartNo9").getContext('2d');

        const labele = labels[8];
        const data1 = data[8];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo9").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#FF07A9');

        // Chart.defaults.global.defaultFontFamily " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor:'#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
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
              
                      ctx.font = ctx_font;
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

    // Half Chart no10
    (function(){
        var ctx = document.getElementById("employStatHalfChartNo10").getContext('2d');

        const labele = labels[9];
        const data1 = data[9];
        const data2 = 100 - data1;
        document.getElementById("employStatHalfTitleNo10").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#711466');

        // Chart.defaults.global.defaultFontFamily " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

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
                    borderColor: '#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8'
                    ],
                    borderWidth: 2,
                    shadowOffsetX: 0,
                    shadowOffsetY: 6,
                    shadowBlur: 6,
                    shadowColor: '#711466'
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
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#711466';
              
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

    // Half Chart no11
    (function(){
        var ctx = document.getElementById("employStatHalfChartNo11").getContext('2d');

        const labele = labels[10];
        const data1 = data[10];
        const data2 = 100 - data1;
        const data3 = data[11];
        document.getElementById("employStatHalfTitleNo11").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.3, '#000000');
        gradient1.addColorStop(0, '#00BA81');

        gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
        gradient2.addColorStop(1, '#000000');
        gradient2.addColorStop(0.5, '#000000');
        gradient2.addColorStop(0, '#FF6A6A');

        var right_half_label = 75;
        if ($(window).width() < 1800){
            var right_half_label = 65;
        };
        if ($(window).width() < 1700){
            var right_half_label = 55;
        };
        if ($(window).width() < 1600){
            var right_half_label = 45;
        };

        // Chart.defaults.global.defaultFontFamily " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2,data3],
                    text: "ff",
                    backgroundColor: [
                        gradient1,'#F0F2F8',gradient2,
                    ],
                    hoverBackgroundColor: [
                        gradient1,'#F0F2F8',gradient2,
                    ],
                    borderColor:'#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8',gradient2,
                    ],
                    borderWidth: 2,
                    shadowOffsetX: 0,
                    shadowOffsetY: 6,
                    shadowBlur: 6,
                    shadowColor: '#4D4F5C'
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
                        bottom: 40
                    }
                },
                "animation": {
                    "duration": 1,
                    "onComplete": function() {
                      var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#00B27C';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var finshed_data = dataset.data[0]+'%';
                        //   var unfinshed_data = dataset.data[2]+'%';
                          ctx.fillText(finshed_data, line._model.x - right_half_label, line._model.y + 40);
                        //   ctx.fillText(unfinshed_data, line._model.x + right_half_label, line._model.y + 40);
                        });
                      });
                        var chartInst = this.chart,
                        ctxR = chartInst.ctx;
                
                        ctxR.font = ctx_font;
                        ctxR.textAlign = 'center';
                        ctxR.textBaseline = 'bottom';
                        ctxR.fillStyle = '#FF6A6A';
                
                        this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInst.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                            // var finshed_data = dataset.data[0]+'%';
                            var unfinshed_data = dataset.data[2]+'%';
                            // ctx.fillText(finshed_data, line._model.x - right_half_label, line._model.y + 40);
                            ctx.fillText(unfinshed_data, line._model.x + right_half_label, line._model.y + 40);
                        });
                        });
                    },
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
        document.getElementById("employStatTitleNo1").innerHTML = labele;
        $('#employStatCircleChartNo1').circleProgress({
            value: data[0]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(0,186,129,0.2)',
            animationStartValue: 0.5,
            fill: "#00BA81"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no2
    (function(){
        const labele = labels[1];
        document.getElementById("employStatTitleNo2").innerHTML = labele;
        $('#employStatCircleChartNo2').circleProgress({
            value: data[1]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(59,134,255,0.2)',
            animationStartValue: 0.5,
            fill: "#3B86FF"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no3
    (function(){
        const labele = labels[2];
        document.getElementById("employStatTitleNo3").innerHTML = labele;
        $('#employStatCircleChartNo3').circleProgress({
            value: data[2]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(255,106,106,0.2)',
            animationStartValue: 0.5,
            fill: "#FF6A6A"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no4
    (function(){
        const labele = labels[3];
        document.getElementById("employStatTitleNo4").innerHTML = labele;
        $('#employStatCircleChartNo4').circleProgress({
            value: data[3]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(217,88,31,0.2)',
            animationStartValue: 0.5,
            fill: "#D9581F"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no5
    (function(){
        const labele = labels[4];
        document.getElementById("employStatTitleNo5").innerHTML = labele;
        $('#employStatCircleChartNo5').circleProgress({
            value: data[4]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(51,73,240,0.2)',
            animationStartValue: 0.5,
            fill: "#3349F0"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no6
    (function(){
        const labele = labels[5];
        document.getElementById("employStatTitleNo6").innerHTML = labele;
        $('#employStatCircleChartNo6').circleProgress({
            value: data[5]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(133,12,237,0.2)',
            animationStartValue: 0.5,
            fill: "#850CED"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no7
    (function(){
        const labele = labels[6];
        document.getElementById("employStatTitleNo7").innerHTML = labele;
        $('#employStatCircleChartNo7').circleProgress({
            value: data[6]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(229,161,0,0.2)',
            animationStartValue: 0.5,
            fill: "#E5A100"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no8
    (function(){
        const labele = labels[7];
        document.getElementById("employStatTitleNo8").innerHTML = labele;
        $('#employStatCircleChartNo8').circleProgress({
            value: data[7]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(26,129,98,0.2)',
            animationStartValue: 0.5,
            fill: "#1A8162"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no9
    (function(){
        const labele = labels[8];
        document.getElementById("employStatTitleNo9").innerHTML = labele;
        $('#employStatCircleChartNo9').circleProgress({
            value: data[8]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(255,7,169,0.2)',
            animationStartValue: 0.5,
            fill: "#FF07A9"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no10
    (function(){
        const labele = labels[9];
        document.getElementById("employStatTitleNo10").innerHTML = labele;
        $('#employStatCircleChartNo10').circleProgress({
            value: data[9]/100,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(77,79,92,0.2)',
            animationStartValue: 0.5,
            fill: "#4D4F5C"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100)  );
        });
    })();

    // circle Chart no11
    (function(){
        var ctx = document.getElementById("employStatCircleChartNo11").getContext('2d');

        const labele = labels[10];
        const data1 = data[10];
        const data2 = 100 - data1;
        const data3 = data[11];
        const data4 = 100 - data3
        document.getElementById("employStatTitleNo11").innerHTML = labele;

        gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.3, '#000000');
        gradient1.addColorStop(0, '#00BA81');

        gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
        gradient2.addColorStop(1, '#000000');
        gradient2.addColorStop(0.5, '#000000');
        gradient2.addColorStop(0, '#FF6A6A');

        var right_half_label = 75;
        if ($(window).width() < 1800){
            var right_half_label = 65;
        };
        if ($(window).width() < 1700){
            var right_half_label = 55;
        };
        if ($(window).width() < 1600){
            var right_half_label = 45;
        };

        // Chart.defaults.global.defaultFontFamily " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,data2,data3,data4],
                    text: "ff",
                    backgroundColor: [
                        gradient1,'#F0F2F8',gradient2,'#F0F2F8'
                    ],
                    hoverBackgroundColor: [
                        gradient1,'#F0F2F8',gradient2,'#F0F2F8'
                    ],
                    borderColor:'#F0F2F8',
                    hoverBorderColor: [
                        gradient1,'#F0F2F8',gradient2,'#F0F2F8'
                    ],
                    borderWidth: 1,
                    shadowOffsetX: 0,
                    shadowOffsetY: 6,
                    shadowBlur: 6,
                    shadowColor: '#4D4F5C'
                }]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 2 * Math.PI,
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 40
                    }
                },
                "animation": {
                    "duration": 1,
                    "onComplete": function() {
                      var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
              
                      ctx.font = ctx_font;
                      ctx.textAlign = 'right';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = '#00B27C';
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                          var finshed_data = dataset.data[0]+'%';
                        //   var unfinshed_data = dataset.data[2]+'%';
                          ctx.fillText(finshed_data, line._model.x - right_half_label, line._model.y + 40);
                        //   ctx.fillText(unfinshed_data, line._model.x + right_half_label, line._model.y + 40);
                        });
                      });
                        var chartInst = this.chart,
                        ctxR = chartInst.ctx;
                
                        ctxR.font = ctx_font;
                        ctxR.textAlign = 'left';
                        ctxR.textBaseline = 'top';
                        ctxR.fillStyle = '#FF6A6A';
                
                        this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInst.controller.getDatasetMeta(i);
                        meta.data.forEach(function(line, index) {
                            // var finshed_data = dataset.data[0]+'%';
                            var unfinshed_data = dataset.data[2]+'%';
                            // ctx.fillText(finshed_data, line._model.x - right_half_label, line._model.y + 40);
                            ctx.fillText(unfinshed_data, line._model.x + right_half_label , line._model.y - 40);
                        });
                        });
                    },
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

});