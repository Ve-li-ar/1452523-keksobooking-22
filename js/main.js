import { apartmentsNumber, createApartment } from './data.js';
import { createCard } from './card.js';

const cards = new Array(apartmentsNumber).fill(null).map(() => createApartment());

const arrayCard = createCard(cards[0]);

const mapCanvas = document.querySelector('#map-canvas');

mapCanvas.appendChild(arrayCard);
