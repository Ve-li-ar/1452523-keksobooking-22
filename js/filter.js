import { initMainPins, markers } from './map.js';

const houseType = document.querySelector('#housing-type');

let filterPins = [];

const setHousingTypeChange = function (pins, map) {
  houseType.addEventListener('change', function (evt) {
    if (evt.target.value !== 'any') {
      markers.forEach((adPin) => {
        adPin.remove();
      })
      markers.length = 0;

      filterPins = [];
      pins.forEach((pin) => {
        if (pin.offer.type === evt.target.value) {
          filterPins.push(pin);
        }
      })
      initMainPins(filterPins, map);
    }
    else {
      initMainPins(pins, map);
    }
  })
}

export { setHousingTypeChange };