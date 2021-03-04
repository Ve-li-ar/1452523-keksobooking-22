/* global L:readonly */

import { apartmentsNumber, createApartment, cards } from './data.js';
import { map } from './map.js';
import { createCard } from './card.js'

const marker = window.L.marker(
  {
    lat: 35.6894,
    lng: 139.692,
  },
);

marker.addTo(map);

// Ставим главный пин на карту
const mainPinIcon = window.L.icon({
  iconUrl: 'leaflet/images/marker-icon-2x.png',
  iconSize: [50, 82],
  iconAnchor: [25, 41],
});

const mainPinMarker = window.L.marker(
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

const mockObjects = createApartment(apartmentsNumber);

const createPopupCard = (object) => {
  const popupElement = createCard(object);
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${object.location.x}, ${object.location.y}`;

  return popupElement;
}


cards.forEach((item) => {

  const icon = window.L.icon({
    iconUrl: 'leaflet/images/marker-icon.png',
    iconSize: [50, 82],
    iconAnchor: [25, 41],
  });

  const marker2 = L.marker({
    lat: item.location.x,
    lng: item.location.y,
  },

    {
      icon,
    },
  );

  marker2
    .addTo(map)
    .bindPopup(createPopupCard(item),
      {
        keepInView: true,
      },
    );
})


