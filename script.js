
// Login तपासा
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (localStorage.getItem("loggedInUser")) {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
} else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logout यशस्वी!");
    window.location.href = "login.html";
}
