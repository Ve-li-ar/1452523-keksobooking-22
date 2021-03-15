import { isEscEvent } from './util.js';

//находим шаблон успешного сообщения
const successTemplate = document.querySelector('#success').content.querySelector('.success');
//находим шаблон сообщения об ошибке
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

//закрытие сообщения через эскейп
const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

//закрытие сообщения по клику на пустое место
const onClick = (evt) => {
  evt.preventDefault();
  closeMessage();
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
const showErrorMessage = (error) => {
  const errorMessage = errorTemplate.cloneNode(true);
  if (error) {
    errorMessage.querySelector('.error__message').textContent = error.message;
  }
  showMessage(errorMessage);
};

export { showSuccessMessage, showErrorMessage }
