import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMtVkwG5S3pdVLXlcntHxXkNEd8Pv2CIE",
  authDomain: "hacumine.firebaseapp.com",
  projectId: "hacumine",
  storageBucket: "hacumine.appspot.com",
  messagingSenderId: "829738448623",
  appId: "1:829738448623:web:aae8a10b6cbdd918c84d1a",
  measurementId: "G-4KC7QMREM4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let map;
let marker;

const initMap = () => {
  document.getElementById("map").style.display = "block";
  map = L.map('map').setView([45.7, 21.3], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  setTimeout(() => map.invalidateSize(), 300);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      map.setView([lat, lng], 15);
      marker = L.marker([lat, lng]).addTo(map).bindPopup("Ești aici").openPopup();
    });
  }
};

const renderClientActions = () => {
  const actions = document.getElementById("actions");
  actions.innerHTML = '<button id="requestRide">Cere o cursă</button>';
  document.getElementById("requestRide").onclick = () => alert("Cererea a fost trimisă!");
};

const renderDriverActions = () => {
  const actions = document.getElementById("actions");
  actions.innerHTML = '<button id="acceptRide">Acceptă cursă</button>';
  document.getElementById("acceptRide").onclick = () => alert("Ai acceptat o cursă!");
};

document.addEventListener("DOMContentLoaded", () => {
  // Autentificare
  document.getElementById("login").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, pass).catch(err => alert("Eroare login: " + err.message));
  });

  document.getElementById("signup").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, pass).catch(err => alert("Eroare creare cont: " + err.message));
  });

  document.getElementById("logout").addEventListener("click", () => {
    signOut(auth);
  });

  onAuthStateChanged(auth, (user) => {
    const authSection = document.getElementById("auth-section");
    const welcomeSection = document.getElementById("welcome");
    if (user) {
      authSection.style.display = "none";
      welcomeSection.style.display = "block";
    } else {
      authSection.style.display = "block";
      welcomeSection.style.display = "none";
    }
  });

  // Butoane roluri
  document.getElementById("btn-client").addEventListener("click", () => {
    initMap();
    renderClientActions();
  });

  document.getElementById("btn-sofer").addEventListener("click", () => {
    initMap();
    renderDriverActions();
  });
});
