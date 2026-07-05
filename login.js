import { db } from "./firebase.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const userId = document.getElementById("userId").value.trim();

    if (userId === "") {
        alert("User ID टाका.");
        return;
    }

    try {

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            alert("ही User ID नोंदणीकृत नाही.");
            return;
        }

        // User ID ब्राउझरमध्ये जतन करा
        localStorage.setItem("userId", userId);

        alert("लॉगिन यशस्वी.");

        // पुढील पेज
        window.location.href = "home.html";

    } catch (error) {
        console.error(error);
        alert("लॉगिन अयशस्वी.");
    }

});
