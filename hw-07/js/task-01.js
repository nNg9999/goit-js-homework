'use strict';

console.log('Задание 1');
/**
 * В HTML есть список категорий ul#categories.
 * Напиши скрипт, который выполнит следующие операции.
 * Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
 * для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
 * Например для первой категории получится:
  Категория: Животные
  Количество элементов: 4
 */

const categories = document.querySelectorAll('li.item');
console.log(`В списке ${categories.length} категории`);

categories.forEach(element => {
  const text = element.querySelector('h2');
  const item = element.querySelectorAll('li');
  console.log(`Категория: ${text.textContent}`);
  console.log(`Количество элементов ${item.length}`);
});
console.log('END Задание 1');

// для другого через map  потім один раз append
// ingradients.appends(...arr)

// вставляэмо url
// задание 4 робыли
// 6 blur  через клас лыст
// 7

// через creet Element
// innerHTML='' почистити весь html
