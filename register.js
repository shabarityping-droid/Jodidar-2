import { db } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

export async function registerUser(userData) {
  try {
    // Customer ID तयार करा
    const customerId = "JD" + Date.now();

    const newUser = {
      customerId: customerId,
      fullName: userData.fullName,
      mobile: userData.mobile,
      gender: userData.gender,
      age: userData.age,
      religion: userData.religion,
      caste: userData.caste,
      education: userData.education,
      occupation: userData.occupation,
      address: userData.address,

      horoscope: userData.horoscope || "",

      photo1: userData.photo1 || "",
      photo2: userData.photo2 || "",
      photo3: userData.photo3 || "",

      membership: "Free",
      paymentStatus: "Pending",
      approved: false,

      createdAt: serverTimestamp()
    };

    await addDoc(collection(db, "users"), newUser);

    alert("Registration Successful\nCustomer ID : " + customerId);

  } catch (error) {
    console.error(error);
    alert("Registration Failed");
  }
}
