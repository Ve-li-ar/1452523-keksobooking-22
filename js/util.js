if (document.classList.contains('no-js')) {
  const form = document.querySelector('.ad-form');

  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  document.querySelector('.map-filter').classList.add('map__filters--disabled')
  form.querySelector('fieldset').setAttribute('disabled');
  document.removeChild(document.lastChild);
}
