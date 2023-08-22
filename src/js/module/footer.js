export default () => {
  const product = document.getElementById('product-list-li')
  const list = document.getElementById('footer-media-products-list')
  const borderProduct = document.getElementById('footer-media-list')

  const listTwo = document.getElementById('footer-media-software-list')
  const softwareId = document.getElementById('software-list-li')
  const borderSoftware = document.getElementById('border-software')

  const listThree = document.getElementById('footer-media-follow-list')
  const followId = document.getElementById('follow-list-li')
  const borderFollow = document.getElementById('follow-border')

  const followLink = document.getElementById('follow-link')


  if (list) {
    product.addEventListener('click', function () {
      if (!list.classList.contains('footer-media-products-action')) {
        list.classList.add('footer-media-products-action')
        borderProduct.classList.add('border-footer-media')
      } else {
        list.classList.remove('footer-media-products-action')
        borderProduct.classList.remove('border-footer-media')
      }
    })
  }

  if (listTwo) {
    softwareId.addEventListener('click', function () {
      if (!listTwo.classList.contains('footer-media-software-action')) {
        listTwo.classList.add('footer-media-software-action')
        borderSoftware.classList.add('border-footer-media')
      } else {
        listTwo.classList.remove('footer-media-software-action')
        borderSoftware.classList.remove('border-footer-media')
      }
    })
  }

  if (listThree) {
    followId.addEventListener('click', function () {
      if (!listThree.classList.contains('footer-media-follow-action')) {
        listThree.classList.add('footer-media-follow-action')
        borderFollow.classList.add('border-footer-media')
      } else {
        listThree.classList.remove('footer-media-follow-action')
        borderFollow.classList.remove('border-footer-media')
      }
    })
  }

  if (listThree) {
    followLink.addEventListener('click', function () {
      if (!listThree.classList.contains('footer-media-follow-action')) {
        listThree.classList.add('footer-media-follow-action')
      } else {
        listThree.classList.remove('footer-media-follow-action')
      }
    })
  }
}
