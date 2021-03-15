// TODO старайся соблюдать схему
// Импорты
// Константы
// Объявления функций
// Выполнение алгоритмов - эти два пункта могут меняться местами
// Установка слушателей  -
// Экспорты

import { createCard } from './card.js';

const MAIN_LATITUDE = 35.6894;
const MAIN_LONGITUDE = 139.692;
const MAIN_ZOOM = 10;

//инициализация карты
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

// Ставим главный пин на карту
const initMainPin = () => {
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
  // TODO вручную вызываем событие передвижения пина. Это что бы координаты в поле адрес проставились
  mainPinMarker.fireEvent('moveend');
};

// При перемещении главного пина меняется значение поля ввода адреса

const createPopupCard = (apartment) => {
  const popupElement = createCard(apartment);
  popupElement.querySelector('.popup__text--address').textContent =
    `Координаты: ${apartment.location.x}, ${apartment.location.y}`;

  return popupElement;
}

//инициализация пинов
const initMainPins = (apartments) => {
  apartments.forEach((item) => {

    const icon = window.L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [50, 82],
      iconAnchor: [25, 41],
    });

    const marker = window.L.marker({
      lat: item.location.lat,
      lng: item.location.lng,
    }, { icon },
    );

    marker
      .addTo(map)
      .bindPopup(() => createPopupCard(item), {
        keepInView: true,
      });
  });
};

// TODO функция сброса красного пина
const resetMainMarker = () => {
  mainPinMarker.setLatLng([MAIN_LATITUDE, MAIN_LONGITUDE]);
  // TODO вручную вызываем событие передвижения пина. Это что бы координаты в поле адрес проставились
  mainPinMarker.fireEvent('moveend');
  map.setView(new window.L.LatLng(MAIN_LATITUDE, MAIN_LONGITUDE), MAIN_ZOOM);
};

export { initMainPins, initMainPin, resetMainMarker }