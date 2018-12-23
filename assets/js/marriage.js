$(document).ready(function () {

    var marriage_data = document.getElementById("bar-chart");
    const abu_data   = JSON.parse(marriage_data.parentElement.dataset.abu);
    const labels = JSON.parse(marriage_data.parentElement.dataset.labels);

    var count_abu = 0;
    for(var i=0, n=abu_data.length; i < n; i++) 
        { 
            count_abu += abu_data[i]; 
        }

    data = abu_data;
    data.push(count_abu);
    
    var myChart;
   
    var ctx =  marriage_data.getContext('2d');

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

    bgColor = [ gradhalf0,gradhalf1,gradhalf2,gradhalf3,gradhalf4];

    var halfShadowColor= [  '#00BA81','#3B86FF','#FF6A6A','#D9581F','#3349F0'];

    var emptyFill = [
        'rgba(0,186,129,0.2)','rgba(59,134,255,0.2)','rgba(255,106,106,0.2)','rgba(217,88,31,0.2)','rgba(51,73,240,0.2)'
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
                gradient1,gradient2,gradient3,gradient4,gradient5
                
            ], 
            hoverBackgroundColor: [
                gradient1,gradient2,gradient3,gradient4,gradient5
            ],

            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 20,
            shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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
    };

    var bar_data =  {
        labels: labels,
        datasets: [{
            // label: '# of Votes',
            data: data,
            backgroundColor: [ 
                gradient1,gradient2,gradient3,gradient4,gradient5
                
            ], 
            hoverBackgroundColor: [
                gradient1,gradient2,gradient3,gradient4,gradient5
            ],

            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 20,
            shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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
    
    $('#customCheck_abu:input').click(function () {
        myChart.destroy();
        var marriage_data = document.getElementById("bar-chart");
        const abu_data   = JSON.parse(marriage_data.parentElement.dataset.abu);
        const labels = JSON.parse(marriage_data.parentElement.dataset.labels);
    
        var count_abu = 0;
        for(var i=0, n=abu_data.length; i < n; i++) 
            { 
                count_abu += abu_data[i]; 
            }
    
        data = abu_data;
        data.push(count_abu);

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
        };
    
        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient4,gradient5
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient4,gradient5
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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
    
    $('#customCheck_eye:input').click(function () {
        myChart.destroy();
        var marriage_data = document.getElementById("bar-chart");
        const eye_data   = JSON.parse(marriage_data.parentElement.dataset.eye);

        var count_eye = 0;
        for(var i=0, n=eye_data.length; i < n; i++) 
            { 
                count_eye += eye_data[i]; 
            }
        
            data = eye_data;
            data.push(count_eye);
    
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
            };
        
            var bar_data =  {
                labels: labels,
                datasets: [{
                    // label: '# of Votes',
                    data: data,
                    backgroundColor: [ 
                        gradient1,gradient2,gradient3,gradient4,gradient5
                        
                    ], 
                    hoverBackgroundColor: [
                        gradient1,gradient2,gradient3,gradient4,gradient5
                    ],
        
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowBlur: 20,
                    shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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

    $('#customCheck_eye_md:input').click(function() {
        myChart.destroy();
        var marriage_data = document.getElementById("bar-chart");
        const eye_md_data   = JSON.parse(marriage_data.parentElement.dataset.eye_md);

        var count_eye_md = 0;
        for(var i=0, n=eye_md_data.length; i < n; i++) 
            { 
                count_eye_md += eye_md_data[i]; 
            }
        
            data = eye_md_data;
            data.push(count_eye_md);

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
        };
    
        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient4,gradient5
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient4,gradient5
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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
    })

    $('#customCheck_zafra:input').click(function () {
        myChart.destroy();
        var marriage_data = document.getElementById("bar-chart");
        const zafra_data   = JSON.parse(marriage_data.parentElement.dataset.zafra);

        var count_zafra = 0;
        for(var i=0, n=zafra_data.length; i < n; i++) 
            { 
                count_zafra += zafra_data[i]; 
            }
        
            data = zafra_data;
            data.push(count_zafra);

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
        };

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient4,gradient5
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient4,gradient5
                ],

                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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
    
    $('#customCheck_mrfa:input').click(function () {
        myChart.destroy();
        var marriage_data = document.getElementById("bar-chart");
        const mrfa_data   = JSON.parse(marriage_data.parentElement.dataset.mrfa);

        var count_mrfa = 0;
        for(var i=0, n=mrfa_data.length; i < n; i++) 
            { 
                count_mrfa += mrfa_data[i]; 
            }
        
            data = mrfa_data;
            data.push(count_mrfa);

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
        };
    
        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient4,gradient5
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient4,gradient5
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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

    $('#customCheck_baea:input').click(function() {
        myChart.destroy();
        var marriage_data = document.getElementById("bar-chart");
        const baea_data   = JSON.parse(marriage_data.parentElement.dataset.baea);

        var count_baea = 0;
        for(var i=0, n=baea_data.length; i < n; i++) 
            { 
                count_baea += baea_data[i]; 
            }
        
            data = baea_data;
            data.push(count_baea);

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
        };
    
        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient4,gradient5
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient4,gradient5
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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
    })

    $('#customCheck_total:input').click(function() {
        myChart.destroy();
        var marriage_data = document.getElementById("bar-chart");
        const abu_data   = JSON.parse(marriage_data.parentElement.dataset.abu);
        const eye_data   = JSON.parse(marriage_data.parentElement.dataset.eye);
        const eye_md_data   = JSON.parse(marriage_data.parentElement.dataset.eye_md);
        const zafra_data   = JSON.parse(marriage_data.parentElement.dataset.zafra);
        const mrfa_data   = JSON.parse(marriage_data.parentElement.dataset.mrfa);
        const baea_data   = JSON.parse(marriage_data.parentElement.dataset.baea);

        var count_abu = 0;
        var count_eye_md = 0;
        var count_zafra = 0;
        var count_mrfa = 0;
        var count_baea = 0;
        var count_eye = 0;
        for(var i=0, n=abu_data.length; i < n; i++) 
            { 
                count_abu += abu_data[i]; 
                count_eye += eye_data[i]; 
                count_eye_md += eye_md_data[i]; 
                count_zafra += zafra_data[i];
                count_mrfa += mrfa_data[i];
                count_baea += baea_data[i];
                data[i] = abu_data[i] + eye_data[i] + eye_md_data[i] + zafra_data[i] + mrfa_data[i] + baea_data[i];
            }
        
        data[4] = count_abu + count_eye + count_eye_md + count_zafra + count_mrfa + count_baea;


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
        };
    
        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient4,gradient5
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient4,gradient5
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#850CED','#3349F0']
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
    })

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
      
    };

});


    

