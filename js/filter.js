const houseType = document.querySelector('#housing-type');


const filterByTypes = (item) => {
  if (item.offer.type === houseType.value || houseType.value === 'any') {
    return item;
  }
};

export { filterByTypes };