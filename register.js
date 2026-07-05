import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value;

    if (!fullName || !email || !mobile || !password) {
        alert("सर्व माहिती भरा.");
        return;
    }

    if (password.length < 6) {
        alert("Password किमान 6 अक्षरांचा असावा.");
        return;
    }

    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            fullName: fullName,
            email: email,
            mobile: mobile,
            createdAt: new Date().toISOString()
        });

        alert("नोंदणी यशस्वी झाली.");

        window.location.href = "login.html";

    } catch (error) {

        if (error.code === "auth/email-already-in-use") {
            alert("हा Email आधीच नोंदणीकृत आहे.");
        } else if (error.code === "auth/invalid-email") {
            alert("Email चुकीचा आहे.");
        } else if (error.code === "auth/weak-password") {
            alert("Password खूप कमजोर आहे.");
        } else {
            alert(error.message);
        }

        console.error(error);
    }

});
