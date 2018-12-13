$(document).ready(function () {

   
        var transactionTypes = document.getElementById("employeTransactionTypes");
        var employeTransData = JSON.parse(transactionTypes.parentElement.dataset.values);
        
        var canvas_element = document.getElementById("employeTransactionTypesBarChart");
        var ctx =  canvas_element.getContext('2d');

        const labels = ["وكاله", "عقد شركة","اعتماد توقيع",
                        "عقد رهن","عقد بيع وتنازل","عقد عمل خاص",
                        "اقرار","تعهد","وكيل خدمات","اثبات تاريخ محرر","نسخة طبق الاصل",
                        "الوصية لغير المسلم","عقود اخرى","الاجمالي"];

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

        gradient10 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient10.addColorStop(0, '#FF6A6A');
        gradient10.addColorStop(1, '#9F4242');

        gradient11 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient11.addColorStop(0, '#767DAE');
        gradient11.addColorStop(1, '#4D4F5C');

        gradient12 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient12.addColorStop(0, '#FF95DA');
        gradient12.addColorStop(0.7, '#9F4242');
        gradient12.addColorStop(1, '#9F4242');

        gradient13 = ctx.createLinearGradient(0, 0, 0, 600);
        gradient13.addColorStop(1, 'rgba(59,134,255,0.19)');
        gradient13.addColorStop(0, '#005EF7');

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

        gradhalf9 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf9.addColorStop(1, '#000000');
        gradhalf9.addColorStop(0.5, '#000000');
        gradhalf9.addColorStop(0, '#711466');

        gradhalf10 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf10.addColorStop(1, '#000000');
        gradhalf10.addColorStop(0.5, '#000000');
        gradhalf10.addColorStop(0, '#4D4F5C');

        gradhalf11 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf11.addColorStop(1, '#000000');
        gradhalf11.addColorStop(0.5, '#000000');
        gradhalf11.addColorStop(0, '#B51E1E');

        gradhalf12 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf12.addColorStop(1, '#000000');
        gradhalf12.addColorStop(0.5, '#000000');
        gradhalf12.addColorStop(0, '#00BA81');

        gradhalf13 = ctx.createLinearGradient(0, 0, 0, 400);
        gradhalf13.addColorStop(1, '#000000');
        gradhalf13.addColorStop(0.5, '#000000');
        gradhalf13.addColorStop(0, '#3B86FF');

        bgColor = [ gradhalf0,gradhalf1,gradhalf2,gradhalf3,
                    gradhalf4,gradhalf5,gradhalf6,gradhalf7,
                    gradhalf8,gradhalf9,gradhalf10,gradhalf11,
                    gradhalf12,gradhalf13];
        
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

        var chartType = 'bar';

        var data = {
            labels: labels,
            datasets: [{
                data: employeTransData,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient12,
                    gradient1,gradient2,
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient12,
                    gradient1,gradient2,
                ],

                bevelWidth: 3,

                bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',

                bevelShadowColor: 'rgba(0, 0, 0, 0.5)',

                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: ['#FF07A9','#1A8162','#E5A100',
                            '#850CED','#3349F0','#D9581F',
                            '#FF6A6A','#3B86FF','#00BA81',
                            '#9F4242','#4D4F5C','#9F4242',
                            '#FF07A9','#1A8162' ]
            }]
        };

        var options = {
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            tooplips: {

                bevelWidth: 3,
          
                bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
          
                bevelShadowColor: 'rgba(0, 0, 0, 0.5)'
          
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
    
                ctx.font = Chart.helpers.fontString(18, 700, Chart.defaults.global.defaultFontFamily);
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
        };

        var bar_data = {
            labels: labels,
            datasets: [{
                data: employeTransData,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient12,
                    gradient1,gradient2,
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient12,
                    gradient1,gradient2,
                ],

                bevelWidth: 3,

                bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',

                bevelShadowColor: 'rgba(0, 0, 0, 0.5)',

                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [
                    '#FF07A9','#1A8162','#E5A100',
                    '#850CED','#3349F0','#D9581F',
                    '#FF6A6A','#3B86FF','#00BA81',
                    '#9F4242','#4D4F5C','#9F4242',
                    '#FF07A9','#1A8162'
                ],
            }]
        };

        var bar_options = {
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            tooplips: {

                bevelWidth: 3,
          
                bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
          
                bevelShadowColor: 'rgba(0, 0, 0, 0.5)'
          
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
    
                ctx.font = Chart.helpers.fontString(18, 700, Chart.defaults.global.defaultFontFamily);
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
        };

        var line_data = {
            labels: labels,
            datasets: [{
                data: employeTransData,
                backgroundColor: gradient13,
                borderColor: gradient14,
                borderWidth: 8,
                lineTension : 0.1
            }]
        };

        var line_options = {
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 10,
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
    
                ctx.font = Chart.helpers.fontString(20, 700, Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = "#10523D";
    
                this.data.datasets.forEach(function(dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index]+'%';
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
                        beginAtZero:true,
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
        };
        
        Chart.defaults.global.defaultFontSize = 12;

        init();
        
        function init() {
        // Chart declaration:
        employeTransactionsChart = new Chart(ctx, {
            type: chartType,
            data: data,
            options: options,
        });
        };

        // line Charts
        $('#customCheck-line:input').click(function(){
            employeTransactionsChart.destroy();
            //change chart type: 
            chartType = 'line';
            data = line_data;
            options = line_options;
            //restart chart:
            init();
        });

        // bar Chart
        $('#customCheck-bar:input').click(function(){
            employeTransactionsChart.destroy();
            //change chart type: 
            chartType = 'bar';
            data = bar_data;
            options = bar_options;

            //restart chart:
            init();
        });


        // half Charts
        $('#customCheck-half:input').click(function(){
            for (i = 0; i < 14 ; i++) {
                var id = "employeTransactionTypesHalfTitle" + i;
                var ctx = document.getElementById(id).getContext('2d');
                const labele = labels[i];
                const data1 = employeTransData[i];
                const data2 = 100 - data1;
                var titleId = "employeTransactionTypesHalfChart" + i;
                document.getElementById(titleId).innerHTML = labele;

                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ["Red"],
                        datasets: [{
                            label: '# of Votes',
                            data: [data1,data2],
                            text: "ff",
                            backgroundColor: [
                                bgColor[i],'#F0F2F8'
                            ],
                            hoverBackgroundColor: [
                                bgColor[i],'#F0F2F8'
                            ],
                            borderColor: [
                                bgColor[i],'#F0F2F8'
                            ],
                            hoverBorderColor: [
                                bgColor[i],'#F0F2F8'
                            ],
                            borderWidth: 1,
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
                                left: 20,
                                right: 20,
                                top: 10,
                                bottom: 10
                            }
                        },
                        "animation": {
                            "duration": 500,
                            onComplete: function() {
                                var chartInstance = this.chart,
                                ctx = chartInstance.ctx;

                                ctx.font = Chart.helpers.fontString(22, 700, Chart.defaults.global.defaultFontFamily);
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';
                                ctx.fillStyle = '#43425D';
                    
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
            for (i = 0; i < 14 ; i++) {
                var id = "#employeTransactionTypeCircleChartNo" + i;
                const labele = labels[i];
                const data1 = employeTransData[i];
                var titleId = "employeTransactionTypeTitleNo" + i;
                document.getElementById(titleId).innerHTML = labele;
                $(id).circleProgress({
                    value: employeTransData[i]/100,
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
