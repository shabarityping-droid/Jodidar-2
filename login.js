import { db } from "./firebase.js";

import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const mobile = document.getElementById("mobile").value.trim();

  if (mobile.length !== 10) {
    alert("कृपया 10 अंकी मोबाईल नंबर टाका.");
    return;
  }

  try {
    const q = query(
      collection(db, "users"),
      where("mobile", "==", mobile)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      alert("हा मोबाईल नंबर नोंदणीकृत नाही.");
      return;
    }

    // Login Success
    localStorage.setItem("mobile", mobile);

    alert("Login यशस्वी.");

    window.location.replace("home.html");

  } catch (error) {
    console.error(error);
    alert("Login करताना त्रुटी आली.");
  }
});
