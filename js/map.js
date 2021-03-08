// TODO старайся соблюдать схему
// Импорты
// Константы
// Объявления функций
// Выполнение алгоритмов - эти два пункта могут меняться местами
// Установка слушателей  -
// Экспорты

import { createApartments } from './data.js';
import { createCard } from './card.js';

const initMap = () => {
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
  return map;
}

const map = initMap();

// Ставим главный пин на карту
const initMainPin = (map) => {
  const mainPinMarker = window.L.marker(
    {
      lat: 35.6894,
      lng: 139.692,
    },
    {
      draggable: true,
      icon: window.L.icon({
        iconUrl: 'img/main-pin.svg',
        iconSize: [50, 82],
        iconAnchor: [25, 41],
      }),
    },
  )

  // При перемещении главного пина меняется значение поля ввода адреса

  mainPinMarker.on('moveend', (evt) => {
    const adForm = document.querySelector('.ad-form');
    const valueForm = adForm.querySelector('#address')
    const coords = evt.target.getLatLng();
    const lat = coords.lat.toFixed(5);
    const lng = coords.lng.toFixed(5);
    valueForm.value = `${lat}, ${lng}`;
  });

  mainPinMarker.addTo(map);
};

initMainPin(map);

// При перемещении главного пина меняется значение поля ввода адреса

const createPopupCard = (apartment) => {
  const popupElement = createCard(apartment);
  popupElement.querySelector('.popup__text--address').textContent =
    `Координаты: ${apartment.location.x}, ${apartment.location.y}`;

  return popupElement;
}

const initMainPins = (map) => {
  createApartments().forEach((item) => {

    const icon = window.L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [50, 82],
      iconAnchor: [25, 41],
    });

    const marker = window.L.marker({
      lat: item.location.x,
      lng: item.location.y,
    }, { icon },
    );

    marker
      .addTo(map)
      .bindPopup(() => createPopupCard(item), {
        keepInView: true,
      });
  });

};
initMainPins(map);