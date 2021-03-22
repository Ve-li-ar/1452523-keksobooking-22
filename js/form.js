import { sendData } from './data-server.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { initMainPins, removeMarkers, resetMainMarker } from './map.js';
import { resetFilterForm } from './filter.js';

const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

//неактивность карты
const deactivateForm = () => {
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled')
  form.querySelector('fieldset').setAttribute('disabled', 'disabled');
};

//активность карты
const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled')
  form.querySelector('fieldset').removeAttribute('disabled', 'disabled');
}

const adFormSubmit = (apartments) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        showSuccessMessage();
        form.reset();
        resetFilterForm();
        removeMarkers();
        initMainPins(apartments);
      },
      () => {
        showErrorMessage();
        form.reset();
      },
      new FormData(evt.target),
    );
  });
};

const adFormReset = (apartments) => {
  form.addEventListener('reset', (evt) => {
    evt.preventDefault();
    form.reset();
    resetMainMarker();
    resetFilterForm();
    removeMarkers();
    initMainPins(apartments);
  });
};

export {
  deactivateForm,
  activateForm,
  adFormSubmit,
  adFormReset
}
