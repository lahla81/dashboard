$(document).ready(function () {

    // sidebar toggle
    // $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    //     $('#main_sidbar').toggleClass('active');
    // });
    

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
        $('#customCheck1:input').click(function(){
            $('.chart-row').addClass("transaction");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employLate");
            $('.chart-row').removeClass("transactionTypes");
            $('.chart-row').removeClass("employeTransactionTypes");
            $('.chart-row').removeClass("digital_platform");
            $('.chart-row').removeClass("digital_platform_eye");
        });

        $('#customCheck2:input').click(function(){
            $('.chart-row').addClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employLate");
            $('.chart-row').removeClass("transactionTypes");
            $('.chart-row').removeClass("employeTransactionTypes");
            $('.chart-row').removeClass("digital_platform");
            $('.chart-row').removeClass("digital_platform_eye");
        });

        $('#customCheck3:input').click(function(){
            $('.chart-row').addClass("elecStat");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').removeClass("employLate");
            $('.chart-row').removeClass("transactionTypes");
            $('.chart-row').removeClass("employeTransactionTypes");
            $('.chart-row').removeClass("digital_platform");
            $('.chart-row').removeClass("digital_platform_eye");
        });

        $('#customCheck4:input').click(function(){
            $('.chart-row').addClass("employLate");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').removeClass("transactionTypes");
            $('.chart-row').removeClass("employeTransactionTypes");
            $('.chart-row').removeClass("digital_platform");
            $('.chart-row').removeClass("digital_platform_eye");
            $('.chart-row').removeClass("digital_platform_eye");
        });
        $('#customCheck5:input').click(function(){
            $('.chart-row').removeClass("employLate");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').addClass("transactionTypes");
            $('.chart-row').removeClass("employeTransactionTypes");
            $('.chart-row').removeClass("digital_platform");
            $('.chart-row').removeClass("digital_platform_eye");
        });
        $('#customCheck6:input').click(function(){
            $('.chart-row').removeClass("employLate");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').removeClass("transactionTypes");
            $('.chart-row').addClass("employeTransactionTypes");
            $('.chart-row').removeClass("digital_platform");
            $('.chart-row').removeClass("digital_platform_eye");
        });
        $('#customCheck7:input').click(function(){
            $('.chart-row').removeClass("employLate");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').removeClass("transactionTypes");
            $('.chart-row').removeClass("employeTransactionTypes");
            $('.chart-row').addClass("digital_platform");
            $('.chart-row').removeClass("digital_platform_eye");
        });
        $('#customCheck8:input').click(function(){
            $('.chart-row').removeClass("employLate");
            $('.chart-row').removeClass("elecStat");
            $('.chart-row').removeClass("employStat");
            $('.chart-row').removeClass("transaction");
            $('.chart-row').removeClass("transactionTypes");
            $('.chart-row').removeClass("employeTransactionTypes");
            $('.chart-row').removeClass("digital_platform");
            $('.chart-row').addClass("digital_platform_eye");
        });
        // $('#customCheck6:input').click(function(){
            // $('.chart-row').removeClass("employLate");
            // $('.chart-row').removeClass("elecStat");
            // $('.chart-row').removeClass("employStat");
            // $('.chart-row').removeClass("transaction");
            // $('.chart-row').addClass("transactionTypes");
            // $('#transactionTypes').css('display','block');
            // $('.checkbox-small').addClass("checked-bar");
            // $('.checkbox-small').addClass("checked-bar");
            // $('.checkbox-small').removeClass("checked-line");
            // $('.checkbox-small').removeClass("checked-half");
            // $('.checkbox-small').removeClass("checked-circle");
            // document.getElementById("customCheck-bar").checked = true;
            // document.getElementById("customCheck-line").checked = false;
            // document.getElementById("customCheck-half").checked = false;
            // document.getElementById("customCheck-circle").checked = false;
            // var employe_transaction_types_canvas_element = document.getElementById("employeTransactionTypes");
            // var dataValue = JSON.parse(employe_transaction_types_canvas_element.parentElement.dataset.values);    

        // });

    })();



});