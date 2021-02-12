import { apartmentsNumber, createApartment } from './cards.js';

const cards = new Array(apartmentsNumber).fill(null).map(() => createApartment());

cards(apartmentsNumber);
