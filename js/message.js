import { isEscEvent } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const messageSuccess = successTemplate.cloneNode(true);
const messageError = errorTemplate.cloneNode(true);

//закрытие сообщения
const closeMessage = (message) => {
  message.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown(message));
  document.removeEventListener('click', onClick(message));
};

//закрытие сообщения через эскейп
const onPopupEscKeydown = (message) => {
  return (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeMessage(message);
    }
  }
};

//закрытие сообщения по клику
const onClick = (message) => {
  return (evt) => {
    evt.preventDefault();
    closeMessage(message);
  }
};

//показать сообщение в случае успеха
const showSuccessMessage = () => {
  document.body.appendChild(messageSuccess);
  messageSuccess.classList.remove('hidden');
  messageSuccess.style.zIndex = '100';
  document.addEventListener('click', onClick(messageSuccess));
  document.addEventListener('keydown', onPopupEscKeydown(messageSuccess));
};

//сообщение в случае ошибки
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