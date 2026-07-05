// login.js

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // तुमच्या आवडीचे Username आणि Password
    if (username === "admin" && password === "123456") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Username or Password!");
    }
});
