import './util.js';
import './map.js';
import { getData } from './data-server.js';
import { initMainPins, initMainPin, initMap } from './map.js';
import { adFormSubmit, adFormReset } from './form.js'


getData((apartments) => {
  const map = initMap();
  initMainPin(map);
  initMainPins(map, apartments);
})

adFormSubmit();
adFormReset();