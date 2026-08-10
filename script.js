$(document).ready(function(){
    $("#registerBtn").click(function(){
        let name=$("#name").val().trim();
        let email=$("#email").val().trim();
        let mobile=$("#mobile").val().trim();
        let branch=$("#branch").val();
        let password=$("#password").val();
        if(name==""){
            $("#message").html("Student Name is required.");
            return;
        }
        if(!email.includes("@")){
            $("#message").html("Invalid Email.");
            return;
        }
        if(mobile.length!=10 || isNaN(mobile)){
            $("#message").html("Mobile Number must be 10 digits.");
            return;
        }
        if(branch==""){
            $("#message").html("Please select Branch.");
            return;
        }
        if(password.length<6){
            $("#message").html("Password must contain at least 6 characters.");
            return;
        }
        $.getJSON("data/students.json",function(data){
            console.log(data);
            $("#message").css("color","green");
            $("#message").html("Registration Successful");
       });
    });
});
