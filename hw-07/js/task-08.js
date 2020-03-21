'use strict';

console.log('Задание 8');
/**
* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>

 */
const refs = {
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.getElementById('boxes'),
};

refs.render.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

// function createBoxes(amount) {
//   const basicSize = 50;
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i += 1) {
//     const size = basicSize + i * 20;
//     const div = document.createElement('div');
//     div.style.cssText = `width: ${size}px; height: ${size}px;
//     background-color: rgb(${random()} , ${random()} , ${random()});`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

function createBoxes(n) {
  const initSize = 30;
  const step = 10;
  const html = Array(n)
    .fill('')
    .map(
      (e, i) => `<div id="boxes">
   <div style =" width: ${initSize + i * step}px; height: ${initSize +
        i * step}px;
    background-color: rgb(${random()} , ${random()} , ${random()});">
   </div> 
   </div>`,
    )
    .join('\n');

  refs.boxes.insertAdjacentHTML('afterbegin', html);
}

function random() {
  return Math.floor(Math.random() * 256);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

console.log('END Задание 8');
