const GET_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const POST_URL = 'https://22.javascript.pages.academy/keksobooking';
import { showAlert } from './util.js';

//приемка данных с сервера
const getData = (onSuccess, onError) => {
  return fetch(GET_URL,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить данные');
      }
    })

    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

//передача данных на сервер
const sendData = (onSuccess, onError, body) => {
  fetch(POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export { getData, sendData }