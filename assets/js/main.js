$(document).ready(function () {

    // sidebar toggle
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

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