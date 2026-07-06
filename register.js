import {
  db,
  collection,
  addDoc
} from "./firebase.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const district = document.getElementById("district").value.trim();

  try {
    await addDoc(collection(db, "profiles"), {
      name,
      mobile,
      age,
      gender,
      district,
      createdAt: new Date()
    });

    alert("नोंदणी यशस्वी झाली.");

    window.location.href = "login.html";

  } catch (error) {
    alert("त्रुटी : " + error.message);
  }
});
