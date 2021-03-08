const nojs = () => {
  if (document.body.classList.contains('.no-js')) {
    const form = document.querySelector('.ad-form');
    const mapFilter = document.querySelector('.map-filters');

    form.classList.add('ad-form--disabled');
    mapFilter.classList.add('map__filters--disabled')
    form.querySelector('fieldset').setAttribute('disabled', 'disabled');
    document.removeChild(document.lastChild);
  }
};

export { nojs };
