'use strict';

const housing__types = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const check__in__times = [
  '12:00',
  '13:00',
  '14:00',
];

const check__out__times = [
  '12:00',
  '13:00',
  '14:00',
];

const option__photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

//Нужно получить массив из 10 случайно сгенерированных объектов:
const apartments__number = 10;

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
  let item;
  item = array[getRandom(0, array.length - 1)];
  return item;
}

//случайная длинна массива (?)
function getRandomArrayLength(array) {
  return array.slice(Math.floor(Math.random() * (array.length - 1)));
}


function createApartment() {
  let locationX = getRandomFloat(35.65000, 36.70000, 5);
  let locationY = getRandomFloat(35.65000, 36.70000, 5);
  return {
    author: {
      avatar: 'img/avatars/user0{getRandom(1, 8)}.png',
    },
    offer: {
      title: 'Объявление № {getRandom(1, 500)}',
      address: '{locationX}, {locationY}',
      price: getRandom(0, 5000),
      type: getRandomArrayElement(housing__types),
      rooms: getRandom(0, 100),
      guests: getRandom(0, 500),
      checkin: getRandomArrayElement(check__in__times),
      checkout: getRandomArrayElement(check__out__times),
      features: getRandomArrayLength(features),
      description: 'Этот отель расположен в тихом уголке рядом с рекой, в историческом центре города',
      photos: getRandomArrayLength(option__photos),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  }
}

const cards = new Array(apartments__number).fill(null).map(() => createApartment());

cards;
