document.addEventListener("DOMContentLoaded", () => {
  let map;
  let marker;
  let currentRole = null;

  const initMap = () => {
    document.getElementById("map").style.display = "block";

    map = L.map('map').setView([45.7, 21.3], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    setTimeout(() => {
      map.invalidateSize();
    }, 300);

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
    document.getElementById("requestRide").onclick = () => {
      alert("Cererea a fost trimisă! Un șofer o va accepta.");
    };
  };

  const renderDriverActions = () => {
    const actions = document.getElementById("actions");
    actions.innerHTML = '<button id="acceptRide">Acceptă cursă</button>';
    document.getElementById("acceptRide").onclick = () => {
      alert("Ai acceptat o cursă! Navighează spre client.");
    };
  };

  const btnClient = document.getElementById("btn-client");
  const btnSofer = document.getElementById("btn-sofer");

  btnClient.addEventListener("click", () => {
    currentRole = "client";
    initMap();
    renderClientActions();
  });

  btnSofer.addEventListener("click", () => {
    currentRole = "sofer";
    initMap();
    renderDriverActions();
  });
});
