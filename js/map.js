const map = window.L.map('map-canvas')

  .setView({
    lat: 35.6894,
    lng: 139.692,
  }, 12);

window.L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

export { map };
