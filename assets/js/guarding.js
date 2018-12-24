$(document).ready(function () {

    var guarding_data = document.getElementById("bar-chart");
    const all_type_data   = JSON.parse(guarding_data.parentElement.dataset.all_type);
    const labels = JSON.parse(guarding_data.parentElement.dataset.type_labels);

    var count_all_type = 0;
    for(var i=0, n=all_type_data.length; i < n; i++) 
        { 
            count_all_type += all_type_data[i]; 
        }

    data = all_type_data;
    data.push(count_all_type);

    for (i = 0; i < data.length ; i++) {
        var titleId = "half_guard_title" + i;
        document.getElementById(titleId).innerHTML = labels[i];
    }

    for (i = 0; i < data.length ; i++) {
        var circle_titleId = "circle_guard_title" + i;
        document.getElementById(circle_titleId).innerHTML = labels[i];
    }
    
    var myChart;
   
    var ctx =  guarding_data.getContext('2d');

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

    bgColor = [ gradhalf0,gradhalf1,gradhalf2,gradhalf3,
                gradhalf4,gradhalf5,gradhalf6];

    var halfShadowColor= [  '#00BA81','#3B86FF','#FF6A6A',
                            '#D9581F','#3349F0','#850CED',
                            '#E5A100'];

    var emptyFill = [   'rgba(0,186,129,0.2)','rgba(59,134,255,0.2)','rgba(255,106,106,0.2)',
                        'rgba(217,88,31,0.2)','rgba(51,73,240,0.2)','rgba(133,12,237,0.2)',
                        'rgba(229,161,0,0.2)'
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
    
    $('#customCheck_all_type:input').click(function () {
        $('.month_half').css({display:'block'});
        $('.month_circle').css({display:'block'});
        myChart.destroy();
        var guarding_data = document.getElementById("bar-chart");
        const all_type_data   = JSON.parse(guarding_data.parentElement.dataset.all_type);
        const labels = JSON.parse(guarding_data.parentElement.dataset.type_labels);
    
        var count_all_type = 0;
        for(var i=0, n=all_type_data.length; i < n; i++) 
            { 
                count_all_type += all_type_data[i]; 
            }
    
        data = all_type_data;
        data.push(count_all_type);

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
    
    $('#customCheck_abu_type:input').click(function () {
        $('.month_half').css({display:'block'});
        $('.month_circle').css({display:'block'});
        myChart.destroy();
        var guarding_data = document.getElementById("bar-chart");
        const abu_type_data   = JSON.parse(guarding_data.parentElement.dataset.abu_type);
        const labels = JSON.parse(guarding_data.parentElement.dataset.type_labels);
    
        var count_abu_type = 0;
        for(var i=0, n=abu_type_data.length; i < n; i++) 
            { 
                count_abu_type += abu_type_data[i]; 
            }
    
        data = abu_type_data;
        data.push(count_abu_type);

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

    $('#customCheck_eye_type:input').click(function() {
        $('.month_half').css({display:'block'});
        $('.month_circle').css({display:'block'});
        myChart.destroy();
        var guarding_data = document.getElementById("bar-chart");
        const eye_type_data   = JSON.parse(guarding_data.parentElement.dataset.eye_type);
        const labels = JSON.parse(guarding_data.parentElement.dataset.type_labels);
    
        var count_eye_type = 0;
        for(var i=0, n=eye_type_data.length; i < n; i++) 
            { 
                count_eye_type += eye_type_data[i]; 
            }
    
        data = eye_type_data;
        data.push(count_eye_type);

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

    $('#customCheck_west_type:input').click(function() {
        $('.month_half').css({display:'block'});
        $('.month_circle').css({display:'block'});
        myChart.destroy();
        var guarding_data = document.getElementById("bar-chart");
        const west_type_data   = JSON.parse(guarding_data.parentElement.dataset.west_type);
        const labels = JSON.parse(guarding_data.parentElement.dataset.type_labels);
    
        var count_west_type = 0;
        for(var i=0, n=west_type_data.length; i < n; i++) 
            { 
                count_west_type += west_type_data[i]; 
            }
    
        data = west_type_data;
        data.push(count_west_type);

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

    $('#customCheck_all_month:input').click(function () {
        $('.month_half').css({display:'none'});
        $('.month_circle').css({display:'none'});
        myChart.destroy();
        var guarding_data = document.getElementById("bar-chart");
        const all_month_data   = JSON.parse(guarding_data.parentElement.dataset.all_month);
        const labels = JSON.parse(guarding_data.parentElement.dataset.month_labels);
    
        var persent_all_month = (all_month_data[1] * 100 / all_month_data[2]);
    
        data = all_month_data;
        persent_all_month = Math.round(persent_all_month);
        data.push(persent_all_month);

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
    
    $('#customCheck_abu_month:input').click(function () {
        $('.month_half').css({display:'none'});
        $('.month_circle').css({display:'none'});
        myChart.destroy();
        var guarding_data = document.getElementById("bar-chart");
        const abu_month_data   = JSON.parse(guarding_data.parentElement.dataset.abu_month);
        const labels = JSON.parse(guarding_data.parentElement.dataset.month_labels);
    
        var persent_abu_month = (abu_month_data[1] * 100 / abu_month_data[2]);
    
        data = abu_month_data;
        persent_abu_month = Math.round(persent_abu_month);
        data.push(persent_abu_month);

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

    $('#customCheck_eye_month:input').click(function() {
        $('.month_half').css({display:'none'});
        $('.month_circle').css({display:'none'});
        myChart.destroy();
        var guarding_data = document.getElementById("bar-chart");
        const eye_month_data   = JSON.parse(guarding_data.parentElement.dataset.eye_month);
        const labels = JSON.parse(guarding_data.parentElement.dataset.month_labels);
    
        var persent_eye_month = (eye_month_data[1] * 100 / eye_month_data[2]);
    
        data = eye_month_data;
        persent_eye_month = Math.round(persent_eye_month);
        data.push(persent_eye_month);

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


    

