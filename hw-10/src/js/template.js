import menu from '../menu.json';

import menuItemTemplate from '../templates/menu-item.hbs';

const refs = {
  menuItem: document.querySelector('.js-menu'),
};

// Создаем всю разметку из шаблона списка
const markup = menuItemTemplate(menu);

refs.menuItem.insertAdjacentHTML('beforeend', markup);

// Создаем всю разметку из шаблона элемента списка
// buildMenuItem(menu);

// function buildMenuItem(menu) {
//   const markup = menu.map(menu => menuItemTemplate(menu)).join('');
//   refs.menuItem.insertAdjacentHTML('beforeend', markup);
// console.log(markup);
// }

// localStorage.setItem('settings', JSON.stringify(Theme));
// const persistedSettings = localStorage.getItem('settings');
// const parsedSetting = JSON.parse(persistedSettings);
// console.log(parsedSetting);
