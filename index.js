function validateLogin(){
    var username = document.forms["myForm"]["user"].value;
    var password = document.forms["myForm"]["password"].value;
    if(username === "" || password === ""){
        alert("Username and Password cannot by empty")
        return false
    }
    else if(password.length < 8){
        alert("Password should be minimun 8 characters")
        return false
    }
    else{
        return true
    }
}

function validateRegister(){
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    var cpassword = document.forms["myForm"]["cpassword"].value;
    if(username === "" || password === ""){
        alert("Username and Password cannot by empty")
        return false
    }
    else if(password.length < 8){
        alert("Password should be minimun 8 characters")
        return false
    }
    else if(password !== cpassword){
        alert("Password should not match")
        return false
    }
    else if(name === ""){
        alert("Name cannot by empty")
        return false
    }
    else if(email === ""){
        alert("Email cannot by empty")
        return false
    }
    else{
        return true
    }
}
