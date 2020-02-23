'use strict';

console.log('Задание 4');
/* Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  append(str) {
    const strSplit = this._value.split('');
    strSplit.push(str);
    const strSlice = strSplit.slice(0);
    const strJoin = strSlice.join('');
    this._value = strJoin;
    return this._value;
  }

  prepend(str) {
    const strSplit = this._value.split('');
    strSplit.unshift(str);
    const strSlice = strSplit.slice(0);
    const strJoin = strSlice.join('');
    this._value = strJoin;
    return this._value;
  }
  pad(str) {
    const strSplit = this._value.split('');
    strSplit.push(str);
    strSplit.unshift(str);
    const strSlice = strSplit.slice(0);
    const strJoin = strSlice.join('');
    this._value = strJoin;
    return this._value;
  }
}

const builder = new StringBuilder('.');
console.log(builder);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

console.log('Задание 4 END');
