$(document).ready(function () {

    // sidebar toggle
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // bar Chart
    (function(){
    
        var ctx = document.getElementById("bar-chart").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 600);

        gradient1.addColorStop(0, '#BE72FF');
        gradient1.addColorStop(1, '#7B0ED9');

        gradient2 = ctx.createLinearGradient(0, 0, 0, 600);

        gradient2.addColorStop(0, '#FF95DA');
        gradient2.addColorStop(1, '#E50497');
        
        Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
        // Chart.defaults.global.defaultFontSize = 12;
        
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [ "نسبة الإنجاز الحالية", "نسبة الإنجاز السابقة"],
                datasets: [{
                    // label: '# of Votes',
                    data: [88, 50],
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
                          var data = dataset.data[index];
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

        

    })();

    // line Chart
    (function(){
        var ctx = document.getElementById('curve-chart').getContext('2d');
        // data = JSON.parse(ctx.parentElement.dataset.values);

        gradient3 = ctx.createLinearGradient(0, 0, 0, 600);

        gradient3.addColorStop(1, 'rgba(59,134,255,0)');
        gradient3.addColorStop(0, '#3B86FF');

        Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: [ "", "نسبة الإنجاز الحالية", "" , "نسبة الإنجاز السابقة",""],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: gradient3,
                    borderColor: gradient3,
                    data: [0 , 88 , 0 , 50 , 0],
                    lineTension : 0.2
                }]
            },
        
            // Configuration options go here
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
                        meta.data.forEach(function(line, index) {
                          var data = dataset.data[index];
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
    })();

    // half Chart
    (function(){
        var ctx = document.getElementById("prev-half-chart").getContext('2d');
        gradient1 = ctx.createLinearGradient(0, 0, 0, 400);

        gradient1.addColorStop(1, '#000000');
        gradient1.addColorStop(0.5, '#000000');
        gradient1.addColorStop(0, '#A341F7');

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
                legend: {
                    display : false
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    })();

    // left check box changee label-background and its chart
    $('.checkbox-small').addClass("checked-lines");
    $('#customCheck-lines:input').click(function(){
        $('.checkbox-small').addClass("checked-lines");
        $('.checkbox-small').removeClass("checked-curve");
        $('.checkbox-small').removeClass("checked-half");
        $('.checkbox-small').removeClass("checked-circle");
        $('.chart-row').addClass("barChart");
        $('.chart-row').removeClass("curveChart");
        $('.chart-row').removeClass("circleChart");
        $('.chart-row').removeClass("halfChart");
    });

    $('#customCheck-curve:input').click(function(){
        $('.checkbox-small').addClass("checked-curve");
        $('.checkbox-small').removeClass("checked-lines");
        $('.checkbox-small').removeClass("checked-half");
        $('.checkbox-small').removeClass("checked-circle");
        $('.chart-row').addClass("curveChart");
        $('.chart-row').removeClass("barChart");
        $('.chart-row').removeClass("circleChart");
        $('.chart-row').removeClass("halfChart");
    });

    $('#customCheck-half:input').click(function(){
        $('.checkbox-small').addClass("checked-half");
        $('.checkbox-small').removeClass("checked-lines");
        $('.checkbox-small').removeClass("checked-curve");
        $('.checkbox-small').removeClass("checked-circle");
        $('.chart-row').addClass("halfChart");
        $('.chart-row').removeClass("barChart");
        $('.chart-row').removeClass("circleChart");
        $('.chart-row').removeClass("curveChart");
    });

    $('#customCheck-circle:input').click(function(){
        $('.checkbox-small').addClass("checked-circle");
        $('.checkbox-small').removeClass("checked-half");
        $('.checkbox-small').removeClass("checked-lines");
        $('.checkbox-small').removeClass("checked-curve");
        $('.chart-row').addClass("circleChart");
        $('.chart-row').removeClass("curveChart");
        $('.chart-row').removeClass("barChart");
        $('.chart-row').removeClass("halfChart");
    });


    $('#prev-card-body').circleProgress({
        value: 0.5,
        size: 146,
        startAngle: 0,
        reverse: true,
        emptyFill:"#E2C5FC",
        animationStartValue: 0.5,
        fill: "#850CED"
    }).on('circle-animation-progress', function(event, progress, stepvalue){
        $(this).find('span').html(Math.round(stepvalue * 100) + '%');
    });

    $('#next-card-body').circleProgress({
    value: 0.88,
    size: 146,
    startAngle: 0,
    reverse: true,
    emptyFill:"#F5B3DE",
    animationStartValue: 0.5,
    fill: "#FF07A9"
    }).on('circle-animation-progress', function(event, progress, stepvalue){
        $(this).find('span').html(Math.round(stepvalue * 100) + '%');
    });

});