'use strict';

console.log('Задание 5');
/**
 * Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
 * подставляет его текущее значение в span#name-output.
 * Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
 
*/

const refs = {
  userInput: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.userInput.addEventListener('input', () => {
  refs.output.textContent = refs.userInput.value || 'незнакомец';
});

// ===============================================
// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// function handleInputChange(event) {
//   output.textContent = event.currentTarget.value || 'незнакомец';
// }
// input.addEventListener('input', handleInputChange);

console.log('END Задание 5');
