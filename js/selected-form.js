const priceMinOnNight = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const selectFormType = document.querySelector('#type');
const inputFormPrice = document.querySelector('#price');

selectFormType.addEventListener('change', function (evt) {
  inputFormPrice.placeholder = priceMinOnNight[evt.target.value];
  inputFormPrice.setAttribute('min', priceMinOnNight[evt.target.value]);
})

const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');

selectTimeIn.addEventListener('change', function (evt) {
  selectTimeOut.value = evt.target.value;
})

selectTimeOut.addEventListener('change', function (evt) {
  selectTimeIn.value = evt.target.value;
})