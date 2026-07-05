// script.js

// नोंदणी
function register() {
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let village = document.getElementById("village").value.trim();

    if (name === "" || mobile === "" || village === "") {
        alert("कृपया सर्व माहिती भरा.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        name: name,
        mobile: mobile,
        village: village
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("नोंदणी यशस्वी!");

    window.location.href = "Login.html";
}

// लॉगिन
function login() {
    let mobile = document.getElementById("mobile").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.mobile === mobile);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("लॉगिन यशस्वी!");
        window.location.href = "Home.html";
    } else {
        alert("मोबाईल नंबर सापडला नाही.");
    }
}

// लॉगआउट
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "Login.html";
}

// शोध
function searchUser() {
    let text = document.getElementById("search").value.toLowerCase();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let html = "";

    users.forEach(function(user) {
        if (
            user.name.toLowerCase().includes(text) ||
            user.village.toLowerCase().includes(text)
        ) {
            html += `
                <div class="card">
                    <b>नाव:</b> ${user.name}<br>
                    <b>मोबाईल:</b> ${user.mobile}<br>
                    <b>गाव:</b> ${user.village}
                </div>
            `;
        }
    });

    if (html === "") {
        html = "<p>कोणतीही नोंद सापडली नाही.</p>";
    }

    document.getElementById("result").innerHTML = html;
}
