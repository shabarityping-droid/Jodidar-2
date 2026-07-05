// login.js

import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// जर आधीच लॉगिन असेल तर Home वर पाठवा
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "home.html";
  }
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful!");

    window.location.href = "home.html";

  } catch (error) {
    switch (error.code) {
      case "auth/invalid-credential":
        alert("ईमेल किंवा पासवर्ड चुकीचा आहे.");
        break;

      case "auth/user-not-found":
        alert("हा वापरकर्ता नोंदणीकृत नाही.");
        break;

      case "auth/wrong-password":
        alert("पासवर्ड चुकीचा आहे.");
        break;

      case "auth/invalid-email":
        alert("ईमेल चुकीचा आहे.");
        break;

      case "auth/too-many-requests":
        alert("खूप प्रयत्न झाले आहेत. कृपया नंतर पुन्हा प्रयत्न करा.");
        break;

      default:
        alert(error.message);
    }
  }
});
