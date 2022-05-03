var emailArray=[];
var passwordArray=[];

function register(){
    let firstName = document.getElementById("first_name").value;
    let secondName = document.getElementById("second_name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passwordConfirmation = document.getElementById("password_confirmation").value;
    let email = document.getElementById("email").value; 
    if(firstName == ""){
        alert("First name required!")
    }
    else if(secondName == ""){
        alert("Second name required!")
    }
    else if(username == ""){
        alert("Username required!")
    }
    else if(password == ""){
        alert("Password required!")
    }
    else if(passwordConfirmation != password){
        alert("Passwords do not match! Please try again.")
    }
    else if(email == ""){
        alert("E-mail required!")
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("first_name").value ="";
        document.getElementById("second_name").value="";
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("password_confirmation").value="";
        document.getElementById("email").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}