import { initMainPins, removeMarkers } from './map.js';

const mapFilter = document.querySelector('.map__filters');
const houseType = document.querySelector('#housing-type');
const houseRooms = document.querySelector('#housing-rooms');
const houseGuests = document.querySelector('#housing-guests');
const housePrice = document.querySelector('#housing-price');



const setHousingTypeChange = (pins) => {
  mapFilter.addEventListener('change', () => {
    removeMarkers();
    const filterPins = [];
    pins.forEach((pin) => {
      if (
        housingTypeFilter(pin.offer) &&
        housingPriceFilter(pin.offer) &&
        housingRoomsFilter(pin.offer) &&
        housingCapacityFilter(pin.offer)
      ) {
        filterPins.push(pin);
      }
    })
    initMainPins(filterPins);
  })
}

//тип
const housingTypeFilter = (offer) => {
  return houseType.value === 'any' || offer.type === houseType.value;
};

//комнаты
const housingRoomsFilter = (offer) => {
  return houseRooms.value === 'any' || offer.rooms === houseRooms.value;
};

//количество гостей
const housingCapacityFilter = (offer) => {
  return houseGuests.value === 'any' || offer.guests === houseGuests.value;
};

//цена
const housingPriceFilter = (offer) => {
  return housePrice.value === 'any' || offer.price === housePrice.value;
};

const resetFilterForm = () => {
  mapFilter.reset();
}

export { setHousingTypeChange, resetFilterForm };
