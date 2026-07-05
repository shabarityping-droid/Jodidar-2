// register.js

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !password) {
        alert("सर्व माहिती भरा.");
        return;
    }

    const user = {
        name: name,
        password: password
    };

    localStorage.setItem("jodidarUser", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";
});
