'use strict';

console.log('Задание 4');
/*
Задание 4
Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
*/

// eslint-disable-next-line func-names
const formatString = function(string) {
  let str;
  const strLength = string.length;

  if (strLength > 40) {
    const sliceString = string.slice(0, 40);
    str = sliceString.split(' ');
    str.splice(str.length, 0, '...');
    str = str.join(' ');
  } else {
    str = string;
  }

  return str;
};

function formatString(string) {
  return string.length > 40 ? `${string.slice(0, 39)}...` : string;
}

const formatString = (string, maxLength = 40) =>
  string.length > maxLength ? `${string.slice(0, maxLength - 1)}...` : string;

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

console.log('Задание 4 END');
