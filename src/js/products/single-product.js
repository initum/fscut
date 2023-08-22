import Swiper from 'swiper/bundle';

export default () => {
  const products = () => {
    const products = document.querySelectorAll(".single-product .lonely-product-li")
    products.forEach((value, key) => value.addEventListener('click', function () {
      if (!value.classList.contains('lonely-product-active')) {
        const productHover = document.querySelector('.single-product .lonely-product-li.lonely-product-active')
        const productHoverId = productHover.dataset.id
        const productHoverContent = document.querySelector(`.single-product .single-products-content[data-id="${productHoverId}"]`)
        if (productHover && productHoverContent) {
          productHover.classList.remove('lonely-product-active')
          productHoverContent.classList.remove('single-products-content-active')
        }
        const contentHoverId = value.dataset.id
        const contentHoverContent = document.querySelector(`.single-product .single-products-content[data-id="${contentHoverId}"]`)
        value.classList.add('lonely-product-active')
        contentHoverContent.classList.add('single-products-content-active')
      }
    }))
  }
  products()

  const instruction = () => {
    let swiper = new Swiper(".instruction-product-swiper", {
      wrapperClass: "instruction-product-swiper-wrapper",
      spaceBetween: 10,
      navigation: {
        nextEl: ".instruction-product-swiper-button-next",
        prevEl: ".instruction-product-swiper-button-prev",
      },
    });
    let swiper2 = new Swiper(".instruction-product-swiper-2", {
      wrapperClass: "instruction-product-swiper-wrapper-2",
      spaceBetween: 10,
      navigation: {
        nextEl: ".slider-two-next",
        prevEl: ".slider-two-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
    swiper.on('slideChange', () => swiper2.slideTo(swiper.activeIndex));
  }
  instruction()

  const certificate = () => {
    let swiper = new Swiper(".certificate-product-swiper", {
      wrapperClass: "certificate-product-swiper-wrapper",
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".certificate-product-swiper-button-next",
        prevEl: ".certificate-product-swiper-button-prev",
      },
    });

    let swiper2 = new Swiper(".certificate-product-swiper-2", {
      wrapperClass: "certificate-product-swiper-wrapper-2",
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".slider-two-next",
        prevEl: ".slider-two-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

    swiper.on('slideChange', () => swiper2.slideTo(swiper.activeIndex));
  }
  certificate()
}
