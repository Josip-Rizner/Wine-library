function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginButton = document.getElementById("submit_sign_in");
    var loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (username == "admin" && password == "admin") {
            alert("You have successfully logged in.");
            window.location = "../mainPage/index.html";
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    })
}
