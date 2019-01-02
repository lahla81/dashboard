$(document).ready(function () {

    $('#translator01').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data01').toggle();
    });

    $('#translator02').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data02').toggle();
    });

    $('#translator03').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data03').toggle();
        // $('#translater-data03').css({left:'0'});
    });

    $('#translator04').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data04').toggle();
    });

    $('#translator05').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data05').toggle();
    });

    $('#translator06').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data06').toggle();
    });

    $('#translator07').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data07').toggle();
    });

    $('#translator08').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data08').toggle();
    });

    $('#translator09').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data09').toggle();
    });

    $('#translator10').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data10').toggle();
    });

    $('#translator11').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data11').toggle();
    });

    $('#translator12').click(function(){
        $('.trans-data').hide();
        $('.layer').show();
        +$('#translater-data12').toggle();
    });

    $('.layer').click(function(){
        $('.trans-data').hide();
        $('.layer').hide();
    });

    // $('.lawyer0_hide').css({display:'none'});

    var advertise_data = document.getElementById("bar-chart");
    const veto_data   = JSON.parse(advertise_data.parentElement.dataset.veto);
    const labels = JSON.parse(advertise_data.parentElement.dataset.labels);

    var count_veto1 = 0;
        for(var i=0, n=veto_data.length; i < n; i++) 
            { 
                count_veto1 += veto_data[i]; 
            }

    data = veto_data;
    data.push(count_veto1)

    for (i = 0; i < data.length ; i++) {
        var titleId = "half_guard_title" + i;
        document.getElementById(titleId).innerHTML = labels[i];
    }

    for (i = 0; i < data.length ; i++) {
        var circle_titleId = "circle_guard_title" + i;
        document.getElementById(circle_titleId).innerHTML = labels[i];
    }
    
    var myChart;
   
   


    bgColor = [ gradhalf0,gradhalf1,gradhalf2,gradhalf3,
                gradhalf4,gradhalf5,gradhalf6,gradhalf7,
                gradhalf8,gradhalf9,gradhalf10,gradhalf0,
                gradhalf1,gradhalf2,gradhalf3,gradhalf4,
                gradhalf5,gradhalf6,gradhalf7,gradhalf8,
                gradhalf9,gradhalf10,gradhalf0];

    var halfShadowColor= [  '#00BA81','#3B86FF','#FF6A6A',
                            '#D9581F','#3349F0','#850CED',
                            '#E5A100','#1A8162','#FF07A9',
                            '#711466','#4D4F5C',
                            '#00BA81','#3B86FF','#FF6A6A',
                            '#D9581F','#3349F0','#850CED',
                            '#E5A100','#1A8162','#FF07A9',
                            '#711466','#4D4F5C','#00BA81'];

    var emptyFill = [   'rgba(0,186,129,0.2)','rgba(59,134,255,0.2)','rgba(255,106,106,0.2)',
                        'rgba(217,88,31,0.2)','rgba(51,73,240,0.2)','rgba(133,12,237,0.2)',
                        'rgba(229,161,0,0.2)','rgba(26,129,98,0.2)','rgba(255,7,169,0.2)',
                        'rgba(113,20,102,0.2)','rgba(77,79,92,0.2)',
                        'rgba(0,186,129,0.2)','rgba(59,134,255,0.2)','rgba(255,106,106,0.2)',
                        'rgba(217,88,31,0.2)','rgba(51,73,240,0.2)','rgba(133,12,237,0.2)',
                        'rgba(229,161,0,0.2)','rgba(26,129,98,0.2)','rgba(255,7,169,0.2)',
                        'rgba(113,20,102,0.2)','rgba(77,79,92,0.2)','rgba(0,186,129,0.2)'
    ]
    
    Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    Chart.defaults.global.defaultFontSize = 12;
    ctx_font = Chart.helpers.fontString(25, 700, Chart.defaults.global.defaultFontFamily);
    if ($(window).width() < 900){
        Chart.defaults.global.defaultFontSize = 8;
        ctx_font = Chart.helpers.fontString(14, 600, Chart.defaults.global.defaultFontFamily);
    };
    
   
       
    var chart_data;
    var chart_options;
    var chart_type = 'bar';

    chart_data =  {
        labels: labels,
        datasets: [{
            // label: '# of Votes',
            data: data,
            backgroundColor: [ 
                gradient1,gradient2,gradient3,
                gradient4,gradient5,gradient6,
                gradient7,gradient8,gradient9,
                gradient10,gradient11,
                gradient1,gradient2,gradient3,
                gradient4,gradient5,gradient6,
                gradient7,gradient8,gradient9,
                gradient10,gradient11,gradient1
                
            ], 
            hoverBackgroundColor: [
                gradient1,gradient2,gradient3,
                gradient4,gradient5,gradient6,
                gradient7,gradient8,gradient9,
                gradient10,gradient11,
                gradient1,gradient2,gradient3,
                gradient4,gradient5,gradient6,
                gradient7,gradient8,gradient9,
                gradient10,gradient11,gradient1
            ],

            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 20,
            shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                            '#850CED','#3349F0','#D9581F',
                            '#FF6A6A','#3B86FF','#00BA81',
                            '#9F4242','#4D4F5C',
                            '#FF07A9','#1A8162','#E5A100',
                            '#850CED','#3349F0','#D9581F',
                            '#FF6A6A','#3B86FF','#00BA81',
                            '#9F4242','#4D4F5C','#FF07A9']
        }]
    };

    chart_options = {
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
        animation: {
            duration: 500,
            onComplete: function() {
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
            pointlabels :{
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

    var line_data =  {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: gradient1,
            borderColor: gradient14,
            borderWidth: 5,
            lineTension : 0.1
        }]
    };

    var line_options = {
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
                meta.data.forEach(function(line, index) {
                var data = dataset.data[index];
                ctx.fillText(data, line._model.x, line._model.y + 5);
                });
            });
            }
        },
        scales: {
            pointlabels :{
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
    };

    var bar_data =  {
        labels: labels,
        datasets: [{
            // label: '# of Votes',
            data: data,
            backgroundColor: [ 
                gradient1,gradient2,gradient3,
                gradient4,gradient5,gradient6,
                gradient7,gradient8,gradient9,
                gradient10,gradient11,
                gradient1,gradient2,gradient3,
                gradient4,gradient5,gradient6,
                gradient7,gradient8,gradient9,
                gradient10,gradient11,gradient1
                
            ], 
            hoverBackgroundColor: [
                gradient1,gradient2,gradient3,
                gradient4,gradient5,gradient6,
                gradient7,gradient8,gradient9,
                gradient10,gradient11,
                gradient1,gradient2,gradient3,
                gradient4,gradient5,gradient6,
                gradient7,gradient8,gradient9,
                gradient10,gradient11,gradient1
            ],

            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 20,
            shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                            '#850CED','#3349F0','#D9581F',
                            '#FF6A6A','#3B86FF','#00BA81',
                            '#9F4242','#4D4F5C',
                            '#FF07A9','#1A8162','#E5A100',
                            '#850CED','#3349F0','#D9581F',
                            '#FF6A6A','#3B86FF','#00BA81',
                            '#9F4242','#4D4F5C','#FF07A9']
        }]
    };

    var bar_options = {
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
        animation: {
            duration: 500,
            onComplete: function() {
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
            pointlabels :{
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
    
    
    $('#customCheck_veto:input').click(function () {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const veto_data   = JSON.parse(advertise_data.parentElement.dataset.veto);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_veto = 0;
        for(var i=0, n=veto_data.length; i < n; i++) 
            { 
                count_veto += veto_data[i]; 
            }

        data = veto_data;
        data.push(count_veto)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
    
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });
    
    $('#customCheck_abu_inter:input').click(function () {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const abu_inter_data   = JSON.parse(advertise_data.parentElement.dataset.abu_inter);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_abu_inter = 0;
        for(var i=0, n=abu_inter_data.length; i < n; i++) 
            { 
                count_abu_inter += abu_inter_data[i]; 
            }

        data = abu_inter_data;
        data.push(count_abu_inter)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
    
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }else
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }else
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }else
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });

    $('#customCheck_comerc:input').click(function() {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const comerc_data   = JSON.parse(advertise_data.parentElement.dataset.comerc);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
        
        var count_comerc = 0;
        for(var i=0, n=comerc_data.length; i < n; i++) 
            { 
                count_comerc += comerc_data[i]; 
            }

        data = comerc_data;
        data.push(count_comerc)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };    
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });

    $('#customCheck_workers:input').click(function() {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const workers_data   = JSON.parse(advertise_data.parentElement.dataset.workers);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_workers = 0;
        for(var i=0, n=workers_data.length; i < n; i++) 
            { 
                count_workers += workers_data[i]; 
            }

        data = workers_data;
        data.push(count_workers)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
    
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });

    $('#customCheck_abu_extr:input').click(function () {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const abu_extr_data   = JSON.parse(advertise_data.parentElement.dataset.abu_extr);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_abu_extr = 0;
        for(var i=0, n=abu_extr_data.length; i < n; i++) 
            { 
                count_abu_extr += abu_extr_data[i]; 
            }

        data = abu_extr_data;
        data.push(count_abu_extr)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
    
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };
        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });
    
    $('#customCheck_rent:input').click(function () {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const rent_data   = JSON.parse(advertise_data.parentElement.dataset.rent);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_rent = 0;
        for(var i=0, n=rent_data.length; i < n; i++) 
            { 
                count_rent += rent_data[i]; 
            }

        data = rent_data;
        data.push(count_rent)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
    
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }else
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }else
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }else
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });

    $('#customCheck_eye_adv:input').click(function() {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const eye_adv_data   = JSON.parse(advertise_data.parentElement.dataset.eye_adv);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_eye_adv = 0;
        for(var i=0, n=eye_adv_data.length; i < n; i++) 
            { 
                count_eye_adv += eye_adv_data[i]; 
            }

        data = eye_adv_data;
        data.push(count_eye_adv)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });

    $('#customCheck_yahr_adv:input').click(function() {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const yahr_adv_data   = JSON.parse(advertise_data.parentElement.dataset.yahr_adv);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_yahr_adv = 0;
        for(var i=0, n=yahr_adv_data.length; i < n; i++) 
            { 
                count_yahr_adv += yahr_adv_data[i]; 
            }

        data = yahr_adv_data;
        data.push(count_yahr_adv)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });

    $('#customCheck_zafra_adv:input').click(function() {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const zafra_adv_data   = JSON.parse(advertise_data.parentElement.dataset.zafra_adv);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_zafra_adv = 0;
        for(var i=0, n=zafra_adv_data.length; i < n; i++) 
            { 
                count_zafra_adv += zafra_adv_data[i]; 
            }

        data = zafra_adv_data;
        data.push(count_zafra_adv)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });

    $('#customCheck_roways_adv:input').click(function() {
        myChart.destroy();
        var advertise_data = document.getElementById("bar-chart");
        const roways_adv_data   = JSON.parse(advertise_data.parentElement.dataset.roways_adv);
        const labels = JSON.parse(advertise_data.parentElement.dataset.labels);
    
        var count_roways_adv = 0;
        for(var i=0, n=roways_adv_data.length; i < n; i++) 
            { 
                count_roways_adv += roways_adv_data[i]; 
            }

        data = roways_adv_data;
        data.push(count_roways_adv)

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_guard_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_guard_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,
                    gradient1,gradient2,gradient3,
                    gradient4,gradient5,gradient6,
                    gradient7,gradient8,gradient9,
                    gradient10,gradient11,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [  '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C',
                                '#FF07A9','#1A8162','#E5A100',
                                '#850CED','#3349F0','#D9581F',
                                '#FF6A6A','#3B86FF','#00BA81',
                                '#9F4242','#4D4F5C','#FF07A9']
            }]
        };
        var bar_options = {
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
            animation: {
                duration: 500,
                onComplete: function() {
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
                pointlabels :{
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
    
        var line_data =  {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };
    
        var line_options = {
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
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, line._model.x, line._model.y + 5);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
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
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
            $('#customCheck-bar:input').click(function(){
                myChart.destroy();
                chart_type = 'bar';
                chart_data = bar_data;
                chart_options = bar_options;
                init();
            });
            $('#customCheck-line:input').click(function(){
                myChart.destroy();
                chart_type = 'line';
                chart_data = line_data;
                chart_options = line_options;
                init();
            });
            $('#customCheck-half:input').click(function removeData(chart) {
                half();
            });
            $('#customCheck-circle:input').click(function(){
                circle();
            });
        }
    });

    $('#customCheck-line:input').click(function(){
        myChart.destroy();
        chart_type = 'line';
        chart_data = line_data;
        chart_options = line_options;
        init();
    });

    $('#customCheck-bar:input').click(function(){
        myChart.destroy();
        chart_type = 'bar';
        chart_data = bar_data;
        chart_options = bar_options;
        init();
    });

    init();
    function init(){
        myChart = new Chart(ctx, {
            type: chart_type,
            data: chart_data,
            options: chart_options,
        });
    };
   
    // half Charts
    half();
    function half(){
        for (i = 0; i < data.length ; i++) {
            var id = "half_chart_no" + i;
            var ctx = document.getElementById(id).getContext('2d');
            const ctx_fillstyle = halfShadowColor[i];

            // var titleId = "half_guard_title" + i;
            // document.getElementById(titleId).innerHTML = labels[i];

            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [data[i],100-data[i]],
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
                    animation: {
                        duration: 800,
                        onComplete: function() {
                            var chartInstance = this.chart;
                            ctx = chartInstance.ctx;

                            ctx.font = ctx_font;
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillStyle = ctx_fillstyle;
                            
                            this.data.datasets.forEach(function(dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function(half, index) {
                            var data = dataset.data[0];
                            ctx.fillText(data, half._model.x, half._model.y + 15);
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
        };
    };

    // circle Charts
    circle();
    function circle(){
        // circle Charts
        for (i = 0; i < data.length ; i++) {
            var id = "#circle-body-no" + i;
            // var titleId = "circle_guard_title" + i;
            // document.getElementById(titleId).innerHTML = labels[i];
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
    };

});


    

