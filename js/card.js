const createCard = (card) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

  const cardExample = cardTemplate.cloneNode(true);

  cardExample.querySelector('.popup__title').textContent = card.offer.title;
  cardExample.querySelector('.popup__text--address').textContent = card.offer.address;
  cardExample.querySelector('.popup__text--price').textContent = `${card.offer.price}₽/ночь`;
  cardExample.querySelector('.popup__type').textContent = Object.values(card.offer.type);
  cardExample.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardExample.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin} выезд до ${card.offer.checkout}`;
  cardExample.querySelector('.popup__features').textContent = card.offer.features;
  cardExample.querySelector('.popup__description').textContent = card.offer.description;
  cardExample.querySelector('.popup__photos').src = card.offer.photos;
  cardExample.querySelector('.popup__avatar').src = card.avthor.avatar;

  return cardExample;
}

export { createCard };
