import { initMainPins, removeMarkers } from './map.js';

const mapFilter = document.querySelector('.map__filters');
const houseType = document.querySelector('#housing-type');
const houseRooms = document.querySelector('#housing-rooms');
const houseGuests = document.querySelector('#housing-guests');
const housePrice = document.querySelector('#housing-price');
const RERENDER_DELAY = 500;
const MAX_NUMBER_PINS = 10;

const PRICES = {
  low: {
    MIN: 0,
    MAX: 10000,
  },
  middle: {
    MIN: 10000,
    MAX: 50000,
  },
  high: {
    MIN: 50000,
    MAX: Infinity,
  },
};

const debounce = (cb, ms) => {
  let timer;

  return () => {
    if (timer) {
      window.clearTimeout(timer);
    }

    timer = setTimeout(() => cb(), ms)
  }
};

const setHousingTypeChange = (pins) => {
  mapFilter.addEventListener('change', debounce(() => {
    removeMarkers();
    const filterPins = [];
    for (let pin of pins) {
      if (
        housingTypeFilter(pin.offer) &&
        housingPriceFilter(pin.offer) &&
        housingRoomsFilter(pin.offer) &&
        housingCapacityFilter(pin.offer) &&
        featuresFilter(pin.offer)
      ) {
        filterPins.push(pin);
        if (filterPins.length >= MAX_NUMBER_PINS) {
          break;
        }
      }
    }
    initMainPins(filterPins);
  }, RERENDER_DELAY))
}

//тип
const housingTypeFilter = (offer) => {
  return houseType.value === 'any' || offer.type === houseType.value;
};

//комнаты
const housingRoomsFilter = (offer) => {
  return houseRooms.value === 'any' || offer.rooms === Number(houseRooms.value);
};

//количество гостей
const housingCapacityFilter = (offer) => {
  return houseGuests.value === 'any' || offer.guests === Number(houseGuests.value);
};

//цена
const housingPriceFilter = (offer) => {
  const settings = PRICES[housePrice.value]
  return housePrice.value === 'any' || (offer.price >= settings.MIN && offer.price <= settings.MAX);
};

//удобства
const featuresFilter = (offer) => {
  const checkedFeaturesFilter = mapFilter.querySelectorAll('.map__checkbox:checked');
  let i = 0;
  checkedFeaturesFilter.forEach((feature) => {
    if (offer.features.includes(feature.value)) {
      i++;
    }
  });
  return i === checkedFeaturesFilter.length;
};

const resetFilterForm = () => {
  mapFilter.reset();
}

export { setHousingTypeChange, resetFilterForm };
