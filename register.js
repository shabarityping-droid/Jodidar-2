import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

    const userId = document.getElementById("userId").value.trim();

    if (userId === "") {
        alert("User ID टाका.");
        return;
    }

    try {

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            alert("ही User ID आधीच नोंदणीकृत आहे.");
            return;
        }

        await setDoc(userRef, {
            userId: userId,
            createdAt: new Date().toISOString()
        });

        alert("नोंदणी यशस्वी झाली.");

        window.location.href = "login.html";

    } catch (error) {
        console.error(error);
        alert("नोंदणी अयशस्वी.");
    }

});
