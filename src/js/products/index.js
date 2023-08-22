export default () => {
  const sheetCardActionProducts = document.querySelectorAll('.sheet-card-action-products-products')
  sheetCardActionProducts.forEach((value, key) => value.addEventListener('click', function () {
    if (!value.classList.contains('hover')) {
      const sheetCardActionProductHover = document.querySelector('.sheet-card-action-products-products.hover')
      if(sheetCardActionProductHover){
        sheetCardActionProductHover.classList.remove('hover')
      }
      value.classList.add('hover')
    }
  }))
}
