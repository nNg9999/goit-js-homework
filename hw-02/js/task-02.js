'use strict';

console.log('Задание 2');
/*
Задание 2
Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
*/

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(' ');
  const messageLength = words.length;
  const total = messageLength * pricePerWord;
  // let total = 0;
  // for (const word of words) {
  //   total += pricePerWord;
  // }
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

console.log('Задание 2 END');