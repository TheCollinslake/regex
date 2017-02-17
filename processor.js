/**
 * Created by stu on 2/16/17.
 */

$(document).ready(function() {

    $("form#my_form").submit(function (e) {


        $("#my_form input[doJsValidate=true]," +
            "my_form select[doJsValidate=true]," +
            "#my_form textarea[doJsValidate=true]"
        ).each(function () {

            var proceed = true;



                $(this).css('border-color', '');
                if (!$.trim($(this).val())) {
                    $(this).css('border-color', 'red');
                    alert("A field is empty!");
                    proceed = false;
                }

                var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
                    $(this).css('border-color', 'red');
                    alert("Email is invalid!");
                    proceed = false;
                }

                if (proceed) {
                    return;
                }


                e.preventDefault();
        });
    });
});