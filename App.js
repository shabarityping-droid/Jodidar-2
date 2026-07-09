import { db } from "./firebase-config.js";
import {
  ref,
  get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// URL मधून profileId घ्या
const params = new URLSearchParams(window.location.search);
const profileId = params.get("id");

if (!profileId) {
  alert("Profile ID मिळाला नाही.");
  throw new Error("Profile ID missing");
}

const userRef = ref(db, "users/" + profileId);

get(userRef).then((snapshot) => {

  if (!snapshot.exists()) {
    alert("Profile सापडला नाही.");
    return;
  }

  const data = snapshot.val();

  document.getElementById("photo").src =
    data.photo || "https://via.placeholder.com/150";

  document.getElementById("name").textContent =
    data.name || "";

  document.getElementById("age").textContent =
    data.age || "";

  document.getElementById("gender").textContent =
    data.gender || "";

  document.getElementById("mobile").textContent =
    data.mobile || "";

  document.getElementById("village").textContent =
    data.village || "";

  document.getElementById("taluka").textContent =
    data.taluka || "";

  document.getElementById("district").textContent =
    data.district || "";

  document.getElementById("education").textContent =
    data.education || "";

  document.getElementById("occupation").textContent =
    data.occupation || "";

  document.getElementById("about").textContent =
    data.about || "";

}).catch((error) => {
  console.log(error);
  alert("डेटा लोड झाला नाही.");
});
