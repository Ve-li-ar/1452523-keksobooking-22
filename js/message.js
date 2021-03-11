import { isEscEvent } from './util.js';

//находим шаблон успешного сообщения
const successTemplate = document.querySelector('#success');
//находим в нем класс success
const successMessageFromTemplate = successTemplate.content.querySelector('.success');
//находим шаблон сообщения об ошибке
const errorTemplate = document.querySelector('#error');
//находим в нем класс error
const errorMessageFromTemplate = errorTemplate.content.querySelector('.error');
//клонируем шаблоны из сообщений
const messageSuccess = successMessageFromTemplate.cloneNode(true);
const messageError = errorMessageFromTemplate.cloneNode(true);

//закрытие сообщения через эскейп
const onPopupEscKeydown = (message) => {
  return (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeMessage(message);
    }
  }
};

//закрытие сообщения по клику на пустое место
const onClick = (message) => {
  return (evt) => {
    evt.preventDefault();
    closeMessage(message);
  }
};

//закрытие сообщения
//удаляем слушатели
const closeMessage = (message) => {
  message.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown(message));
  document.removeEventListener('click', onClick(message));
};

//показать сообщение в случае успеха
//добавляем чайлда в конец боди и удаляем у него хидден
const showSuccessMessage = () => {
  document.body.appendChild(messageSuccess);
  messageSuccess.classList.remove('hidden');
  messageSuccess.style.zIndex = '100';
  document.addEventListener('click', onClick(messageSuccess));
  document.addEventListener('keydown', onPopupEscKeydown(messageSuccess));
};

//сообщение в случае ошибки
//добавляем чайлда в конец боди и удаляем у него хидден
const showErrorMessage = () => {
  const buttonClose = messageError.querySelector('.error__button');
  document.body.appendChild(messageError);
  messageError.classList.remove('hidden');
  messageError.style.zIndex = '100';
  buttonClose.addEventListener('click', onClick(messageError));
  document.addEventListener('click', onClick(messageError));
  document.addEventListener('keydown', onPopupEscKeydown(messageError));
};

export { showSuccessMessage, showErrorMessage }