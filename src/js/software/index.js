export default () => {
  const sheetCardActions = document.querySelectorAll('.sheet-card-action')
  sheetCardActions.forEach((value, key) => value.addEventListener('click', function () {
    if (!value.classList.contains('hover')) {
      const sheetCardActionHover = document.querySelector('.sheet-card-action.hover')
      if(sheetCardActionHover){
        sheetCardActionHover.classList.remove('hover')
      }
      value.classList.add('hover')
    }
  }))
}
