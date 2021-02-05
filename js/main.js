/*Функция, возвращающая случайное целое число из переданного диапазона включительно*/
const randomNumber = function (min, max, n) {
  if (min < 0 || max < 0) return null; //неверный диапазон. Чтобы min и max были больше нуля
  if (min == max) return min.toFixed(n);
  let startNumber = min;
  let endNumber = max;

  //если начало диапазона больше конца диапазона - поменять местами
  if (startNumber > endNumber) {
    startNumber = max;
    endNumber = min;
  }

  //https://learn.javascript.ru/task/random-int-min-max
  const rand = startNumber + Math.random() * (endNumber + 1 - startNumber);
  return rand.toFixed(n);
}

randomNumber(2, 6);
randomNumber(3, 5, 9);
