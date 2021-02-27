/* global L:readonly */

import { map } from '.map.js'

const marker = L.marker(
  {
    lat: 35.6894,
    lng: 139.692,
  },
);

marker.addTo(map);

// Ставим главный пин на карту
const mainPinIcon = L.icon({
  iconUrl: 'leaflet/images/marker-icon-2x.png',
  iconSize: [50, 82],
  iconAnchor: [25, 41],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6894,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

// При перемещении главного пина меняется значение поля ввода адреса


mainPinMarker.on('moveend', (evt) => {
  const adForm = document.querySelector('.ad-form');
  const valueForm = adForm.querySelector('#adress')
  valueForm.value = `${evt.target.getLatLng().lat.toFixed()},
 ${evt.target.getLatLng().lat.toFixed()}`;
});
