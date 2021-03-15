import './util.js';
import './map.js';
import './selected-form.js';
import './validity-form.js';
import { getData } from './data-server.js';
import { initMainPins, initMainPin } from './map.js';
import { adFormSubmit, adFormReset, deactivateForm, activateForm } from './form.js';
import { showErrorMessage } from './message.js';

deactivateForm();
getData(
  (apartments) => {
    initMainPin();
    initMainPins(apartments);
    activateForm();
  },
  showErrorMessage,
);

adFormSubmit();
adFormReset();
