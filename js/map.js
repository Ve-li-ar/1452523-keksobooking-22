// TODO старайся соблюдать схему
// Импорты
// Константы
// Объявления функций
// Выполнение алгоритмов - эти два пункта могут меняться местами
// Установка слушателей  -
// Экспорты

import { createCards } from './data.js';
import { createCard } from './card.js';

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

// Ставим главный пин на карту
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
);

mainPinMarker.addTo(map);

const createPopupCard = (object) => {
  const popupElement = createCard(object);
  popupElement.querySelector('.popup__text--address').textContent =
    `Координаты: ${object.location.x}, ${object.location.y}`;

  return popupElement;
}

createCards().forEach((item) => {

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

// При перемещении главного пина меняется значение поля ввода адреса

mainPinMarker.on('moveend', (evt) => {
  const adForm = document.querySelector('.ad-form');
  const valueForm = adForm.querySelector('#adress')
  valueForm.value = `${evt.target.getLatLng().lat.toFixed()},
 ${evt.target.getLatLng().lat.toFixed()}`;
});