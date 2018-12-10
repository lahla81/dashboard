$(document).ready(function () {

    const data = [30 , 40 , 20, 70 , 60 , 70 , 30 , 10 , 90];
    const label = ["بانتظار التعديل", "بانتظار الموافقة","رفض الكتروني",
                    "قبول الكتروني","قبول ودفع الكتروني","إجمالي عدد المعاملات الكلي",
                    "المصدقة","المتأخرة اكثر عن يومين","الملغاة بعد خمس ايام عمل"];
   // bar Chart
   (function(){
    
        var ctx = document.getElementById("bar-chart").getContext('2d');
        // const data = JSON.parse(ctx.parentElement.dataset.values);

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
        
        Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
        // Chart.defaults.global.defaultFontSize = 12;
        
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [ "بانتظار التعديل", "بانتظار الموافقة","رفض الكتروني",
                            "قبول الكتروني","قبول ودفع الكتروني","إجمالي عدد المعاملات الكلي",
                            "المصدقة","المتأخرة اكثر عن يومين","الملغاة بعد خمس ايام عمل"
                        ],
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
                    shadowColor: ['#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81']
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
            
                    ctx.font = Chart.helpers.fontString(22, 700, Chart.defaults.global.defaultFontFamily);
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
    
        var ctx = document.getElementById("line-chart").getContext('2d');
        // const data = JSON.parse(ctx.parentElement.dataset.values);

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

        // Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
        // Chart.defaults.global.defaultFontSize = 12;
        
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                    // label: '# of Votes',
                    data: data,
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
                        meta.data.forEach(function(bar, index) {
                        var data = dataset.data[index]+'%';
                        ctx.fillText(data, bar._model.x, bar._model.y + 50);
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
        var ctx = document.getElementById("half-chart-no1").getContext('2d');
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
                    data: [30,100-30],
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
        var ctx = document.getElementById("half-chart-no2").getContext('2d');
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
                    data: [40,100-40],
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

    // half Chart no3
    (function(){
        var ctx = document.getElementById("half-chart-no3").getContext('2d');
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
                    data: [20,100-20],
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

    // Half Chart no4
    (function(){
        var ctx = document.getElementById("half-chart-no4").getContext('2d');
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
                    data: [70,100-70],
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
        var ctx = document.getElementById("half-chart-no5").getContext('2d');
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
                    data: [60,100-60],
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
        var ctx = document.getElementById("half-chart-no6").getContext('2d');
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
                    data: [70,100-70],
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
        var ctx = document.getElementById("half-chart-no7").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#E5A100');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [30,100-30],
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
        var ctx = document.getElementById("half-chart-no8").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#1A8162');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [10,100-10],
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
              
                      ctx.font = Chart.helpers.fontString(28, 700, Chart.defaults.global.defaultFontFamily);
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
        var ctx = document.getElementById("half-chart-no9").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#FF07A9');

        // Chart.defaults.global.defaultFontFamily = " 'DIN Alternate Bold', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [90,100-90],
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
        $('#circle-body-no1').circleProgress({
            value: 0.3,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(0,186,129,0.2)',
            animationStartValue: 0.5,
            fill: "#00BA81"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();

    // circle Chart no2
    (function(){
        $('#circle-body-no2').circleProgress({
            value: 0.4,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(59,134,255,0.2)',
            animationStartValue: 0.5,
            fill: "#3B86FF"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();

     // circle Chart no3
     (function(){
        $('#circle-body-no3').circleProgress({
            value: 0.2,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(255,106,106,0.2)',
            animationStartValue: 0.5,
            fill: "#FF6A6A"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();

    // circle Chart no4
    (function(){
        $('#circle-body-no4').circleProgress({
            value: 0.7,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(217,88,31,0.2)',
            animationStartValue: 0.5,
            fill: "#D9581F"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();

     // circle Chart no5
     (function(){
        $('#circle-body-no5').circleProgress({
            value: 0.6,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(51,73,240,0.2)',
            animationStartValue: 0.5,
            fill: "#3349F0"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();

    // circle Chart no6
    (function(){
        $('#circle-body-no6').circleProgress({
            value: 0.7,
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

     // circle Chart no7
     (function(){
        $('#circle-body-no7').circleProgress({
            value: 0.3,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(229,161,0,0.2)',
            animationStartValue: 0.5,
            fill: "#E5A100"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();

    // circle Chart no8
    (function(){
        $('#circle-body-no8').circleProgress({
            value: 0.1,
            size: 146,
            startAngle: 0,
            reverse: true,
            emptyFill:'rgba(26,129,98,0.2)',
            animationStartValue: 0.5,
            fill: "#1A8162"
        }).on('circle-animation-progress', function(event, progress, stepvalue){
            $(this).find('span').html(Math.round(stepvalue * 100) + '%');
        });
    })();

     // circle Chart no9
     (function(){
        $('#circle-body-no9').circleProgress({
            value: 0.9,
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