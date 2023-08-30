let username =document.getElementById("username");
let password = document.getElementById("password");
let error=document.getElementById("userError");
let error2=document.getElementById("passError");
let flag=1;

function validationForm(){
    if(username.value==""){
        error.innerHTML="user name is empaty";
        flag =0;
        

    }else if(username.value.length<3){
        error.innerHTML="min three character";
        flag =0;

    }else{
        error.innerHTML="";
        flag=1;
    }

    if(password.value==""){
        error2.innerHTML="password is empaty"
        flag=0;
        

    }else if(password.value.length<3){
        error2.innerHTML="min three character"
        flag=0;

    }else{
        error2.innerHTML="";
        flag=1;
    }
    if(flag){
        true
    }else{
        false
    }
}