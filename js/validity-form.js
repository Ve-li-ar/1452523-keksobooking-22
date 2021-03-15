const MIN__LENGTH = 30;
const MAX__LENGTH = 100;
const MAX__ROOMS = 100;

const priceMinOnNight = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const inputFormTitle = document.querySelector('#title');
const questsNumber = document.querySelector('#capacity');
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

  if (valueLength < MIN__LENGTH) {
    inputFormTitle.setCustomValidity(`Минимальное количество символов 30. Введите ещё ${MIN__LENGTH - valueLength} символов`);
  }

  else if (valueLength > MAX__LENGTH) {
    inputFormTitle.setCustomValidity(`Максимальное количество символов 100. Удалите ${valueLength - MAX__LENGTH} символов`);
  }

  else {
    inputFormTitle.setCustomValidity('');
  }
});

//валидация для соотношения количества комнат и гостей
const ratioOfRoomsToQuests = () => {
  const rooms = roomsNumber.value;
  const quests = questsNumber.value;

  if (rooms == MAX__ROOMS && quests != 0) {
    questsNumber.setCustomValidity('Вы выбрали вариант не подходящий для заселения');
  } else if (quests == 0 && rooms != MAX__ROOMS) {
    questsNumber.setCustomValidity('Вы выбрали вариант не подходящий для заселения');
  } else if (rooms < quests) {
    questsNumber.setCustomValidity('Невозможно заселить. Выберите большее количество комнат');
  } else {
    questsNumber.setCustomValidity('');
  }
}

questsNumber.addEventListener('change', () => {
  ratioOfRoomsToQuests();
})

roomsNumber.addEventListener('change', () => {
  ratioOfRoomsToQuests();
})


