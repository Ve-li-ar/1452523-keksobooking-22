import { initMainPins, removeMarkers } from './map.js';

const houseType = document.querySelector('#housing-type');
const mapFilter = document.querySelector('.map__filters');


const setHousingTypeChange = (pins) => {
  let filterPins = [];
  mapFilter.addEventListener('change', function () {

    if (housingFilter(pin.offer)) {
      removeMarkers();

      filterPins = [];
      pins.forEach((pin) => {
        if (housingFilter(pin.offer)) {
          filterPins.push(pin);
        }
      })
      initMainPins(filterPins);
    }
    else {
      initMainPins(pins);
    }
  })
}

const housingFilter = (offer) => {
  return houseType.value === 'any' || offer.type === houseType.value;
}

export { setHousingTypeChange };
