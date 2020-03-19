'use strict';

/**
 * Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
 */

/** Разбей задание на несколько подзадач:

Создание и рендер разметки по массиву данных и предоставленному шаблону.
Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
Открытие модального окна по клику на элементе галереи.
Подмена значения атрибута src элемента img.lightbox__image.
Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
 */

/**
Стартовые файлы
В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
В файле gallery-items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оригинальное и описание.
*/

/** Разметка элемента галереи
Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
 */

/**
Дополнительно
Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

Закрытие модального окна по клику на div.lightbox__overlay.
Закрытие модального окна по нажатию клавиши ESC.
Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
 */

import images from './gallery_items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  backdrop: document.querySelector('.lightbox__content'),
  btn: document.querySelector('[data-action="close-lightbox"]'),
};

const generateGallery = images =>
  images.reduce(
    (acc, item) =>
      (acc += `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.preview}"
  >
    <img
      class="gallery__image"
      src=""
      data-lazy="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`),
    '',
  );

refs.galleryList.insertAdjacentHTML('beforeend', generateGallery(images));

refs.galleryList.addEventListener('click', handelClick);
refs.btn.addEventListener('click', handelOnClose);
refs.backdrop.addEventListener('click', handeBackdropClick);

function handelClick(e) {
  e.preventDefault();

  if (e.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.lightbox.querySelector('.lightbox__image').src = e.target.src;
    refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
    window.addEventListener('keydown', handeKeyPress);
  }
}

function handelOnClose(e) {
  refs.lightbox.classList.remove('is-open');
  window.removeEventListener('keydown', handeKeyPress);
}

function handeBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  handelOnClose();
}

function handeKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  handelOnClose();
}
