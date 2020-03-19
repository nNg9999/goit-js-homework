//

const lazyLoad = target => {
  const options = {
    rootMargin: '50px',
    threshold: 0.01,
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imgUrl = img.dataset.lazy;
        img.setAttribute('src', imgUrl);
        img.classList.add('face-in');
        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const images = document.querySelectorAll('.gallery__image');

images.forEach(image => {
  lazyLoad(image);
});
