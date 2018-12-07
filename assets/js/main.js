$(document).ready(function () {

    // sidebar toggle
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

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
                    barPercentage: 0.5,
                    borderWidth: 0,

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
              
                      ctx.font = Chart.helpers.fontString(40, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      ctx.fillStyle = "white";
              
                      this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(bar, index) {
                          var data = dataset.data[index];
                          ctx.fillText(data, bar._model.x, bar._model.y + 60);
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

    $('.checkbox-small').addClass("checked-lines");
    $('#customCheck-lines:input').click(function(){
        $('.checkbox-small').addClass("checked-lines");
        $('.checkbox-small').removeClass("checked-curve");
        $('.checkbox-small').removeClass("checked-half");
        $('.checkbox-small').removeClass("checked-circle");
    });

    $('#customCheck-curve:input').click(function(){
        $('.checkbox-small').addClass("checked-curve");
        $('.checkbox-small').removeClass("checked-lines");
        $('.checkbox-small').removeClass("checked-half");
        $('.checkbox-small').removeClass("checked-circle");
    });

    $('#customCheck-half:input').click(function(){
        $('.checkbox-small').addClass("checked-half");
        $('.checkbox-small').removeClass("checked-lines");
        $('.checkbox-small').removeClass("checked-curve");
        $('.checkbox-small').removeClass("checked-circle");
    });

    $('#customCheck-circle:input').click(function(){
        $('.checkbox-small').addClass("checked-circle");
        $('.checkbox-small').removeClass("checked-half");
        $('.checkbox-small').removeClass("checked-lines");
        $('.checkbox-small').removeClass("checked-curve");
    });


});