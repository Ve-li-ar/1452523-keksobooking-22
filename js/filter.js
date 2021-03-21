import { initMainPins, removeMarkers } from './map.js';

const houseType = document.querySelector('#housing-type');
const mapFilter = document.querySelector('.map__filters');

// TODO используй стрелочные функции
const setHousingTypeChange = (pins) => {
  // TODO в 8.2 добавится фильтрация по другим полям
  //  По этому давай сделаем следующее:
  //  1. установим слушатель не на houseType, а на .map__filters. Это тэг form
  mapFilter.addEventListener('change', function () {

    if (housingFilter(pin.offer)) {
      removeMarkers();

      const filterPins = [];
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

// TODO один из возможных вариантов реализации
const housingFilter = (offer) => {
  return houseType.value === 'any' || offer.type === houseType.value;
}

export { setHousingTypeChange };
