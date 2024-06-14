function validation(){
    if(document.formFill.Username.value==""){
        document.getElementById("result").innerHTML="***Enter your Username***"
        return false;
    }
    else if(document.formFill.Username.value.length<6){
        document.getElementById("result").innerHTML="***Min username length should be six letters***"
        return false;  
    }
    else if(document.formFill.Email.value==""){
        document.getElementById("result").innerHTML="***Enter your Email***"
        return false;
    }
    else if(document.formFill.Email.value.length<6){
        document.getElementById("result").innerHTML="***Enter your Email***"
        return false;
    }
    else if(document.formFill.Password.value==""){
        document.getElementById("result").innerHTML="***Enter your Password***"
        return false;
    }
    else if(document.formFill.Password.value.length<6){
        document.getElementById("result").innerHTML="***Password must be 6 digits***"
        return false;
    }
    else if(document.formFill.cPassword.value==""){
        document.getElementById("result").innerHTML="***Enter confirm Password***"
        return false;
    }
    else if(document.formFill.Password.value!==document.formFill.cPassword.value){
        document.getElementById("result").innerHTML="***Password doesn't match***"
        return false;
    }
    else if(document.formFill.Password.value == document.formFill.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup')

function closeSlide(){
    popup.classList.remove("open-slide")
    document.formFill.reset();
}







