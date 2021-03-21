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
const PIN_SIZE_X = 50;
const PIN_SIZE_Y = 82;
const MIN_PIN_SIZE_X = 25;
const MIN_PIN_SIZE_Y = 41;
const VISIBLE_ADS = 10;


//инициализация карты
const map = window.L.map('map-canvas')

  .setView({
    lat: MAIN_LATITUDE,
    lng: MAIN_LONGITUDE,
  }, MAIN_ZOOM);

window.L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

const mainPinMarker = window.L.marker(
  {
    lat: MAIN_LATITUDE,
    lng: MAIN_LONGITUDE,
  },
  {
    draggable: true,
    icon: window.L.icon({
      iconUrl: 'img/main-pin.svg',
      iconSize: [PIN_SIZE_X, PIN_SIZE_Y],
      iconAnchor: [MIN_PIN_SIZE_X, MIN_PIN_SIZE_Y],
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

const markers = [];

//инициализация пинов
const initMainPins = (apartments) => {
  apartments.slice(0, VISIBLE_ADS).forEach((item) => {

    const icon = window.L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [PIN_SIZE_X, PIN_SIZE_Y],
      iconAnchor: [MIN_PIN_SIZE_X, MIN_PIN_SIZE_Y],
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
    markers.push(marker);
  });
};

// TODO функция сброса красного пина
const resetMainMarker = () => {
  mainPinMarker.setLatLng([MAIN_LATITUDE, MAIN_LONGITUDE]);
  // TODO вручную вызываем событие передвижения пина. Это что бы координаты в поле адрес проставились
  mainPinMarker.fireEvent('moveend');
  map.setView(new window.L.LatLng(MAIN_LATITUDE, MAIN_LONGITUDE), MAIN_ZOOM);
};

const removeMarkers = () => {
  markers.forEach((marker) => {
    marker.remove();
  })
  markers.length = 0;
}

//const updatePinsOnMap = (apartments) => {

//apartments.slice(0, VISIBLE_ADS).forEach((item) => {
//const pin = initMainPins(item.location.lat, item.location.lng).addTo(map).bindPopup(() => createCard(item));
//pinList.push(pin);
//});
//}

//const updatePinsOnMap = (apartments) => {
// window.L.layerGroup().addTo(map).clearLayers();
// const filteredAdverts = apartments.slice(0, VISIBLE_ADS).filter(filterListener);
// initMainPins(filteredAdverts);
//};

///const reRenderMarkers = (apartments) => {
// removeMarkers();
//updatePinsOnMap(apartments);
//}

export { initMainPins, initMainPin, resetMainMarker, markers, removeMarkers }
