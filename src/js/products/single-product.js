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
    let swiper2 = new Swiper(".instruction-product-instruction-swiper-2", {
      wrapperClass: "instruction-product-instruction-swiper-wrapper-2",
      spaceBetween: 9,
      slidesPerView: 7,
      allowTouchMove: false,
      navigation: {
        nextEl: ".instruction-product-instruction-swiper-2-button-next",
        prevEl: ".instruction-product-instruction-swiper-2-button-prev",
      },
    });

    let swiper = new Swiper(".instruction-product-instruction-swiper", {
      wrapperClass: "instruction-product-instruction-swiper-wrapper",
      spaceBetween: 9,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: ".instruction-product-instruction-swiper-button-next",
        prevEl: ".instruction-product-instruction-swiper-button-prev",
      },
      thumbs: {
        swiper: swiper2,
      },
    });
  }
  instruction()

  const certificate = () => {
    let swiper2 = new Swiper(".certificate-product-certificate-swiper-2", {
      wrapperClass: "certificate-product-certificate-swiper-wrapper-2",
      spaceBetween: 9,
      slidesPerView: 7,
      allowTouchMove: false,
      navigation: {
        nextEl: ".certificate-product-certificate-swiper-2-button-next",
        prevEl: ".certificate-product-certificate-swiper-2-button-prev",
      },
    });

    let swiper = new Swiper(".certificate-product-certificate-swiper", {
      wrapperClass: "certificate-product-certificate-swiper-wrapper",
      spaceBetween: 9,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: ".certificate-product-certificate-swiper-button-next",
        prevEl: ".certificate-product-certificate-swiper-button-prev",
      },
      thumbs: {
        swiper: swiper2,
      },
    });
  }
  certificate()
}
