import './util.js';
import './map.js';
import { getData } from './data-server.js';
import { initMainPins, initMainPin } from './map.js';
import { adFormSubmit, adFormReset } from './form.js';
import { showErrorMessage } from './message.js';


getData(
  (apartments) => {
    initMainPin();
    initMainPins(apartments);
  },
  showErrorMessage,
);

adFormSubmit();
adFormReset();