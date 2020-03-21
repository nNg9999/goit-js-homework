'use strict';

console.log('Задание 4');
/**
* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
* Создай переменную counterValue в которой будет хранится текущее значение счетчика.
* Создай функции increment и decrement для увеличения и уменьшения значения счетчика
* Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
 */

// const Counter = function({ initialValue = 0, step = 1 }) {
//   this.value = initialValue;
//   this.step = step;
// };

// Counter.prototype.increment = function() {
//   this.value += this.step;
// };

// Counter.prototype.decrement = function() {
//   this.value -= this.step;
// };

// const counter = new Counter({ initialValue: 0, step: 1 });

// const counterValue = document.querySelector('#value');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');

// const updateCounterValue = () => {
//   counterValue.textContent = counter.value;
// };

// incrementBtn.addEventListener('click', () => {
//   counter.increment();
//   updateCounterValue();
// });

// decrementBtn.addEventListener('click', () => {
//   counter.decrement();
//   updateCounterValue();
// });

// console.log('END Задание 4');

// ===============================

const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
};

const actions = {
  state: {
    value: 0,
  },
  decrement() {
    this.state.value -= 1;
  },
  increment() {
    this.state.value += 1;
  },
};

const changeValue = ({ target }) => {
  actions[target.dataset.action]();
  refs.value.textContent = actions.state.value;
};

refs.counter.addEventListener('click', changeValue);
