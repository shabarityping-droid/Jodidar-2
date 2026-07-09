// dashboard.js

import { app, db } from "./firebase.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const storage = getStorage(app);

const profileId = localStorage.getItem("profileId");

if (!profileId) {
  alert("Please login first.");
  window.location.href = "login.html";
}

document.getElementById("logoutBtn").onclick = () => {
  localStorage.clear();
  window.location.href = "login.html";
};

document.getElementById("uploadBtn").onclick = async () => {
  const photo = document.getElementById("photo").files[0];
  const pdf = document.getElementById("pdf").files[0];

  if (!photo || !pdf) {
    alert("Photo आणि PDF निवडा.");
    return;
  }

  try {
    const photoRef = ref(storage, `photos/${profileId}`);
    await uploadBytes(photoRef, photo);
    const photoURL = await getDownloadURL(photoRef);

    const pdfRef = ref(storage, `pdfs/${profileId}`);
    await uploadBytes(pdfRef, pdf);
    const pdfURL = await getDownloadURL(pdfRef);

    await setDoc(
      doc(db, "profiles", profileId),
      {
        photoURL,
        pdfURL
      },
      { merge: true }
    );

    alert("Upload Successful");
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};
