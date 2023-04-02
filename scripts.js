function check(){
    if((document.getElementById("user").value == "Enter Username Here" && document.getElementById("pass").value == "Enter Password Here")||(document.getElementById("user").value == "" && document.getElementById("pass").value == "")){
        document.getElementById("notif").innerHTML = "Please enter your username and password";
        document.getElementById("notif").style = "color: red";
        console.log("Login Error");
    }
    else if((document.getElementById("user").value == "Enter Username Here" && document.getElementById("pass").value == "")||(document.getElementById("user").value == "" && document.getElementById("pass").value == "Enter Password Here")){
        document.getElementById("notif").innerHTML = "Please enter your username and password";
        document.getElementById("notif").style = "color: red";
        console.log("Login Error");
    }
    else if(document.getElementById("user").value == "Enter Username Here"|document.getElementById("user").value == ""){
        document.getElementById("notif").innerHTML = "Please enter your Username";
        document.getElementById("notif").style = "color: red";
        console.log("Login Error");
     }  
    else if(document.getElementById("pass").value == "Enter Password Here"|document.getElementById("pass").value == ""){
        document.getElementById("notif").innerHTML = "Please enter your Password";
        document.getElementById("notif").style = "color: red";
        console.log("Login Error");
     } 
    else{
        document.getElementById("notif").innerHTML = "Logged In";
        document.getElementById("notif").style = "color: green";
        console.log("Login Error");
    }

}