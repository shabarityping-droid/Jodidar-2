
// Login/Logout Button Control
document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (localStorage.getItem("loggedInUser") === "true") {
        if (loginBtn) loginBtn.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline-block";
    } else {
        if (loginBtn) loginBtn.style.display = "inline-block";
        if (logoutBtn) logoutBtn.style.display = "none";
    }

});

// Logout Function
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logout Successful");
    window.location.href = "login.html";
}
