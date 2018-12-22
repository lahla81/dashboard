$(document).ready(function () {

    var elec_medical = document.getElementById("bar-chart");
    const a_data   = JSON.parse(elec_medical.parentElement.dataset.a);
    const labels = JSON.parse(elec_medical.parentElement.dataset.labels);

    var count_a = 0;
    for(var i=0, n=a_data.length; i < n; i++) 
        { 
            count_a += a_data[i]; 
        }

    var persent_up = (a_data[0] * 100 /count_a);
    var persent_down = (a_data[1] * 100 /count_a);
    data = a_data;
    persent_up = Math.round(persent_up);
    data.push(persent_up);
    persent_down = Math.round(persent_down);
    data.push(persent_down);
    
    var myChart;
   
    var ctx =  elec_medical.getContext('2d');

    gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient1.addColorStop(0, '#FF95DA');
    gradient1.addColorStop(1, '#E50497');

    gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient2.addColorStop(0, '#45C19C');
    gradient2.addColorStop(1, '#10523D');

    gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient3.addColorStop(0, '#FFD062');
    gradient3.addColorStop(1, '#D59704');

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

    bgColor = [ gradhalf0,gradhalf1,gradhalf2,gradhalf0];

    var halfShadowColor= [  '#00BA81','#3B86FF','#FF6A6A','#00BA81'];

    var emptyFill = [
        'rgba(0,186,129,0.2)','rgba(59,134,255,0.2)','rgba(255,106,106,0.2)','rgba(0,186,129,0.2)'
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
                gradient1,gradient2,gradient3, gradient1
                
            ], 
            hoverBackgroundColor: [
                gradient1,gradient2,gradient3, gradient1
            ],

            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 20,
            shadowColor: [ '#FF07A9','#1A8162','#E5A100','#FF07A9']
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
                gradient1,gradient2,gradient3,gradient1
                
            ], 
            hoverBackgroundColor: [
                gradient1,gradient2,gradient3,gradient1
            ],

            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 20,
            shadowColor: [ '#FF07A9','#1A8162','#E5A100','#FF07A9']
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
    
    $('#customCheck_a:input').click(function () {
        myChart.destroy();
        var elec_medical = document.getElementById("bar-chart");
        const a_data   = JSON.parse(elec_medical.parentElement.dataset.a);

        var count_a = 0;
        for(var i=0, n=a_data.length; i < n; i++) 
            { 
                count_a += a_data[i]; 
            }

        var persent_up = (a_data[0] * 100 /count_a);
        var persent_down = (a_data[1] * 100 /count_a);
        data = a_data;
        persent_up = Math.round(persent_up);
        data.push(persent_up);
        persent_down = Math.round(persent_down);
        data.push(persent_down);

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#FF07A9']
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
    
    $('#customCheck_b:input').click(function () {
        myChart.destroy();
        var elec_medical = document.getElementById("bar-chart");
        const b_data   = JSON.parse(elec_medical.parentElement.dataset.b);
        
        var count_b = 0;
        for(var i=0, n=b_data.length; i < n; i++) 
            { 
                count_b += b_data[i]; 
            }

        var persent_up = (b_data[0] * 100 /count_b);
        var persent_down = (b_data[1] * 100 /count_b);
        data = b_data;
        persent_up = Math.round(persent_up);
        data.push(persent_up);
        persent_down = Math.round(persent_down);
        data.push(persent_down);

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#FF07A9']
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

    $('#customCheck_d:input').click(function() {
        myChart.destroy();
        var elec_medical = document.getElementById("bar-chart");
        const d_data   = JSON.parse(elec_medical.parentElement.dataset.d);
        
        var count_d = 0;
        for(var i=0, n=d_data.length; i < n; i++) 
            { 
                count_d += d_data[i]; 
            }

        var persent_up = (d_data[0] * 100 /count_d);
        var persent_down = (d_data[1] * 100 /count_d);
        data = d_data;
        persent_up = Math.round(persent_up);
        data.push(persent_up);
        persent_down = Math.round(persent_down);
        data.push(persent_down);

        var bar_data =  {
            labels: labels,
            datasets: [{
                // label: '# of Votes',
                data: data,
                backgroundColor: [ 
                    gradient1,gradient2,gradient3,gradient1
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2,gradient3,gradient1
                ],
    
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: [ '#FF07A9','#1A8162','#E5A100','#FF07A9']
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
        for (i = 0; i < data.length-2 ; i++) {
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

        // adding % to the third value in half chart
        for (i =  data.length-2; i < data.length ; i++) {
            var id = "half_chart_no" + i;
            var ctx = document.getElementById(id).getContext('2d');
            const ctx_fillstyle = halfShadowColor[i];

            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["Red"],
                    datasets: [{
                        label: '# of Votes',
                        data: [data[i],100-data[i]],
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
                            var value = dataset.data[0] + "%";
                            ctx.fillText(value, half._model.x, half._model.y + 15);
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
            });
        };
    };

    // circle Charts
    circle();
    function circle(){
        // circle Charts
        for (i = 0; i < data.length-2 ; i++) {
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


        // adding % to the third value in circle chart
        for (i = data.length-2; i < data.length ; i++) {
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
                $(this).find('span').html(Math.round(stepvalue * 100)+ "%");
            });
    };
    };

});


    

