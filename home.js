import { db } from "./firebase.js";
import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Login तपासा
const userId = localStorage.getItem("userId");

if (!userId) {
    window.location.href = "login.html";
}

// User ID दाखवा
document.getElementById("userId").textContent = userId;

// Firestore मधून माहिती आणा
async function loadUser() {
    try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const data = userSnap.data();

            console.log("User Data:", data);

            // इतर माहिती दाखवायची असल्यास येथे वापरा
            // उदा.
            // document.getElementById("name").textContent = data.name || "";
        } else {
            alert("User माहिती उपलब्ध नाही.");
        }
    } catch (error) {
        console.error(error);
        alert("माहिती लोड करण्यात अडचण आली.");
    }
}

loadUser();

// Logout
window.logout = function () {
    localStorage.removeItem("userId");
    window.location.href = "login.html";
};
