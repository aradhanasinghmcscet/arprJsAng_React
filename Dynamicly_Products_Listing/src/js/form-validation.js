$(function(){
    $('.fname_error').hide();
    $('.lname_error').hide();
    $('.email_error').hide();
    $('.phone_error').hide();
    $('.password_error').hide();

    var error_fname = false ;
    var error_lname = false ;
    var error_email = false ;
    var error_phone = false ;
    var error_password = false ;

    $('#fname').focusout(function(){
    
        check_fname();
    });
    $('#lname').focusout(function(){
        check_lname();
    });
    $('#email').focusout(function(){
        check_email();
    });
    $('#phone').focusout(function(){
        check_phone();
    });
    $('#password').focusout(function(){
        check_password();
    });
    var regex = /^[A-Za-z]+$/;
    function check_fname(input){
        var fname= $('#fname').val();
        //var name_regex = /^[A-Za-z]+$/;
        if(fname.match(regex) && fname !== ""){
            return true;
        }
        else{
            $(".fname_error").html("Please Enter a Valid Name")
           $(".fname_error").show();
           error_fname = true;
        }
    }

    function check_lname(input){
        var fname= $('#lname').val();
        //var sname_regex = /^[A-Za-z]+$/;
        if(lname.match(regex) && lname !== ""){
            return true;
        }
        else{
            $(".lname_error").html("Please Enter a Valid Name")
           $(".lname_error").show();
           error_lname = true;
        }
    }

    function check_email(input){
        var email= $('#email').val();
        var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(email_regex) && email !== ""){
            return true;
        }
        else{
            $(".email_error").html("Please Enter a Valid Email")
           $(".email_error").show();
           error_email = true;
        }
    }

    function check_phone(input){
        var phone= $('#phone').val();
        var phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phone.match(phone_regex) && phone !== ""){
            return true;
        }
        else{
            $(".phone_error").html("Please Enter a Valid Phone Number !")
           $(".phone_error").show();
           error_phone = true;
        }
    }

    function check_password(input){
        var password= $('#password').val();
        var password_regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        if(password.length<8){
            $(".password_error").html("Password length should be minimum 8 character!")
            $(".password_error").show();
            error_password = true;
        }
        else if(password.match(password_regex) && password !== ""){
            return true;
        }
        else{
            $(".password_error").html("Please Enter a Valid password !")
           $(".password_error").show();
           error_password = true;
        }
    }
});