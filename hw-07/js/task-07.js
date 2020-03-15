'use strict';

console.log('Задание 7');
/**
 * Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
 * и изменяет инлайн-стиль span#text обновляя свойство font-size.
 * В результате при перетаскивании ползунка будет меняться размер текста.
 */
const input = document.getElementById('font-size-control');
const span = document.getElementById('text');

input.addEventListener('input', handleInputRange);

function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + 'px';
}
console.log('END Задание 7');
