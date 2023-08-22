import Swiper from 'swiper/bundle';

export default () => {
  const elementAnimation = () => {
    let options = {threshold: [0]};

    let observer = new IntersectionObserver((entry) => {
      entry.forEach(change => {
        change.target.classList.add('element-show');
      });
    }, options);

    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
      observer.observe(elm);
    }
  }
  elementAnimation()

  const mainSlider = () => {
    const swiper = new Swiper('.main-slider-swiper', {
      wrapperClass: "main-slider-swiper-wrapper",
      loop: true,
      speed: 800,
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }
  mainSlider()

  const catalogCardsSlider = () => {
    const swiper = new Swiper('.catalog-cards-swiper', {
      wrapperClass: "catalog-cards-swiper-wrapper",
      loop: true,
      speed: 800,
      slidesPerView: 3,
      centeredSlides: true,
      centerInsufficientSlides: false,
      spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  }
  catalogCardsSlider()

  const partnersSlider = () => {
    const swiper = new Swiper('.partners-swiper', {
      wrapperClass: "partners-swiper-wrapper",
      loop: true,
      speed:800,
      pagination: {
        clickable:true,
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }
  partnersSlider()
}
