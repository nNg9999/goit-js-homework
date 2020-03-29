import storage from '../utils/storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  theme: document.querySelector('input.js-switch-input'),
  body: document.querySelector('body'),
};

const persistedTheme = storage.load('theme');
refs.body.classList.add(persistedTheme);

if (persistedTheme == Theme.LIGHT) {
  refs.theme.checked = true;
}

refs.theme.addEventListener('change', e => {
  e.preventDefault();

  let result;
  if (refs.theme.checked) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    result = Theme.LIGHT;
  } else {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    result = Theme.DARK;
  }

  storage.save('theme', result);
});
