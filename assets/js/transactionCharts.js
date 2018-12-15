$(document).ready(function () {

    const labels = ["بانتظار التعديل", "بانتظار الموافقة","رفض الكتروني",
                    "قبول الكتروني","قبول ودفع الكتروني","إجمالي عدد المعاملات",
                    "المصدقة","المتأخرة اكثر عن يومين","الملغاة بعد خمس ايام عمل"];

    var transaction_chart = document.getElementById("bar-chart");
    const data = JSON.parse(transaction_chart.parentElement.dataset.values);

    // bar Chart
        var ctx =  transaction_chart.getContext('2d');

        gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient1.addColorStop(0, '#FF95DA');
        gradient1.addColorStop(1, '#E50497');

        gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient2.addColorStop(0, '#45C19C');
        gradient2.addColorStop(1, '#10523D');

        gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient3.addColorStop(0, '#FFD062');
        gradient3.addColorStop(1, '#D59704');

        gradient4 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient4.addColorStop(0, '#BE72FF');
        gradient4.addColorStop(1, '#7B0ED9');

        gradient5 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient5.addColorStop(0, '#7B8AFF');
        gradient5.addColorStop(1, '#2F44E3');

        gradient6 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient6.addColorStop(0, '#FF8B58');
        gradient6.addColorStop(1, '#C7521F');

        gradient7 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient7.addColorStop(0, '#FA9F9F');
        gradient7.addColorStop(1, '#F06161');

        gradient8 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient8.addColorStop(0, '#7FAFFD');
        gradient8.addColorStop(1, '#3B86FF');

        gradient9 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient9.addColorStop(0, '#44F2BD');
        gradient9.addColorStop(1, '#00B27C');

        gradient14 = ctx.createLinearGradient(0, 0, 800, 800);
        gradient14.addColorStop(000, '#00BA81');
        gradient14.addColorStop(0.1, '#9102FC');
        gradient14.addColorStop(0.2, '#45C19C');
        gradient14.addColorStop(0.3, '#FFD062');
        gradient14.addColorStop(0.4, '#005EF7');
        gradient14.addColorStop(0.5, '#C7521F');
        gradient14.addColorStop(0.6, '#FF95DA');
        gradient14.addColorStop(0.7, '#7B8AFF');
        gradient14.addColorStop(0.8, '#FF8B58');
        gradient14.addColorStop(0.9, '#BE72FF');
        gradient14.addColorStop(1.0, '#44F2BD');

        gradhalf0 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf0.addColorStop(1, '#000000');
        gradhalf0.addColorStop(0.5, '#000000');
        gradhalf0.addColorStop(0, '#00BA81');

        gradhalf1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf1.addColorStop(1, '#000000');
        gradhalf1.addColorStop(0.5, '#000000');
        gradhalf1.addColorStop(0, '#3B86FF');

        gradhalf2 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf2.addColorStop(1, '#000000');
        gradhalf2.addColorStop(0.5, '#000000');
        gradhalf2.addColorStop(0, '#FF6A6A');

        gradhalf3 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf3.addColorStop(1, '#000000');
        gradhalf3.addColorStop(0.5, '#000000');
        gradhalf3.addColorStop(0, '#D9581F');

        gradhalf4 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf4.addColorStop(1, '#000000');
        gradhalf4.addColorStop(0.5, '#000000');
        gradhalf4.addColorStop(0, '#3349F0');

        gradhalf5 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf5.addColorStop(1, '#000000');
        gradhalf5.addColorStop(0.5, '#000000');
        gradhalf5.addColorStop(0, '#850CED');

        gradhalf6 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf6.addColorStop(1, '#000000');
        gradhalf6.addColorStop(0.5, '#000000');
        gradhalf6.addColorStop(0, '#E5A100');

        gradhalf7 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf7.addColorStop(1, '#000000');
        gradhalf7.addColorStop(0.5, '#000000');
        gradhalf7.addColorStop(0, '#1A8162');

        gradhalf8 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf8.addColorStop(1, '#000000');
        gradhalf8.addColorStop(0.5, '#000000');
        gradhalf8.addColorStop(0, '#FF07A9');

        bgColor = [ gradhalf0,gradhalf1,gradhalf2,gradhalf3,
            gradhalf4,gradhalf5,gradhalf6,gradhalf7,
            gradhalf8];

        var halfShadowColor= [  '#00BA81','#3B86FF','#FF6A6A',
                                '#D9581F','#3349F0','#850CED',
                                '#E5A100','#1A8162','#FF07A9',
                                '#711466','#4D4F5C','#B51E1E',
                                '#00BA81','#3B86FF' ];

        var emptyFill = [
            'rgba(0,186,129,0.2)','rgba(59,134,255,0.2)','rgba(255,106,106,0.2)',
            'rgba(217,88,31,0.2)','rgba(51,73,240,0.2)','rgba(133,12,237,0.2)',
            'rgba(229,161,0,0.2)','rgba(26,129,98,0.2)','rgba(255,7,169,0.2)',
            'rgba(77,79,92,0.2)','rgba(113,20,102,0.2)','rgba(181,30,30,0.2)',
            'rgba(0,186,129,0.2)','rgba(59,134,255,0.2)'
]
        
        Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
        Chart.defaults.global.defaultFontSize = 12;
        ctx_font = Chart.helpers.fontString(25, 700, Chart.defaults.global.defaultFontFamily);
        if ($(window).width() < 900){
            Chart.defaults.global.defaultFontSize = 8;
            ctx_font = Chart.helpers.fontString(14, 600, Chart.defaults.global.defaultFontFamily);
        };
        
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    // label: '# of Votes',
                    data: data,
                    backgroundColor: [ 
                        gradient1,gradient2,gradient3,
                        gradient4,gradient5,gradient6,
                        gradient7,gradient8,gradient9,
                    ], 
                    hoverBackgroundColor: [
                        gradient1,gradient2,gradient3,
                        gradient4,gradient5,gradient6,
                        gradient7,gradient8,gradient9,
                    ],

                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowBlur: 20,
                    shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                    '#850CED','#3349F0','#D9581F',
                                    '#FF6A6A','#3B86FF','#00BA81']
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
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
                    "duration": 400,
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
                        categoryPercentage: 0.4
                    }]
                },
                tooltips: {
                    enabled: false
                }          
            }
        });
    
    // line chart
    (function(){
    
        var ctx = document.getElementById("line-chart").getContext('2d');

        gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient1.addColorStop(1, 'rgba(59,134,255,0.19)');
        gradient1.addColorStop(0, '#005EF7');

        gradient2 = ctx.createLinearGradient(0, 0, 800, 800);

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

        var myChart = new Chart(ctx, {
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
                        left: 20,
                        right: 20,
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

                    ctx.font = ctx_font;
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
                    }]
                },
                tooltips: {
                    enabled: false
                }          
            },

        });

    })();

    // half Chart no1
    (function(){
        var ctx = document.getElementById("half-chart-no1").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#00BA81');

        const data1 = data[0];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
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
        var ctx = document.getElementById("half-chart-no2").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#3B86FF');

        const data1 = data[1];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
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
        var ctx = document.getElementById("half-chart-no3").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#FF6A6A');

        const data1 = data[2];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
                    text: "ff",
                    backgroundColor:[
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
        var ctx = document.getElementById("half-chart-no4").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#D9581F');

        const data1 = data[3];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
                    text: "ff",
                    backgroundColor:[
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
        var ctx = document.getElementById("half-chart-no5").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#3349F0');

        const data1 = data[4];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
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
        var ctx = document.getElementById("half-chart-no6").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#850CED');

        const data1 = data[5];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
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
        var ctx = document.getElementById("half-chart-no7").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#E5A100');

        const data1 = data[6];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
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

    // Half Chart no8
    (function(){
        var ctx = document.getElementById("half-chart-no8").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#1A8162');

        const data1 = data[7];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
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

    // Half Chart no9
    (function(){
        var ctx = document.getElementById("half-chart-no9").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#FF07A9');

        const data1 = data[8];

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [data1,100-data1],
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
        $('#circle-body-no1').circleProgress({
            value: data[0]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(0,186,129,0.2)',
            animationStartValue: 0.5,
            fill: "#00BA81"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

    // circle Chart no2
    (function(){
        $('#circle-body-no2').circleProgress({
            value: data[1]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(59,134,255,0.2)',
            animationStartValue: 0.5,
            fill: "#3B86FF"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

     // circle Chart no3
     (function(){
        $('#circle-body-no3').circleProgress({
            value: data[2]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(255,106,106,0.2)',
            animationStartValue: 0.5,
            fill: "#FF6A6A"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

    // circle Chart no4
    (function(){
        $('#circle-body-no4').circleProgress({
            value: data[3]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(217,88,31,0.2)',
            animationStartValue: 0.5,
            fill: "#D9581F"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

     // circle Chart no5
     (function(){
        $('#circle-body-no5').circleProgress({
            value: data[4]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(51,73,240,0.2)',
            animationStartValue: 0.5,
            fill: "#3349F0"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

    // circle Chart no6
    (function(){
        $('#circle-body-no6').circleProgress({
            value: data[5]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(133,12,237,0.2)',
            animationStartValue: 0.5,
            fill: "#850CED"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

     // circle Chart no7
     (function(){
        $('#circle-body-no7').circleProgress({
            value: data[6]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(229,161,0,0.2)',
            animationStartValue: 0.5,
            fill: "#E5A100"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

    // circle Chart no8
    (function(){
        $('#circle-body-no8').circleProgress({
            value: data[7]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(26,129,98,0.2)',
            animationStartValue: 0.5,
            fill: "#1A8162"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

     // circle Chart no9
     (function(){
        $('#circle-body-no9').circleProgress({
            value: data[8]/1000,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(255,7,169,0.2)',
            animationStartValue: 0.5,
            fill: "#FF07A9"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 1000));
        });
    })();

});