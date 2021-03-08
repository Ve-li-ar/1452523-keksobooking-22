'use strict';

const HOUSING_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const CHECK_IN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECK_OUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const OPTION_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

//Нужно получить массив из 10 случайно сгенерированных объектов:
const apartmentsNumber = 10;

//cлучайное число с плавающей точкой
function getRandomFloat(min, max, n) {
  if (max > min && min >= 0) {

    return (Math.random() * (max - min) + min).toFixed(n);
  }
  throw new Error('ERROR!');
}

//случайное число
function getRandom(min, max) {
  return getRandomFloat(min, max, 0);
}

//случайный элемент массива
function getRandomArrayElement(array) {
  return array[getRandom(0, array.length - 1)];
}

//случайная длинна массива (?)
function getRandomArrayLength(array) {
  return array.slice(Math.floor(Math.random() * (array.length - 1)));
}

function createApartment() {

  let locationX = getRandomFloat(35.5000, 35.90000, 5);
  let locationY = getRandomFloat(139.50000, 139.90000, 5);
  return {
    author: {
      avatar: `img/avatars/user0${getRandom(1, 8)}.png`,
    },
    offer: {
      title: `Объявление №${getRandom(1, 500)}`,
      address: `${locationX}, ${locationY}`,
      price: getRandom(0, 5000),
      type: getRandomArrayElement(HOUSING_TYPES),
      rooms: getRandom(0, 100),
      guests: getRandom(0, 500),
      checkin: getRandomArrayElement(CHECK_IN_TIMES),
      checkout: getRandomArrayElement(CHECK_OUT_TIMES),
      features: getRandomArrayLength(FEATURES),
      description: 'Этот отель расположен в тихом уголке рядом с рекой, в историческом центре города',
      photos: getRandomArrayLength(OPTION_PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  }
}

const createApartments = () => new Array(apartmentsNumber).fill(null).map(() => createApartment());

export { createApartments };