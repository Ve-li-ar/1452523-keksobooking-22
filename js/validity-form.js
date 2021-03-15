const MIN_LENGTH = 30;
const MAX_LENGTH = 100;
const MAX_ROOMS = 100;

const priceMinOnNight = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const inputFormTitle = document.querySelector('#title');
const guestsNumber = document.querySelector('#capacity');
const roomsNumber = document.querySelector('#room_number');

const selectFormType = document.querySelector('#type');
const inputFormPrice = document.querySelector('#price');

//валидация для соотношения цены и типа жилья
selectFormType.addEventListener('change', function (evt) {
  inputFormPrice.placeholder = priceMinOnNight[evt.target.value];
  inputFormPrice.setAttribute('min', priceMinOnNight[evt.target.value]);
})

//валидация для соотношения времени въезда и выезда
const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');

selectTimeIn.addEventListener('change', function (evt) {
  selectTimeOut.value = evt.target.value;
})

selectTimeOut.addEventListener('change', function (evt) {
  selectTimeIn.value = evt.target.value;
})

//валидация для длины строки
inputFormTitle.addEventListener('input', () => {
  const valueLength = inputFormTitle.value.length;

  if (valueLength < MIN_LENGTH) {
    inputFormTitle.setCustomValidity(`Минимальное количество символов 30. Введите ещё ${MIN_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_LENGTH) {
    inputFormTitle.setCustomValidity(`Максимальное количество символов 100. Удалите ${valueLength - MAX_LENGTH} символов`);
  } else {
    inputFormTitle.setCustomValidity('');
  }

  inputFormTitle.reportValidity();
});

//валидация для соотношения количества комнат и гостей
const ratioOfRoomsToGuests = () => {
  const rooms = parseInt(roomsNumber.value, 10);
  const guests = parseInt(guestsNumber.value, 10);

  if (rooms === MAX_ROOMS ^ guests == 0) {
    guestsNumber.setCustomValidity('Вы выбрали вариант не подходящий для заселения');
  } else if (rooms < guests) {
    guestsNumber.setCustomValidity('Невозможно заселить. Выберите большее количество комнат');
  } else {

    guestsNumber.setCustomValidity('');
  }
}

guestsNumber.addEventListener('change', () => {
  ratioOfRoomsToGuests();
})

roomsNumber.addEventListener('change', () => {
  ratioOfRoomsToGuests();
})


