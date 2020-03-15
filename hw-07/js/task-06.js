'use strict';

console.log('Задание 6');
/**
 * Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов
    <input
    type="text"
    id="validation-input"
    data-length="6"
    placeholder="Введи 6 символов"
  />
  Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
  Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
  Для добавления стилей, используй CSS-классы valid и invalid.
  #validation-input {
    border: 3px solid #bdbdbd;
  }

  #validation-input.valid {
    border-color: #4caf50;
  }

  #validation-input.invalid {
    border-color: #f44336;
}

  */

const input = document.querySelector('#validation-input');

function handleInputChange(event) {
  const inputValue = event.currentTarget.value;

  if (inputValue.length === parseInt(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}

input.addEventListener('input', handleInputChange);
console.log('END Задание 6');

/*
*

const Counter = function({ initialValue = 0, step = 1 }) {
  this.value = initialValue;
  this.step = step;
};

Counter.prototype.increment = function() {
  this.value += this.step;
};

Counter.prototype.decrement = function() {
  this.value -= this.step;
};

const counter = new Counter({ initialValue: 0, step: 1 });

const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const udatecounterValue = () => {
  counterValue.textContent = counter.value;
};

incrementBtn.addEventListener('click', () => {
  counter.increment();
  udatecounterValue();
});

decrementBtn.addEventListener('click', () => {
  counter.decrement();
  udatecounterValue();
});

// ==================
// 6

//
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function handleInputChange(event) {
  output.textContent = event.currentTarget.value;
}
input.addEventListener('input', handleInputChange);
console.log(input);

*/
