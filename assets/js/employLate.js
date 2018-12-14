$(document).ready(function () {

    var employeLates = document.getElementById("employeLates");
    const values = JSON.parse(employeLates.parentElement.dataset.values);
    const linValue = [0,values,0];

    const labels = [""];
    const lineLabels = [ "", "" , "" ];
 
    const data1 = values[0];
    const data2 = 100 - data1;
       
    var canvas = document.getElementById("employlate");
    var ctx = canvas.getContext('2d');

        grad1 = ctx.createLinearGradient(0, 0, 0, 400);
        grad1.addColorStop(1, '#000000');
        grad1.addColorStop(0.5, '#000000');
        grad1.addColorStop(0, '#7B0ED9');

        gradient4 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient4.addColorStop(0, '#BE72FF');
        gradient4.addColorStop(1, '#7B0ED9');

        gradient5 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient5.addColorStop(0, '#7B8AFF');
        gradient5.addColorStop(1, '#2F44E3');


    

        const font30 = Chart.helpers.fontString(30, 700, Chart.defaults.global.defaultFontFamily);
        const fillStylewhite = 'white';

        var animation40white = {
            "duration": 1,
            "onComplete": function() {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;

            ctx.font = font30;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillStyle = fillStylewhite;

            this.data.datasets.forEach(function(dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function(bar, index) {
                var data = dataset.data[index];
                ctx.fillText(data, bar._model.x, bar._model.y + 40);
                });
            });
            }
        };

        var animation28purple = {
            "duration": 1,
            "onComplete": function() {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;

            ctx.font = Chart.helpers.fontString(18, 700, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillStyle = "#9102FC";

            this.data.datasets.forEach(function(dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function(bar, index) {
                var data = dataset.data[0];
                ctx.fillText(data, bar._model.x, bar._model.y + 20);
                });
            });
            }
        };
      
       
        var chartType = 'bar';
        var latesChart;
        
        var data = {
            labels: labels,
            datasets: [{
                label: '',
                fill: true,
                lineTension: 0.2,
                backgroundColor: [ 
                    gradient4
                ],
                hoverBackgroundColor: [
                    gradient4
                ],

                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: ['#850CED'],
                borderColor: "green", // The main line color
                borderCapStyle: 'square',
                pointBorderColor: "white",
                pointBackgroundColor: "green",
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "yellow",
                pointHoverBorderColor: "green",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                data: values,
                spanGaps: true,
            }]
        };

        var options = {
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 0
                }
            },
            legend: {
                display : false
            },
        scales: {
            yAxes: [{
            ticks: {
                beginAtZero: true,
                display: false,
            },
            gridLines: {
                color: '#E2E2E2',
                zeroLineColor: '#707070',
                zeroLineWidth: 1
            },
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
                categoryPercentage: 0.3
            }]
        },
        tooltips: {
            enabled: false
        },
        "animation": animation40white,
        };

        var barData = {
            labels: labels,
            datasets: [{
            label: '',
            fill: true,
            lineTension: 0.2,
            backgroundColor: [ 
                gradient4
            ],
            hoverBackgroundColor: [
                gradient4
            ],
    
            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 20,
            shadowColor: ['#850CED'],
            borderColor: "green", // The main line color
            borderCapStyle: 'square',
            pointBorderColor: "white",
            pointBackgroundColor: "green",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "green",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: values,
            spanGaps: true,
            }]
        };

        var barOptions = {
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 0
                }
            },
            legend: {
                display : false
            },
        scales: {
            yAxes: [{
            ticks: {
                beginAtZero: true,
                display: false,
            },
            gridLines: {
                color: '#E2E2E2',
                zeroLineColor: '#707070',
                zeroLineWidth: 1
            },
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
                categoryPercentage: 0.3
            }]
        },
        tooltips: {
            enabled: false
        },
        "animation": animation40white,
        };

        var lineData= {
            labels: lineLabels,
            datasets: [{
                // label: '# of Votes',
                data: linValue,
                backgroundColor: gradient5,
                borderColor: gradient4,
                borderWidth: 10,
                lineTension : 0.1
            }]
        };

        var lineOptions= {
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 0
                }
            },
            legend: {
                display : false
            },
            plugins: {
                
            },
            "animation": animation40white,
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
        };
        
        var halfData = {
            labels: ["Red"],
            datasets: [{
                label: '# of Votes',
                data: [data1,40],
                text: "ff",
                backgroundColor: [
                    grad1,'#F0F2F8'
                ],
                hoverBackgroundColor: [
                    grad1,'#F0F2F8'
                ],
                borderColor: '#F0F2F8',
                hoverBorderColor: [
                    grad1,'#F0F2F8'
                ],
                borderWidth: 2,
                shadowOffsetX: 0,
                shadowOffsetY: 6,
                shadowBlur: 6,
                shadowColor: '#7B0ED9'
            }]
        };
    
        var halfOptions= {
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
            "animation": animation28purple,
            legend: {
                display : false
            },
            tooltips: {
                enabled: false
            }
        };

        var circleOptions= {
            rotation: 1 * Math.PI,
            circumference: 2 * Math.PI,
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
                ctx.fillStyle = '#9102FC';
        
                this.data.datasets.forEach(function(dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[0];
                    ctx.fillText(data, line._model.x, line._model.y + 20);
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
        };    
    
    $('#customCheck-line:input').click(function(){
        latesChart.destroy();
        //change chart type: 
        chartType = 'line';
        data = lineData;
        options = lineOptions;
        //restart chart:
        init();
    });

    $('#customCheck-bar:input').click(function(){
        latesChart.destroy();
        //change chart type: 
        chartType = 'bar';
        data = barData;
        options = barOptions;

        //restart chart:
        init();
    });

    $('#customCheck-half:input').click(function(){
        latesChart.destroy();
        //change chart type: 
        chartType = 'doughnut';
        data = halfData;
        options = halfOptions;
        //restart chart:
        init();
    });

    $('#customCheck-circle:input').click(function(){
        latesChart.destroy();
        //change chart type: 
        chartType = 'doughnut';
        data = halfData;
        options = circleOptions;
        //restart chart:
        init();
    });
    
    init();
    
    function init() {
      // Chart declaration:
      latesChart = new Chart(ctx, {
        type: chartType,
        data: data,
        options: options,
      });
    }
});