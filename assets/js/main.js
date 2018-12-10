$(document).ready(function () {

    // sidebar toggle
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    (function(){
        // left check box changee label-background and its chart
        $('.checkbox-small').addClass("checked-bar");
        $('#customCheck-bar:input').click(function(){
            $('.checkbox-small').addClass("checked-bar");
            $('.checkbox-small').removeClass("checked-line");
            $('.checkbox-small').removeClass("checked-half");
            $('.checkbox-small').removeClass("checked-circle");
            $('.chart-row').addClass("barChart");
            $('.chart-row').removeClass("lineChart");
            $('.chart-row').removeClass("circleChart");
            $('.chart-row').removeClass("halfChart");
        });

        $('#customCheck-line:input').click(function(){
            $('.checkbox-small').addClass("checked-line");
            $('.checkbox-small').removeClass("checked-bar");
            $('.checkbox-small').removeClass("checked-half");
            $('.checkbox-small').removeClass("checked-circle");
            $('.chart-row').addClass("lineChart");
            $('.chart-row').removeClass("barChart");
            $('.chart-row').removeClass("circleChart");
            $('.chart-row').removeClass("halfChart");
            
        });

        $('#customCheck-half:input').click(function(){
            $('.checkbox-small').addClass("checked-half");
            $('.checkbox-small').removeClass("checked-bar");
            $('.checkbox-small').removeClass("checked-line");
            $('.checkbox-small').removeClass("checked-circle");
            $('.chart-row').addClass("halfChart");
            $('.chart-row').removeClass("barChart");
            $('.chart-row').removeClass("circleChart");
            $('.chart-row').removeClass("lineChart");
        });

        $('#customCheck-circle:input').click(function(){
            $('.checkbox-small').addClass("checked-circle");
            $('.checkbox-small').removeClass("checked-half");
            $('.checkbox-small').removeClass("checked-bar");
            $('.checkbox-small').removeClass("checked-line");
            $('.chart-row').addClass("circleChart");
            $('.chart-row').removeClass("lineChart");
            $('.chart-row').removeClass("barChart");
            $('.chart-row').removeClass("halfChart");
        });

    })();

    (function(){
        // left check box changee label-background and its chart
        // $('.checkbox-small').addClass("checked-bar");
        $('#customCheck1:input').click(function(){
            $('.chart-row').addClass("transaction");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employLate");
        });

        $('#customCheck2:input').click(function(){
            $('.chart-row').addClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employLate");
        });

        $('#customCheck3:input').click(function(){
            $('.chart-row').addClass("elecStat");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').removeClass("employLate");
        });

        $('#customCheck4:input').click(function(){
            $('.chart-row').addClass("employLate");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("transaction");
        });

    })();



});