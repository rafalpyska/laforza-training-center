export default {
  inserted: el => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        el => el.nodeName === 'IMG',
      );
      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100);
        });
        // TODO: Remove console.log error
        imageElement.addEventListener('error', () => console.log('error'));
        imageElement.src = imageElement.dataset.url;
        imageElement.removeAttribute('data-url');
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        rootMargin: '0px 0px 100px 0px',
        threshold: '0',
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (!window['IntersectionObserver']) {
      loadImage();
    } else {
      createObserver();
    }
  },
};
