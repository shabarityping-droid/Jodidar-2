
import { auth } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const password = document.getElementById("password").value;

  if (!fullName || !email || !mobile || !password) {
    alert("Please fill all fields.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredential.user, {
      displayName: fullName
    });

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("mobile", mobile);

    alert("Registration Successful!");

    window.location.href = "login.html";

  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
