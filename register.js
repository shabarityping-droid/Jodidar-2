import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const customerId = document.getElementById("customerId").value.trim();
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  if (!customerId || !name || !mobile) {
    alert("सर्व माहिती भरा.");
    return;
  }

  try {
    // Customer ID आधीपासून आहे का ते तपासा
    const q = query(
      collection(db, "customers"),
      where("customerId", "==", customerId)
    );

    const result = await getDocs(q);

    if (!result.empty) {
      alert("हा Customer ID आधीच वापरला आहे.");
      return;
    }

    // नवीन ग्राहक सेव्ह करा
    await addDoc(collection(db, "customers"), {
      customerId: customerId,
      name: name,
      mobile: mobile,
      createdAt: new Date()
    });

    alert("नोंदणी यशस्वी झाली.");

    registerForm.reset();

    // Login Page
    window.location.href = "login.html";

  } catch (error) {
    console.error(error);
    alert("नोंदणी अयशस्वी.");
  }
});
