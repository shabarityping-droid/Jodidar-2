const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "123456") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Username or Password!");
    }
});
