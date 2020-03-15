'use strict';

/* Задание 7 - дополнительное, выполнять не обязательно
Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
*/

const newId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type, id) {
    return {
      id: [],
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(amount, 'deposit', newId());
    this.transactions.push(newTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const newTransaction = this.createTransaction(amount, 'withdraw', newId());
    this.transactions.push(newTransaction);
    if (amount > this.balance) {
      alert('Снятие такой суммы не возможно, недостаточно средств');
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    const result = [];
    for (let i = 0; i < this.transactions.length; i += 1) {
      const keys = Object.keys(this.transactions[i]);
      // eslint-disable-next-line no-restricted-syntax
      for (const key of keys)
        if (this.transactions[i][key] === id) {
          result.push(this.transactions[i]);
        }
    }
    return result;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let counter1 = 0;
    let counter2 = 0;

    // let counter1 = 0;
    // let counter2 = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      Object.entries(this.transactions[i]).forEach(([key, value]) => {
        // console.log([key, value]);
        if (value === 'deposit') {
          counter1 += this.transactions[i].amount;
        }
        if (value === 'withdraw') {
          counter2 += this.transactions[i].amount;
        }
      });
    }
    return { DEPOSIT: counter1, WITHDRAW: counter2 };
  },
};

// console.table(account.createTransaction(100, 'deposit'));
// console.table(account.createTransaction(800, 'withdraw'));

account.deposit(1000);
account.deposit(5000);
console.log(account.getBalance());

account.withdraw(1000);
account.withdraw(2000);
console.log(account.getBalance());

// console.log(account.transactions);

console.table(account.getTransactionDetails('id-01'));
console.table(account.getTransactionDetails('id-02'));

console.table(account.getTransactionTotal('deposit'));
console.table(account.getTransactionTotal('withdraw'));
console.table(account.getBalance());
