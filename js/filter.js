import { initMainPins, removeMarkers } from './map.js';

const houseType = document.querySelector('#housing-type');
const mapFilter = document.querySelector('.map__filters');

const setHousingTypeChange = (pins) => {
  mapFilter.addEventListener('change', () => {
    removeMarkers();
    const filterPins = [];
    pins.forEach((pin) => {
      if (housingFilter(pin.offer)) {
        filterPins.push(pin);
      }
    })
    initMainPins(filterPins);
  })
}

const housingFilter = (offer) => {
  return houseType.value === 'any' || offer.type === houseType.value;
}

const resetFilterForm = () => {
  mapFilter.reset();
}

export { setHousingTypeChange, resetFilterForm };
