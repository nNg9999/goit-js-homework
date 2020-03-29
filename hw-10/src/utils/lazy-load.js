const lazyLoad = target => {
  const options = {
    rootMargin: '50px',
    threshold: 0.01,
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log(entry);

      if (entry.isIntersecting) {
        const img = entry.target;
        const imgUrl = img.dataset.lazy;
        console.log(imgUrl);

        img.setAttribute('src', imgUrl);
        img.classList.add('face-in');
        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const images = document.querySelectorAll('.card__image');
console.log(images);

images.forEach(image => {
  lazyLoad(image);
});
