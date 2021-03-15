const MIN__LENGTH = 30;
const MAX__LENGTH = 100;
const MAX__QUESTS = 100;

const inputFormTitle = document.querySelector('#title');
const questsNumber = document.querySelector('#capacity');
const roomsNumber = document.querySelector('#room_number');

inputFormTitle.addEventListener('input', function () {
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

questsNumber.addEventListener('change', () => {
  ratioOfRoomsToQuests();
})

const ratioOfRoomsToQuests = () => {
  const rooms = roomsNumber.value;
  const quests = questsNumber.value;

  if (rooms === MAX__QUESTS && quests !== '0') {
    questsNumber.setCustomValidity('Вы выбрали вариант не подходящий для заселения');
  } else if (rooms < quests) {
    questsNumber.setCustomValidity('Невозможно заселить. Выберите большее количество комнат');
  } else {
    questsNumber.setCustomValidity('');
  }
}