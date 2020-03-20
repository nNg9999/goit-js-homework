// https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver

import images from './gallery_items.js';

const getIdGallalery = images => images.map(({ original }) => original);
const imageUrl = getIdGallalery(images);

const refs = {
  list: document.querySelector('.lightbox__image'),
  next: document.querySelector('.lightbox__next'),
  prev: document.querySelector('.lightbox__prev'),
};

const counter = {
  index: 0,
};

const repaintImage = i => {
  refs.list.src = imageUrl[i];
};

function setNextImage() {
  counter.index = (counter.index + 1) % images.length;
  repaintImage(Math.abs(counter.index));
}
function setPrevImage() {
  counter.index = (counter.index - 1) % images.length;
  repaintImage(Math.abs(counter.index));
}

refs.prev.addEventListener('click', setPrevImage);
refs.next.addEventListener('click', setNextImage);

function setImage(event) {
  let i = 0;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    i = 1;
  }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    i = -1;
  }
  counter.index = (counter.index + i) % images.length;
  repaintImage(Math.abs(counter.index));
}

window.addEventListener('keydown', setImage);
