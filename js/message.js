import { isEscEvent } from './util.js';

//находим шаблон успешного сообщения
const successTemplate = document.querySelector('#success');
//находим в нем класс success
//const successMessageFromTemplate = successTemplate.content.querySelector('.success');
//находим шаблон сообщения об ошибке
const errorTemplate = document.querySelector('#error');
//находим в нем класс error
//const errorMessageFromTemplate = errorTemplate.content.querySelector('.error');
//клонируем шаблоны из сообщений
//const messageSuccess = successMessageFromTemplate.cloneNode(true);
//const messageError = errorMessageFromTemplate.cloneNode(true);
const closeButton = document.querySelector('.error__button');

//закрытие сообщения через эскейп
const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage;
  }
}

//закрытие сообщения по клику на пустое место
const onClick = (evt) => {
  evt.preventDefault();
  closeMessage;
};

//закрытие сообщения
//удаляем слушатели
const closeMessage = () => {
  document.querySelectorAll('.success, .error').forEach((message) => message.remove());
  document.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
};


//Универсальная функция показа сообщения
const showMessage = (message) => {
  document.body.appendChild(message);
  message.classList.remove('hidden');
  message.style.zIndex = '9999999';
  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

//Функция отображения успешного сообщения
const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  showMessage(successMessage);
};

// Функция отображения сообщения об ошибке.
const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  showMessage(errorMessage);
  closeButton.addEventListener('click', onClick);
};
export { showSuccessMessage, showErrorMessage }