# HaiCuMine 🚕 – Aplicație Web de Tip Taxi

**HaiCuMine** este o aplicație web progresivă (PWA) scrisă în HTML, CSS și JavaScript care permite interacțiunea între clienți și șoferi, similar cu aplicații de tip ride-hailing (ex: Bolt, Uber).

---

## 🔧 Funcționalități Implementate

### ✅ Autentificare Firebase
- Login și înregistrare cu email și parolă
- Alegere rol: Client / Șofer
- Firebase Authentication + Firestore

### 🗺️ Hartă și Localizare
- Hartă interactivă cu Leaflet.js și OpenStreetMap
- Detectarea poziției curente a utilizatorului
- Alegerea unei destinații și calcul rută

### 📏 Estimare rută și cost
- Integrare cu OpenRouteService API
- Afișare distanță, durată estimată și cost (5 lei/km)

### 🗃️ Istoric curse
- Salvarea detaliilor despre cursă în Firebase Firestore
- Afișarea istoricului individual de curse pentru fiecare utilizator

### 💬 Chat Live
- Chat global între toți utilizatorii conectați (pentru MVP)
- Firebase Realtime Database

### 📲 PWA – Aplicație mobilă
- `manifest.json` + `service-worker.js`
- Instalabilă pe Android/iOS/Desktop
- Pictograme custom cu inițialele HM

---

## 🚀 Tehnologii folosite

- **Frontend:** HTML, CSS, JS Vanilla
- **Hărți:** Leaflet.js + OpenStreetMap
- **Backend-as-a-Service:** Firebase (Auth, Firestore, Realtime DB)
- **Routing API:** OpenRouteService
- **PWA:** Service Worker + Manifest

---

## 🗂️ Structură fișiere

```
.
├── index.html
├── login.html
├── register.html
├── manifest.json
├── service-worker.js
├── assets/
│   ├── icon-192.png
│   └── icon-512.png
├── scripts/
│   ├── app.js
│   ├── chat.js
│   ├── login.js
│   ├── register.js
│   └── rides.js
├── style/
│   └── main.css
└── README.md
```

---

## 📦 Instalare

1. Urcă acest folder pe [Netlify](https://netlify.com) prin drag & drop
2. Creează un proiect Firebase și completează `firebaseConfig` în fișierele JS
3. Activează autentificarea prin email + Realtime DB + Firestore
4. Aplicația e gata de utilizare! 🚕

---

## 👤 Creat de
**Marian Dumitru** – dezvoltator frontend & coordonator proiect HaiCuMine  
📍 România • 2025
