export default ()=>{
  const iconVectorOne = document.getElementById('icon-vector-one');
  const iconVectorTwo = document.getElementById('icon-vector-two');
  const software = document.getElementById('software');
  const mainSoftware = document.getElementById('main-software')
  const products = document.getElementById('products');
  const mainProducts = document.getElementById('main-products')
  const menu = document.getElementById('menu');
  const menu__link = document.getElementById('menu-block')
  const menu__close = document.getElementById('menu-close')

  const close = () => {
    menu__close.classList.remove('menu_active-close')
    menu.classList.remove('menu-button_close')
    menu__link.classList.remove('menu_active')
    document.body.style.overflowY = 'scroll'
  }

  if (menu)
    menu.addEventListener('click', function () {
      if (!menu__link.classList.contains('menu_active')) {
        menu.classList.add('menu-button_close')
        menu__close.classList.add('menu_active-close')
        menu__link.classList.add('menu_active')
        document.body.style.overflowY = 'hidden'
      }

    })

  if (products)
    products.addEventListener('click', function () {
      if (!mainProducts.classList.contains('main-products-action')) {
        mainProducts.classList.add('main-products-action')
        iconVectorOne.classList.add('icon-vector-one')
      } else {
        mainProducts.classList.remove('main-products-action')
        iconVectorOne.classList.remove('icon-vector-one')
      }

    })
  if (software)
    software.addEventListener('click', function () {
      if (!mainSoftware.classList.contains('main-products-action')) {
        mainSoftware.classList.add('main-products-action')
        iconVectorTwo.classList.add('icon-vector-one')
      } else {
        mainSoftware.classList.remove('main-products-action')
        iconVectorTwo.classList.remove('icon-vector-one')
      }

    })

  menu__close.addEventListener('click', function () {
    if (menu__close.classList.contains('menu_active-close')) close()
  })

  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.media-menu_block') && !target.closest('.menu-button_close')) close()
  })
}

