function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginButton = document.getElementById("submit_sign_in");
    let loginErrorMsg = document.getElementById("login-error-msg");

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
