// home.js

import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Login तपासा
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  try {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      const name = document.getElementById("userName");
      const mobile = document.getElementById("userMobile");

      if (name) {
        name.textContent = data.name || "";
      }

      if (mobile) {
        mobile.textContent = data.mobile || "";
      }
    }
  } catch (error) {
    console.error(error);
    alert("माहिती लोड झाली नाही.");
  }
});

// Logout
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
  });
}

// PDF Download
const pdfBtn = document.getElementById("pdfBtn");

if (pdfBtn) {
  pdfBtn.addEventListener("click", () => {
    window.open("files/info.pdf", "_blank");
  });
}
