$(document).ready(function () {

    const labels = ["وكالة عامة", "وكالة خاصة","الغاء وكالة",
                    "اعتماد توقيع","اقرار","وكيل خدمات",
                    "المجموع"];

    var digital_platform_bar = document.getElementById("digital_platform_bar");
    const digital_data = JSON.parse(digital_platform_bar.parentElement.dataset.values);

    var count = 0;
    for(var i=0, n=digital_data.length; i < n; i++) 
    { 
        count += digital_data[i]; 
    }
    const data = [digital_data[0],digital_data[1],digital_data[2],digital_data[3],digital_data[4],digital_data[5],count];

    // bar Chart
    var digital_platform = document.getElementById("digital_platform");
        var ctx =  digital_platform.getContext('2d');
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
                    shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                    '#850CED','#3349F0','#D9581F',
                                    '#FF6A6A']
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
                    "duration": 500,
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
    $('#customCheck-line:input').click(function(){
    
        var ctx = document.getElementById("digital_platform_line").getContext('2d');

        gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient1.addColorStop(1, 'rgba(59,134,255,0.19)');
        gradient1.addColorStop(0, '#005EF7');

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    // label: '# of Votes',
                    data: data,
                    backgroundColor: gradient4,
                    borderColor: gradient14,
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
                animation: {
                    duration: 500,
                    onComplete: function() {
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

    });

    // half Charts
    $('#customCheck-half:input').click(function(){
        for (i = 0; i < 7 ; i++) {
            var id = "digital_platform_half" + i;
            var ctx = document.getElementById(id).getContext('2d');
            const data1 = data[i];
            const ctx_fillstyle = halfShadowColor[i];

            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["Red"],
                    datasets: [{
                        label: '# of Votes',
                        data: [data1,100-data1],
                        text: "ff",
                        backgroundColor: [
                            bgColor[i],'#F0F2F8'
                        ],
                        hoverBackgroundColor: [
                            bgColor[i],'#F0F2F8'
                        ],
                        borderColor:'#F0F2F8',
                        hoverBorderColor: [
                            bgColor[i],'#F0F2F8'
                        ],
                        borderWidth: 2,
                        shadowOffsetX: 0,
                        shadowOffsetY: 6,
                        shadowBlur: 6,
                        shadowColor: halfShadowColor[i],
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
                            bottom: 20
                        }
                    },
                    "animation": {
                        "duration": 500,
                        onComplete: function() {
                            var chartInstance = this.chart;
                            ctx = chartInstance.ctx;

                            ctx.font = ctx_font;
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillStyle = ctx_fillstyle;
                            
                            this.data.datasets.forEach(function(dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function(line, index) {
                            var data = dataset.data[0];
                            ctx.fillText(data, line._model.x, line._model.y + 15);
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
                },
            })
        }
    });
    
    // circle Charts
    $('#customCheck-circle:input').click(function(){
        for (i = 0; i < 7 ; i++) {
            var id = "#digital_platform_circle" + i;
            const labele = labels[i];
            $(id).circleProgress({
                value: data[i]/100,
                size: 146,
                startAngle: 0,
                reverse: true,
                emptyFill: emptyFill[i],
                animationStartValue: 0,
                fill: halfShadowColor[i],
            }).on('circle-animation-progress', function(event, progress, stepvalue){
                $(this).find('span').html(Math.round(stepvalue * 100));
            });
        }
    });

});