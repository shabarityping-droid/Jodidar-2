
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
    }
});

const button = document.querySelector(".logout");

button.addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logout Successful");
        window.location.href = "login.html";
    });
});
